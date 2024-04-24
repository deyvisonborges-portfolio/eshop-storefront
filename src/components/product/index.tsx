/* eslint-disable @next/next/no-img-element */
import { IconHearthBlack24 } from "@/icons/hearth-black-24";
import styles from "./product.module.scss";
import { IconQuickViewBlack24 } from "@/icons/quick-view-black-24";
import { IconDeleteBlack24 } from "@/icons/delete-black-24";

interface ProductProps {
  actions?: Partial<Record<"trash" | "quickview" | "favorite", boolean>>;
  enableTrash?: boolean;
}

export const Product = ({
  actions = {
    favorite: false,
    quickview: false,
    trash: false,
  },
  enableTrash,
  ...props
}: ProductProps) => {
  return (
    <div className={styles["product"]}>
      <div className={styles["product-image--container"]}>
        <img
          className={styles["product-image--content"]}
          src="https://framerusercontent.com/images/r59ibP0ToXB3BqtNzkTUDO9ww.jpg"
          alt=""
        />

        <div className={styles["product-imxage--action-group"]}>
          {actions.trash && (
            <div className={styles["product-image--action-group--icon"]}>
              <IconDeleteBlack24 />
            </div>
          )}
          {actions.favorite && (
            <div className={styles["product-image--action-group--icon"]}>
              <IconHearthBlack24 />
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

      <div className={styles.info_container}>
        <h3>iWatch SE 3</h3>
        <p>R$ 2990,89</p>
      </div>
    </div>
  );
};
