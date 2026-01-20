"use client";

import { useEffect } from "react";

interface ModalLayoutProps {
  children: React.ReactNode;
  onClose: () => void;
}

function ModalLayout({ children, onClose }: ModalLayoutProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div 
      className="max-sm:bg-black/30 bg-black/50 h-full w-full min-h-screen min-w-screen fixed z-40 top-0 backdrop-blur-xs flex justify-center items-center"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;