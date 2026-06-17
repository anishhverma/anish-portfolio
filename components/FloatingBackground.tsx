"use client";

export default function FloatingBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Orb 1 — Large blue, top-left drift */}
      <div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] animate-[float-1_20s_ease-in-out_infinite] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
        }}
      />

      {/* Orb 2 — Green, bottom-right drift */}
      <div
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] animate-[float-2_25s_ease-in-out_infinite] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,1) 0%, transparent 70%)",
        }}
      />

      {/* Orb 3 — Blue, center drift */}
      <div
        className="absolute left-1/2 top-1/3 h-[450px] w-[450px] animate-[float-3_22s_ease-in-out_infinite] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
        }}
      />

      {/* Orb 4 — Green, top-right drift */}
      <div
        className="absolute -top-20 right-1/4 h-[350px] w-[350px] animate-[float-4_28s_ease-in-out_infinite] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,1) 0%, transparent 70%)",
        }}
      />

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(80px, 40px);
          }
          50% {
            transform: translate(40px, 80px);
          }
          75% {
            transform: translate(-30px, 50px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-60px, -30px);
          }
          50% {
            transform: translate(-30px, -70px);
          }
          75% {
            transform: translate(40px, -40px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          25% {
            transform: translate(-40%, -40px);
          }
          50% {
            transform: translate(-60%, 30px);
          }
          75% {
            transform: translate(-45%, -20px);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-50px, 60px);
          }
          50% {
            transform: translate(30px, 40px);
          }
          75% {
            transform: translate(-20px, -30px);
          }
        }
      `}</style>
    </div>
  );
}
