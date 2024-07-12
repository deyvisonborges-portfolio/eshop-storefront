"use client";

import { Product } from "@/components/product";
import { HomePage } from "@/modules/home";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <>
      <Image
        alt="Example image"
        src="https://github.com/deyvisonborges.png"
        height={120}
        width={100}
        onLoad={() => setImageLoading(false)}
        className={`${isImageLoading ? "blur" : "remove-blur"}`}
        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      />
      <Product />
      <HomePage />
    </>
  );
}
