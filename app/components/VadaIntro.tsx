"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "vcv-intro-seen";

export default function VadaIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) return;

    const showTimer = setTimeout(() => {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }, 0);

    const leaveTimer = setTimeout(() => setLeaving(true), 1600);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 2000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading Vidarbha Cha Vadewala"
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink transition-opacity duration-400 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-40 w-40 items-center justify-center">
        {/* kadhai / pan */}
        <div className="absolute bottom-2 h-6 w-32 rounded-full bg-steel" />
        <div className="absolute bottom-2 h-3 w-28 rounded-full bg-black/40 blur-[2px]" />

        {/* oil bubbles */}
        <span className="vada-bubble" style={{ left: "38%", animationDelay: "0s" }} />
        <span className="vada-bubble" style={{ left: "50%", animationDelay: "0.3s" }} />
        <span className="vada-bubble" style={{ left: "62%", animationDelay: "0.6s" }} />

        {/* the vada itself, frying/bouncing */}
        <div className="vada-fry relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-turmeric bg-vada-red shadow-[0_0_25px_rgba(196,30,42,0.55)]">
          <span className="h-3 w-3 rounded-full bg-ink/70" />
        </div>
      </div>

      <p className="mt-6 font-marathi text-xl font-bold tracking-wide text-papad">
        विदर्भाचा वडेवाला
      </p>
      <p className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-turmeric">
        Frying up something spicy
      </p>

      <style>{`
        @keyframes vada-fry-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-14px) scale(1.03); }
        }
        .vada-fry {
          animation: vada-fry-bounce 0.9s ease-in-out infinite;
        }
        @keyframes vada-bubble-rise {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          30% { opacity: 0.9; }
          100% { transform: translateY(-46px) scale(1); opacity: 0; }
        }
        .vada-bubble {
          position: absolute;
          bottom: 14px;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(243, 234, 217, 0.7);
          animation: vada-bubble-rise 1.1s ease-in infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .vada-fry, .vada-bubble {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
