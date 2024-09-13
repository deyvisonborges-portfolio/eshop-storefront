import styles from "./home.module.scss";
import { StoreLayout } from "@/layouts/store-layout";
import { ProductList } from "@/components/product-list";
import Link from "next/link";

export function HomePage() {
  return (
    <StoreLayout>
      <Link href="/product/slug-12313">Go to uncategorized product detail</Link>
      <Link href="/product/men/slu-1231">
        Go to categorized product detail with slug
      </Link>
      <ProductList />
    </StoreLayout>
  );
}
