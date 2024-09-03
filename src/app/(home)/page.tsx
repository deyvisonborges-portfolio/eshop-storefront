"use client";

import { Text } from "@/components/core/text";
import { ProductList } from "@/components/product-list";
import { ProductModel } from "@/components/product/product.model";
import { HomePage } from "@/modules/home";
import Image from "next/image";
import { useState } from "react";

// import "@/styles/_variables.scss";

export default function Home() {
  return (
    <>
      {/* <p className="font-24">Texto</p>
      <Text token="body-large-regular" zstyle="normal">
        Normal
      </Text>
      <Text token="body-large-regular" zstyle="link">
        Normal
      </Text>
      <Text token="body-large-regular" zstyle="upper">
        Normal
      </Text> */}
    </>
  );

  // const [isImageLoading, setImageLoading] = useState(true);

  // return (
  //   <>
  //     <Image
  //       alt="Example image"
  //       src="https://github.com/deyvisonborges.png"
  //       height={120}
  //       width={100}
  //       onLoad={() => setImageLoading(false)}
  //       className={`${isImageLoading ? "blur" : "remove-blur"}`}
  //       // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  //     />
  //     <ProductList
  //       products={
  //         [
  //           {
  //             description: "appleWatch",
  //             price: 123.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "teclado gamer",
  //             price: 12.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "mouse gamer",
  //             price: 80.45,
  //             priceWithDiscount: 12.9,
  //           },
  //           {
  //             description: "appleWatch",
  //             price: 123.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "teclado gamer",
  //             price: 12.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "mouse gamer",
  //             price: 80.45,
  //             priceWithDiscount: 12.9,
  //           },
  //           {
  //             description: "appleWatch",
  //             price: 123.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "teclado gamer",
  //             price: 12.9,
  //             priceWithDiscount: 29.9,
  //           },
  //           {
  //             description: "mouse gamer",
  //             price: 80.45,
  //             priceWithDiscount: 12.9,
  //           },
  //         ] as ProductModel[]
  //       }
  //     />
  //     <HomePage />
  //   </>
  // );
}
