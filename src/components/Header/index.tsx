import styles from "./header.module.scss";
import Image from "next/image";
import { BagIcon } from "@/icons/BagIcon";
import { FavoriteIcon } from "@/icons/FavoriteIcon";
import { IdentityIcon } from "@/icons/IdentityIcon";
import { RegisterIcon } from "@/icons/RegisterIcon";
import { IconUserBlack32 } from "@/icons/user-black-32";
import { Search } from "../search";
import { HeaderNavigation } from "./navigation";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles["content-left"]}>
        <Image
          alt="Logo Black - eShop"
          src="/svgs/logo-black.svg"
          height={44}
          width={124}
        />

        <HeaderNavigation />
      </div>

      <div className={styles["content-right"]}>
        <Search />
        <div className={styles["action-group"]}>
          <div className={styles["action-group--icons"]}>
            <FavoriteIcon />
            <BagIcon />
            <IconUserBlack32 />
          </div>
        </div>
      </div>
    </header>
  );
}
