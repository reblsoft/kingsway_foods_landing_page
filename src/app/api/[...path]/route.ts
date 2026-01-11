// import { fingerprintError } from "@/lib/utilityFunctions"; 
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  // AWAIT IS NECESSARY! Fuck vscode
  const { path } = await params;
  return handleProxyRequest(request, "GET", path);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const { path } = await params;
  return handleProxyRequest(request, "POST", path);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const { path } = await params;
  return handleProxyRequest(request, "PUT", path);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const { path } = await params;
  return handleProxyRequest(request, "DELETE", path);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const { path } = await params;
  return handleProxyRequest(request, "PATCH", path);
}

async function handleProxyRequest(
  request: NextRequest,
  method: string,
  pathSegments: string[]
) {
  try {
    const cookieStore = cookies();
    const authToken = (await cookieStore).get("auth-token");
    const backendUrl = process.env.BASE_URL;

    if (!backendUrl) {
      return NextResponse.json(
        {
          error:
            "Backend URL not configured. Please set BACKEND_URL environment variable.",
        },
        { status: 500 }
      );
    }

    // Construct the full backend URL
    const path = "/" + pathSegments.join("/");
    // const path = new URL(request.url).pathname.split("/proxy")[1];
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const fullBackendUrl = `${backendUrl}${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Get headers from the original request
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    if (method == "GET") {
      headers["ngrok-skip-browser-warning"] = "true";
    }

    // if (authToken && authToken.value !== "") {
    //   headers["Authorization"] = `Bearer ${authToken.value}`;
    // } else {
    //   return new NextResponse(null, { status: 401 });
    // }

    // Get request body for methods that support it
    let body = undefined;
    if (["POST", "PUT", "PATCH"].includes(method)) {
      const contentType = request.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        body = JSON.stringify(await request.json());
      } else if (contentType?.includes("application/x-www-form-urlencoded")) {
        body = await request.text();
      } else if (contentType?.includes("multipart/form-data")) {
        // For file uploads, pass through as-is
        body = await request.blob();
      } else {
        body = await request.text();
      }
    }

    // Make the request to the backend
    const response = await fetch(fullBackendUrl, {
      method,
      headers,
      body,
    });

    // Get response data
    const contentType = response.headers.get("content-type");
    let data;

    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Forward the response with CORS headers
    return new NextResponse(
      contentType?.includes("application/json") ? JSON.stringify(data) : data,
      {
        status: response.status,
        headers: {
          "Content-Type": contentType || "text/plain",
        },
      }
    );
  } catch (error) {
    // const { friendly, raw } = fingerprintError(error);
    console.error("Proxy request error:", error);
    return NextResponse.json(
      {
        error: "Network Error",
        details: error,
      },
      { status: 500 }
    );
  }
}

// Handle preflight OPTIONS requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
  });
}
