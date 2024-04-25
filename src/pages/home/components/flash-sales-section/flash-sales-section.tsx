import { IconArrowLeftBlack24 } from "@/icons/arrow-left-black-24";
import styles from "./flash-sales-section.module.scss";
import { IconArrowRightBlack24 } from "@/icons/arrow-right-black-24";
import { Product } from "@/components/product";

export function FlashSalesSection() {
  return (
    <section className={styles.wrapper}>
      <article className={styles["first-line"]}>
        <div className={styles["first-line--box-1"]}>
          <div className={styles.mark}>
            <i className={styles["mark--box"]}></i>
            <p className={styles["mark--text"]}>Ofertas do dia</p>
          </div>
          <h3>Promoções</h3>
        </div>

        <div className={styles["first-line--box-hours"]}>
          <div className={styles["first-line--box-hours--item"]}>
            <div className={styles["first-line--box-hours--item-day"]}>
              Dias
            </div>
            <div className={styles["first-line--box-hours--item-number"]}>
              03
            </div>
          </div>

          <span className={styles.semiclone}>:</span>

          <div className={styles["first-line--box-hours--item"]}>
            <div className={styles["first-line--box-hours--item-day"]}>
              Horas
            </div>
            <div className={styles["first-line--box-hours--item-number"]}>
              23
            </div>
          </div>

          <span className={styles.semiclone}>:</span>

          <div className={styles["first-line--box-hours--item"]}>
            <div className={styles["first-line--box-hours--item-day"]}>
              Minutos
            </div>
            <div className={styles["first-line--box-hours--item-number"]}>
              19
            </div>
          </div>

          <span className={styles.semiclone}>:</span>

          <div className={styles["first-line--box-hours--item"]}>
            <div className={styles["first-line--box-hours--item-day"]}>
              Segundos
            </div>
            <div className={styles["first-line--box-hours--item-number"]}>
              45
            </div>
          </div>
        </div>

        <div className={styles["first-line--box-arrows"]}>
          <div className={styles["first-line--box-arrows--icon"]}>
            <IconArrowLeftBlack24 />
          </div>

          <div className={styles["first-line--box-arrows--icon"]}>
            <IconArrowRightBlack24 />
          </div>
        </div>
      </article>

      <article className={styles["temp-list"]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </article>
    </section>
  );
}
