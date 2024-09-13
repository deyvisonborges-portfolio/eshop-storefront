import styles from "./BagIcon.module.scss";

export function BagIcon() {
  return (
    <div className={styles.container}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7187 14.7226V7.33865C12.7187 5.52665 14.188 4.05731 16 4.05731C17.812 4.05731 19.2813 5.52665 19.2813 7.33865V14.7213M22.004 27.1653H9.99602C7.54402 27.1653 5.66935 24.98 6.04268 22.5573L7.79468 11.1693H24.2053L25.9573 22.5573C26.3307 24.98 24.456 27.1653 22.004 27.1653Z"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>0</span>
    </div>
  );
}
