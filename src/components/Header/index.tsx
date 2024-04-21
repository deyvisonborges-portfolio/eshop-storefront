import styles from "./header.module.scss";
import Image from "next/image";
import { BagIcon } from "@/icons/BagIcon";
import { FavoriteIcon } from "@/icons/FavoriteIcon";
import { IdentityIcon } from "@/icons/IdentityIcon";
import { RegisterIcon } from "@/icons/RegisterIcon";

export function Header() {
  return (
    <header className={styles.container}>
      <Image
        alt="Logo Black - eShop"
        src="/svgs/logo-black.svg"
        height={54}
        width={154}
      />

      <div className={styles['action-group']}>
        <div className={styles['action-group--auth']}>
          <div className={styles['action-group--auth-item']}>
            <IdentityIcon />
            <p>Faça login</p>
          </div>

          <div className={styles['action-group--auth-item']}>
            <RegisterIcon />
            <p>Cadastre-se</p>
          </div>
        </div>

        <div className={styles['action-group--icons']}>
          <FavoriteIcon />
          <BagIcon />
        </div>
      </div>
    </header>
  );
}
