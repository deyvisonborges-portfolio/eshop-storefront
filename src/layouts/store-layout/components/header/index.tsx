import styles from "./header.module.scss";
import Image from "next/image";
import { BagIcon } from "@/icons/BagIcon";
import { FavoriteIcon } from "@/icons/FavoriteIcon";
import { IconUserBlack32 } from "@/icons/user-black-32";
import { Search } from "../search";
import Link from "next/link";
import { Text } from "@/components/text";
import useMediaQuery from "@/hooks/useDevice";

export function Header() {
  // const medias = useMediaQuery();

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

        {/* {medias?.hidesm && (
          <div className={styles["category-button"]}>
            <Image
              alt="Logo Black - eShop"
              src="/svgs/menu-line-white.svg"
              height={24}
              width={24}
            />
            <Text token="body-regular-regular">Categorias</Text>
          </div>
        )} */}
      </div>

      <div className={styles["content-right"]}>
        {/* {medias?.hidesm && <Search />} */}
        <div className={styles["action-group"]}>
          <div className={styles["action-group--icons"]}>
            <FavoriteIcon />
            <BagIcon />

            <Link href="/identity/sign-in">
              <IconUserBlack32 />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
