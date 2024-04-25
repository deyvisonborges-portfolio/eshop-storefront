import { IconSearchBlack24 } from "@/icons/search-black-24";
import styles from "./search.module.scss";

export function Search() {
  return (
    <div className={styles.container} autoCorrect="">
      <input id="search" type="search" placeholder="Buscar produtos, marcas e afins" />
      <IconSearchBlack24 />
    </div>
  );
}
