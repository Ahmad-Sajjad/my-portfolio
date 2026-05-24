import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * iOS Safari "Add to Home Screen" icon (180x180, the size Apple expects).
 * Same "AS." monogram as the standard favicon but rendered larger for
 * a sharp home-screen tile.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0C0C0C",
          color: "#FBFBFA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 110,
          fontWeight: 600,
          letterSpacing: -4,
          fontFamily: "serif",
        }}
      >
        AS
        <span
          style={{
            color: "#EA580C",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size },
  );
}
