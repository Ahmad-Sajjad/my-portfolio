import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmad Sajjad — Full Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0C0C0C",
          color: "#F2F2F2",
          padding: 80,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 80,
            border: "2px solid #232323",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 140,
            right: 180,
            width: 160,
            height: 160,
            background: "#F97316",
            opacity: 0.75,
            borderRadius: 999,
            display: "flex",
            filter: "blur(2px)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              fontFamily: "monospace",
              color: "#828282",
              letterSpacing: 6,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Ahmad Sajjad
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 220,
              fontWeight: 350,
              letterSpacing: -8,
              lineHeight: 0.95,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            AS
            <span
              style={{
                color: "#F97316",
                fontStyle: "italic",
                display: "flex",
              }}
            >
              .
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: "monospace",
              color: "#828282",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Full Stack &amp; AI Engineer
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
