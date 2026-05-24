import { ImageResponse } from "next/og";

// Social share preview (Facebook, X/Twitter, LinkedIn, WhatsApp, Slack…).
// Next.js generates the og:image and twitter:image meta tags automatically.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "GestionPro — Gestion commerciale multi-boutiques";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 80,
          gap: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            borderRadius: 100,
            background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
            fontSize: 60,
            fontWeight: 900,
            letterSpacing: -2,
            boxShadow: "0 30px 60px -20px rgba(59, 130, 246, 0.5)",
          }}
        >
          MJCS
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          MJCS Sénégal
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Sunu gox, sunu naatange. Mouvement politique dédié à la souveraineté économique, l'équité territoriale et la transparence.
        </div>
      </div>
    ),
    { ...size }
  );
}
