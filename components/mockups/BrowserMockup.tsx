import React from "react";
import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function BrowserMockup({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl ${className}`}
    >
      {/* macOS-style Header */}
      <div className="flex h-10 items-center gap-2 border-b border-slate-700/50 bg-slate-800 px-4">
        <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
        <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
      </div>

      {/* Screen Content */}
      <div className={`relative w-full bg-slate-950 ${aspectRatio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
      </div>
    </div>
  );
}
