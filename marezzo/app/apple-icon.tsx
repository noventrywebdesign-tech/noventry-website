import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#120d0a",
        }}
      >
        <svg width="130" height="130" viewBox="0 0 48 48" fill="none" style={{ position: "absolute" }}>
          <circle cx="24" cy="24" r="21" stroke="#d68a52" strokeWidth="1.5" opacity="0.65" />
        </svg>
        <div
          style={{
            position: "absolute",
            top: 32,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#d1502e",
          }}
        />
        <div style={{ display: "flex", fontSize: 68, fontFamily: "serif", color: "#f0e9df" }}>M</div>
      </div>
    ),
    { ...size }
  );
}
