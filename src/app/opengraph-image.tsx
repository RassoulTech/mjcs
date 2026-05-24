import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MJCS - Mouvement Jeunesse Consciente du Sénégal";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

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
        <img
          src={logoSrc}
          width="200"
          height="200"
          style={{
            borderRadius: "50%",
            boxShadow: "0 30px 60px -20px rgba(59, 130, 246, 0.5)",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1,
            marginTop: 20,
          }}
        >
          MJCS
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
