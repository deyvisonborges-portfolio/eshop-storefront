/* eslint-disable @next/next/no-img-element */
import { IconHearthBlack24 } from "@/icons/hearth-black-24";
import styles from "./product.module.scss";
import { IconQuickViewBlack24 } from "@/icons/quick-view-black-24";
import { IconDeleteBlack24 } from "@/icons/delete-black-24";
import { ProductModel } from "./product.model";
import { useState } from "react";

interface ProductProps {
  data: ProductModel;
  actions?: Partial<Record<"trash" | "quickview" | "favorite", boolean>>;
  enableTrash?: boolean;
}

type ProductComponentModel = {
  id: string;
  description: string; // Some product description
  reviews: number; // ex.: ***** 5,8
  price: number; // ex.: R$ 20
  priceWithDiscount: number; // ex.: R$ 20,00 / R$ 19,00
  priceNote?: string; //  ex.: R$ 20 /per item
  deliveryNote?: string; // ex.: <Icon> Free shipping
  addressNote?: string; // ex.: <Icon> United States
  categoryName?: string; // ELETRONICS
  attributes?: [{ sizes?: string[]; colors?: string[] }];
};

export const Product = ({
  data = {} as ProductModel,
  actions = {
    favorite: true,
    quickview: true,
    trash: true,
  },
  enableTrash,
  ...props
}: ProductProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>();

  const handleClickInFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles["product"]}>
      <div className={styles["product-image--container"]}>
        <img
          className={styles["product-image--content"]}
          src="/images/ak-900-wired-keyboard.png"
          alt=""
        />

        <span className={styles["product-image--tag"]}>NEW</span>

        <div className={styles["product-image--action-group"]}>
          {actions.trash && (
            <div className={styles["product-image--action-group--icon"]}>
              <IconDeleteBlack24 />
            </div>
          )}
          {actions.favorite && (
            <div
              onClick={handleClickInFavorite}
              className={styles["product-image--action-group--icon"]}
            >
              <IconHearthBlack24 {...(isFavorite && { color: "red" })} />
            </div>
          )}
          {actions.quickview && (
            <div className={styles["product-image--action-group--icon"]}>
              <IconQuickViewBlack24 />
            </div>
          )}
        </div>

        <div className={styles["product-image--add-to-cart"]}>
          <span>Adicionar ao Carrinho</span>
        </div>
      </div>

      <div className={styles["product-info"]}>
        <p className={styles["product-info--title"]}>{data.description}</p>
        <div className={styles["product-info--price--container"]}>
          <span className={styles["product-info--price"]}>R$ {data.price}</span>
          <span className={styles["product-info--discounted"]}>
            R$ {data.priceWithDiscount}
          </span>
        </div>
      </div>
    </div>
  );
};
