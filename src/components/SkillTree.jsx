// src/components/SkillTree.jsx

import { useRef, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { treeData } from "../constants/index.jsx";

const SkillTree = () => {
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Adjust tree center on mount & resize
  useEffect(() => {
    const dims = treeRef.current.getBoundingClientRect();
    setTranslate({
      x: dims.width / 2,
      y: isMobile ? 50 : 100,   // smaller top spacing on mobile
    });
  }, [isMobile]);

  // Responsive node sizes
  const LEVEL_SIZES = isMobile
    ? [
        { w: 60, h: 45, icon: 18, text: 9 },
        { w: 50, h: 40, icon: 16, text: 8 },
        { w: 40, h: 35, icon: 14, text:  7},
      ]
    : [
        { w: 180, h: 65, icon: 28, text: 13 },
        { w: 160, h: 60, icon: 26, text: 12 },
        { w: 150, h: 55, icon: 24, text: 11 },
      ];

  const renderNode = ({ nodeDatum, toggleNode }) => {
    const depth = nodeDatum.__rd3t.depth;
    const size = LEVEL_SIZES[Math.min(depth, LEVEL_SIZES.length - 1)];

    const color = nodeDatum.attributes?.color || "#7dd3fc";
    const bg = nodeDatum.attributes?.bgColor || "#1e293b";
    const icon = nodeDatum.attributes?.icon ?? null;

    return (
      <g onClick={toggleNode} style={{ cursor: "pointer" }}>
        <rect
          width={size.w}
          height={size.h}
          x={-size.w / 2}
          y={-size.h / 2}
          rx="30"
          style={{
            fill: bg,
            stroke: color,
            strokeWidth: 3,
          }}
        />

        {icon && (
          <foreignObject
            x={-size.icon / 2}
            y={-(size.h / 2) + 4}
            width={size.icon}
            height={size.icon}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: size.icon,
                color: color,
              }}
            >
              {icon}
            </div>
          </foreignObject>
        )}

        <text fill="#ffffff" fontSize={size.text} textAnchor="middle" alignmentBaseline="middle" y={size.h / 4} style={{ fontWeight: 600, pointerEvents: "none", paintOrder: "stroke", stroke: "transparent", strokeWidth: 0, }} > {nodeDatum.name} </text>
      </g>
    );
  };

  return (
    <div
      ref={treeRef}
      style={{
        width: "100%",
        height: isMobile ? "400px" : "650px",
        overflowX: "auto",       // allow horizontal scroll on small screens
        overflowY: "auto",
      }}
      className="bg-transparent"
    >
      <Tree
        data={treeData}
        translate={translate}
        orientation="vertical"
        collapsible={true}
        zoomable={false}
        draggable={false}
        initialDepth={0}
        separation={{
          siblings: isMobile ? 0.4 : 1.2,
          nonSiblings: isMobile ? 1.5 : 1.3,
        }}
        renderCustomNodeElement={renderNode}
        pathFunc={(link) => {
          const startX = link.source.x;
          const startY = link.source.y + 30;
          const endX = link.target.x;
          const endY = link.target.y - 30;
          return `M${startX},${startY} L${endX},${endY}`;
        }}
        styles={{
          links: {
            stroke: "#ffffff",
            strokeWidth: isMobile ? 4 : 6,
          },
        }}
      />
    </div>
  );
};

export default SkillTree;
