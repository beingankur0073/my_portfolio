import { memo } from "react";
import AnimatedNumber from "./AnimatedNumber";
import { Trophy } from "lucide-react";

const CardContent = memo(({ plat, isHovered, onHoverStart, onHoverEnd, isInView }) => {
  if (!plat) return null;

  // Safe configuration join to feed clean custom properties seamlessly into your styles
  const dynamicGradient = Array.isArray(plat.colors) ? plat.colors.join(", ") : "#22d3ee, #a855f7";

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      /* 🎨 Tailwind v4 Style Variable Bridge:
         Injecting variables as explicit runtime values to allow CSS engine compilers
         to register dynamic backgrounds natively without triggering layout shifts.
      */
      style={{
        "--card-hover-gradient": `linear-gradient(to bottom right, ${dynamicGradient})`
      }}
      className={`w-full h-full flex flex-col items-center pt-5 pb-4 px-4 rounded-2xl border transition-all duration-500 backdrop-blur-md relative overflow-hidden group select-none ${
        isHovered 
          ? "bg-[image:var(--card-hover-gradient)] border-neutral-700/40 shadow-2xl scale-[1.01]" 
          : "bg-neutral-950/40 border-neutral-800/80 hover:border-neutral-800"
      }`}
    >
      {/* Dynamic background ambient blur glow ring effect on card hvers */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 🏙️ Platform Main Image Branding Node */}
      <div className="p-2 rounded-2xl bg-neutral-900 border border-neutral-800/80 shrink-0 mb-3 group-hover:scale-105 transition-transform duration-300">
        <img
          width={48}
          height={48}
          className="rounded-xl object-cover filter brightness-[1.02]"
          src={plat.image}
          alt={`${plat.title} Dashboard`}
          loading="lazy"
        />
      </div>

      {/* Typography Block */}
      <h3 className="font-bold text-base text-white tracking-tight mb-1 text-center font-mono">
        {plat.title}
      </h3>
      <p className="text-neutral-400 text-xs text-center leading-normal px-2 mb-4 font-normal max-w-[180px] line-clamp-2">
        {plat.des}
      </p>

      {/* 🏆 Platform Ranking Badge Vector Layer */}
      {plat.badgeImg && (
        <div className="my-auto flex items-center justify-center min-h-[48px] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] animate-pulse">
          <img
            src={plat.badgeImg}
            alt={`${plat.title} Current Rank Badge`}
            /* ⚡ FIX: Replaced explicit multi-tier string conditions with a uniform height track 
               coupled with object-contain to scale all competitive ranking graphics cleanly.
            */
            className="h-10 w-auto object-contain max-w-[90px]"
          />
        </div>
      )}

      {/* 📊 Core Competitive Stat Counters Data Row */}
      <div className="w-full flex flex-col gap-2 px-1 text-xs font-mono text-neutral-400 mt-auto pt-4 border-t border-neutral-900/40">
        
        <div className="flex items-center justify-between w-full">
          <span className="text-green-200 font-medium flex items-center gap-1">
            <Trophy size={11} className="text-green-200" /> Max Rating
          </span>
          <span className="font-bold text-sm text-neutral-200 tracking-tight">
            <AnimatedNumber value={plat.rating} trigger={isInView} />
          </span>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-green-200 font-medium">Σ Problems</span>
          <span className="font-bold text-sm text-neutral-200 tracking-tight">
            <AnimatedNumber value={plat.count} trigger={isInView} />
          </span>
        </div>

      </div>
    </div>
  );
});

CardContent.displayName = "CardContent";
export default CardContent;