import { ImageResponse } from "next/og";
import { restaurant } from "@/lib/restaurant-data";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(160deg, #120d0a 0%, #1a130f 55%, #241a14 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(209,80,46,0.32), transparent 68%)",
            filter: "blur(10px)",
          }}
        />
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 10, color: "#d68a52", marginBottom: 28 }}>
          SIGNATURE CUTS · OFFENES FEUER
        </div>
        <div style={{ display: "flex", fontSize: 148, letterSpacing: 18, color: "#f0e9df", fontFamily: "serif" }}>
          {restaurant.name.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 34, fontStyle: "italic", color: "#dcd0bf", marginTop: 26, fontFamily: "serif" }}>
          {restaurant.claim}
        </div>
      </div>
    ),
    { ...size }
  );
}
