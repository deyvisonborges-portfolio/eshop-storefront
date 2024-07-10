import { CartProvider } from "@/providers/cart.provider";
import { ReactNode } from "react";

import { StoreLayout as L } from "@/layouts/store-layout"

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <L>{children}</L>
    </CartProvider>
  );
}
