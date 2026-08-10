import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" style={{ position: "absolute" }}>
          <circle cx="24" cy="24" r="21" stroke="#d68a52" strokeWidth="1.5" opacity="0.65" />
        </svg>
        <div
          style={{
            position: "absolute",
            top: 11,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#d1502e",
          }}
        />
        <div style={{ display: "flex", fontSize: 24, fontFamily: "serif", color: "#f0e9df" }}>M</div>
      </div>
    ),
    { ...size }
  );
}
