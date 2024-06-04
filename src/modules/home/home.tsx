import styles from "./home.module.scss";
import { StoreLayout } from "@/layouts/store-layout";
import { ProductList } from "@/components/product-list";

export function HomePage() {
  return (
    <StoreLayout>
      <ProductList />
    </StoreLayout>
  );
}
