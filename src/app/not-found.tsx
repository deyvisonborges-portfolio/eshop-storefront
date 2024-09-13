"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link href="/">Voltar pra home</Link>
    </div>
  );
}
