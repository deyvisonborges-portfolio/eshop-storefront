import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "eShop Storefront",
  description: "Created by Deyvison Borges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
