import { IconSearchBlack24 } from "@/icons/search-black-24";
import styles from "./search.module.scss";

export function Search() {
  return (
    <div className={styles.container}>
      <input
        id="search"
        type="search"
        autoComplete="off"
        placeholder="Buscar produtos, marcas e afins"
      />
      <IconSearchBlack24 />
    </div>
  );
}
