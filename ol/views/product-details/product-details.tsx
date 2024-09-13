"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/core/button";
import styles from "./product-details.module.scss";

const productData = {
  products: [
    {
      id: "1",
      name: "Nike Air Zoom Pegasus 35",
      size: "M",
      color: "black",
      images: [
        "https://demo.evershop.io/assets/catalog/8634/1312/plv3495-Black-single.png",
        "https://demo.evershop.io/assets/catalog/5580/3189/plv8051-Black-single.png",
      ],
    },
    {
      id: "1",
      name: "Nike Air Zoom Pegasus 35",
      size: "M",
      color: "green",
      images: [
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-single.png",
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-single.png",
      ],
    },
    {
      id: "1",
      name: "Nike Air Zoom Pegasus 35",
      size: "L",
      color: "green",
      images: [
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-single.png",
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-single.png",
      ],
    },
    {
      id: "2",
      name: "Adidas UltraBoost",
      size: "S",
      color: "blue",
      images: [
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-blue-s-1.png",
        "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-blue-s-2.png",
      ],
    },
    {
      id: "2",
      name: "Seasonal Color Chuck 70",
      size: "M",
      color: "pink",
      images: [
        "https://demo.evershop.io/assets/catalog/6634/7682/plv3753-Pink-single.png",
        "https://demo.evershop.io/assets/catalog/2515/1722/plv7806-Pink-single.png",
      ],
    },
  ],
};

export const ProductDetails = () => {
  const [isImageLoading, setImageLoading] = useState(true);
  const productId = "1";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [size, setSize] = useState(searchParams.get("size") || "");
  const [color, setColor] = useState(searchParams.get("color") || "");
  const [images, setImages] = useState([]);

  // async function promessa() {
  //   return await new Promise((resolve) => setTimeout(() => resolve, 3000))
  // }

  useEffect(() => {
    if (size || color) {
      productData.products.filter((p) => p.size === size || p.color === color);
      setImageLoading(true);
    }
  }, [size, color]);

  const fetchImages = async (size: string, color: string) => {
    setImageLoading(true);
    const products = productData.products.find(
      (p) => productId === p.id && (p.size === size || p.color === color)
    );
    return products ? products.images : [];
  };

  const handleAttributeChange = (attribute: string, value: string) => {
    if (attribute === "size") {
      setSize(value);
    } else if (attribute === "color") {
      setColor(value);
    }

    const params = new URLSearchParams(searchParams);
    params.set(attribute, value);

    setImageLoading(true);
    router.push(`${pathname}?${params.toString()}`, undefined);
  };

  return (
    <section className={styles.container}>
      <div className={styles["container-left"]}>
        <Image
          onLoad={() => setImageLoading(false)}
          // className={`${styles["gallery-featured-image"]} ${
          //   isImageLoading ? styles.blur : styles["remove-blur"]
          // }`}
          src={images[0]}
          alt="Product description"
          height={500}
          width={500}
          loading="lazy"
          placeholder="blur"
          // blurDataURL="https://blurred.dev/static/social.jpg"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        />
        <div className={styles["gallery-timeline"]}>
          {images.map((imgSrc, index) => (
            <Image
              onLoad={() => setImageLoading(false)}
              key={index}
              className={`${styles["gallery-mini-image"]} ${
                isImageLoading ? styles.blur : styles["remove-blur"]
              }`}
              src={imgSrc}
              alt="Product description"
              height={100}
              width={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://blurred.dev/static/social.jpg"
            />
          ))}
        </div>
      </div>

      <div className={styles["container-right"]}>
        <h1>Product name</h1>
        <p>R$ 120,00</p>
        <span>SKU: NJC83763</span>
        <input type="text" max={2} />

        <Button>Adicionar</Button>

        <div className={styles["attribute-container"]}>
          <div
            className={styles.attribute}
            onClick={() => handleAttributeChange("size", "M")}
          >
            M
          </div>
          <div
            className={styles.attribute}
            onClick={() => handleAttributeChange("size", "L")}
          >
            L
          </div>

          <div
            className={styles.attribute}
            onClick={() => handleAttributeChange("color", "black")}
          >
            Black
          </div>
          <div
            className={styles.attribute}
            onClick={() => handleAttributeChange("color", "green")}
          >
            Green
          </div>
        </div>

        <p>
          Product description long text Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum feugiat mi eget elit elementum, id
          pulvinar tellus eleifend. Integer porttitor elit id euismod elementum.
          Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel
          lectus ultricies pretium quis non purus. Pellentesque molestie leo
          eget rutrum tristique.
        </p>
      </div>
    </section>
  );
};
