type SpiceMeterProps = {
  level?: number; // 0-5
  label?: string;
};

export default function SpiceMeter({ level = 3, label = "Spice level" }: SpiceMeterProps) {
  const pct = (level / 5) * 100;
  return (
    <div className="flex items-center gap-2" title={`${label}: ${level}/5`}>
      <div className="relative h-6 w-6 shrink-0">
        <svg viewBox="0 0 36 36" className="h-6 w-6 -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(243,234,217,0.15)" strokeWidth="4" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="var(--color-vada-red)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * 94.2} 94.2`}
          />
        </svg>
      </div>
      <span className="font-body text-xs font-semibold uppercase tracking-wide text-papad-dim">
        {label}
      </span>
    </div>
  );
}
