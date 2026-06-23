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
      className={`relative mx-auto w-[260px] sm:w-[280px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl ring-1 ring-slate-700/50 ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-slate-900" />

      {/* Power Button */}
      <div className="absolute -right-[9px] top-24 h-10 w-[3px] rounded-r-sm bg-slate-700" />

      {/* Volume Buttons */}
      <div className="absolute -left-[9px] top-20 h-8 w-[3px] rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[9px] top-32 h-8 w-[3px] rounded-l-sm bg-slate-700" />

      {/* Screen Content */}
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 260px, 280px"
          loading="lazy"
        />
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 z-20 h-1 w-[100px] -translate-x-1/2 rounded-full bg-slate-600" />
    </div>
  );
}
