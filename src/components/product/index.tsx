/* eslint-disable @next/next/no-img-element */
import styles from "./product.module.scss";

interface ProductProps {
  description: string; // Some product description
  reviews: number; // ex.: ***** 5,8
  price: number; // ex.: R$ 20
  priceWithDiscount: number // ex.: R$ 20,00 / R$ 19,00
  priceNote?: string; //  ex.: R$ 20 /per item
  deliveryNote?: string; // ex.: <Icon> Free shipping
  addressNote?: string; // ex.: <Icon> United States
  categoryName?: string; // ELETRONICS
  attributes?: [{ sizes?: string[]; colors?: string[] }];
}

export const Product = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_container}>
        <img
          src="https://framerusercontent.com/images/r59ibP0ToXB3BqtNzkTUDO9ww.jpg"
          alt=""
        />

        <div className={styles["image_container--tag"]}>
          <span>GEAR</span>
        </div>
      </div>

      <div className={styles.info_container}>
        <h3>iWatch SE 3</h3>
        <p>R$ 2990,89</p>
      </div>
    </div>
  );
};
