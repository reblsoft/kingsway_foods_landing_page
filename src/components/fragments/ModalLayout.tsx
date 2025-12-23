"use client";

import { useEffect } from "react";

    function ModalLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Disable scrolling
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
        // Restore original overflow
        document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
            <div className="max-sm:bg-black/30 bg-black/50 h-full w-full min-h-screen min-w-screen fixed z-40 top-0 backdrop-blur-xs flex justify-center items-center ">
        {children}
        </div>
    )
    }

export default ModalLayout
