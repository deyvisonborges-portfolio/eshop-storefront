/* eslint-disable @next/next/no-img-element */
import { IconHearthBlack24 } from "@/icons/hearth-black-24";
import styles from "./product.module.scss";
import { IconQuickViewBlack24 } from "@/icons/quick-view-black-24";

interface ProductProps {
  description: string; // Some product description
  reviews: number; // ex.: ***** 5,8
  price: number; // ex.: R$ 20
  priceWithDiscount: number; // ex.: R$ 20,00 / R$ 19,00
  priceNote?: string; //  ex.: R$ 20 /per item
  deliveryNote?: string; // ex.: <Icon> Free shipping
  addressNote?: string; // ex.: <Icon> United States
  categoryName?: string; // ELETRONICS
  attributes?: [{ sizes?: string[]; colors?: string[] }];
}

export const Product = () => {
  return (
    <div className={styles["product-wrapper"]}>
      <div className={styles["product-image--container"]}>
        <img
          className={styles["product-image--content"]}
          src="https://framerusercontent.com/images/r59ibP0ToXB3BqtNzkTUDO9ww.jpg"
          alt=""
        />

        <div className={styles["product-image--action-group"]}>
          <div className={styles["product-image--action-group--icon"]}>
            <IconHearthBlack24 />
          </div>
          <div className={styles["product-image--action-group--icon"]}>
            <IconQuickViewBlack24 />
          </div>
        </div>
        <div className={styles["product-image--add-to-cart"]}>
          <span>Adicionar ao Carrinho</span>
        </div>
      </div>

      <div className={styles.info_container}>
        <h3>iWatch SE 3</h3>
        <p>R$ 2990,89</p>
      </div>
    </div>
  );
};
