import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Lightweight, dependency-free bar chart for before/after style comparisons.
 * Renders as inline SVG so it needs no charting library.
 *
 * props.data: [{ label, value, color }]
 * props.unit: string appended after each value (e.g. "%")
 * props.title: chart title
 * props.height: pixel height of the chart area (default 180)
 */
export default function ComparisonBarChart({ data, unit = "", title, height = 180 }) {
  const maxValue = Math.max(...data.map((d) => d.value)) * 1.15;
  const barWidth = 120;
  const gap = 56;
  const chartWidth = data.length * barWidth + (data.length - 1) * gap;

  return (
    <Box sx={{ mb: 2 }}>
      {title && (
        <Typography
          variant="subtitle2"
          sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 600, mb: 1.5, textAlign: "center" }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", overflowX: "auto" }}>
        <svg width={chartWidth} height={height + 50} role="img" aria-label={title || "comparison chart"}>
          {data.map((d, i) => {
            const barHeight = (d.value / maxValue) * height;
            const x = i * (barWidth + gap);
            const y = height - barHeight;
            return (
              <g key={d.label}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={8}
                  fill={d.color || "#53b374"}
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 10}
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="700"
                >
                  {d.value}
                  {unit}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={height + 24}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.75)"
                  fontSize="13"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </Box>
    </Box>
  );
}
