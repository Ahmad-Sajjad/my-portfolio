import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Site favicon — replaces Next.js / Vercel default. "AS." monogram
 * matching the hero design (dark bg, white initials, accent-orange
 * italic period). Rendered dynamically by Next.js at request time.
 */
export default function Icon() {
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
          fontSize: 38,
          fontWeight: 600,
          letterSpacing: -1.5,
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
