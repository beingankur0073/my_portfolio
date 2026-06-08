import { memo } from "react";
import AnimatedNumber from "./AnimatedNumber";

const CardContent = memo(({ plat, isHovered, onHoverStart, onHoverEnd, isInView }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${plat.colors.join(", ")})`,
  };

  const baseStyle = {
    backgroundColor: "rgba(7, 7, 7, 0.5)",
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center pt-3 rounded-2xl transition-all duration-300 backdrop-blur-md"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={isHovered ? gradientStyle : baseStyle}
    >
      <img
        width={100}
        height={100}
        className="mb-2 rounded-3xl object-cover"
        src={plat.image}
        alt={plat.title}
      />

      <p className="font-bold text-xl mb-1 text-center">{plat.title}</p>
      <p className="text-neutral-400 text-sm text-center px-1 mb-1">{plat.des}</p>

      {plat.badgeImg && (
        <img
          src={plat.badgeImg}
          alt="badge"
          className={`mb-1 ${
            plat.title === "LeetCode"
              ? "w-10 h-11"
              : plat.title === "Codechef"
              ? "w-auto h-8"
              : "w-6 h-6"
          }`}
        />
      )}

      <div className="flex flex-col items-center px-2 text-sm gap-1 mb-4 mt-auto pt-1">
        <p className="font-semibold">
          Max-Rating:{" "}
          <span className="font-light text-lg">
            <AnimatedNumber value={plat.rating} trigger={isInView} />
          </span>
        </p>
        <p className="font-semibold">
          Problems:{" "}
          <span className="font-light text-lg">
            <AnimatedNumber value={plat.count} trigger={isInView} />
          </span>
        </p>
      </div>
    </div>
  );
});

CardContent.displayName = "CardContent";
export default CardContent;