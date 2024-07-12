import styles from "./product.module.scss";
import { Button } from "../core/button";
import { LuPlusCircle } from "react-icons/lu";

export const Product = () => (
  <div className={styles.product}>
    <div className={styles["product-image"]}></div>
    <div className="product-info">
      <h3>Title</h3>
      <p>Description</p>
      <span>R$ 90,00</span>
    </div>
    {/* <Button> */}
    {/* https://react-icons.github.io/react-icons/icons/lu/ */}
    <LuPlusCircle />
    {/* </Button> */}
  </div>
);
