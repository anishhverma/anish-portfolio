import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[320px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl ${className}`}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-slate-900"></div>
      
      {/* Power Button */}
      <div className="absolute -right-[11px] top-24 h-12 w-1 rounded-r-md bg-slate-800"></div>
      
      {/* Volume Buttons */}
      <div className="absolute -left-[11px] top-24 h-12 w-1 rounded-l-md bg-slate-800"></div>
      <div className="absolute -left-[11px] top-40 h-12 w-1 rounded-l-md bg-slate-800"></div>

      {/* Screen Content */}
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-slate-800">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, 320px"
        />
      </div>
    </div>
  );
}
