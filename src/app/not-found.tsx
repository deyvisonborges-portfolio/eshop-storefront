"use client"

import { StoreLayout } from "@/layouts/store-layout";
import Link from "next/link";

export default function Error() {
  return (
    <StoreLayout>
      <div>
        <h1>Página não encontrada</h1>
        <Link href="/">Voltar pra home</Link>
      </div>
    </StoreLayout>
  );
}
