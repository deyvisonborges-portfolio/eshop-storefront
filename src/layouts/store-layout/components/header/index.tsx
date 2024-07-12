import styles from "./header.module.scss";
import Image from "next/image";
import { BagIcon } from "@/icons/BagIcon";
import { FavoriteIcon } from "@/icons/FavoriteIcon";
import { IconUserBlack32 } from "@/icons/user-black-32";
import { Search } from "../search";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles["content-left"]}>
        <Link href="/">
          <Image
            className={styles.logo}
            alt="Logo Black - eShop"
            src="/svgs/logo-black.svg"
            height={44}
            width={124}
          />
        </Link>
      </div>

      <div className={styles["content-right"]}>
        {/* {medias?.hidesm && <Search />} */}
        <div className={styles["action-group"]}>
          <div className={styles["action-group--icons"]}>
            <FavoriteIcon />
            <BagIcon />

            <Link href="/sign-in">
              <IconUserBlack32 />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
