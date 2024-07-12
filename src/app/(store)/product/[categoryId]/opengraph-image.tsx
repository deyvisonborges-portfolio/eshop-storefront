import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string) {
  const res = await fetch(
    new URL("/api/products", "http://localhost:3000") + `/${slug}`
  );
  const product = await res.json();
  return product;
}

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {product.slug}
      </div>
    ),
    {
      ...size,
    }
  );
}
