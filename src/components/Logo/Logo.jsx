import styles from "./Logo.module.scss";
import logo from "../../img/logo.png";
export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt='logo' />
    </div>
  );
}
