import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.footerText}>© TEST, 1022–2022</p>
      </div>
    </footer>
  );
}
