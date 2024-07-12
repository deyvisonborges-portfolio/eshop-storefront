import { Product } from "../product";
import { ProductModel } from "../product/product.model";
import styles from "./product-list.module.scss";

export const ProductList = ({
  products = [],
}: {
  products: ProductModel[];
}) => (
  <div className={styles.list}>
    {products.map((product, key) => (
      <Product key={key} data={product} />
    ))}
  </div>
);
