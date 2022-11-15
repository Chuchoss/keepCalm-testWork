import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  const sectionClasses = `container ${styles["header-container"]}`;
  return (
    <header className={styles.header}>
      <section className={sectionClasses}>
        <Logo />
        <a className={styles.phoneNumber} href='tel:+74954954954'>
          +7 (495) 495-49-54
        </a>
      </section>
    </header>
  );
}
