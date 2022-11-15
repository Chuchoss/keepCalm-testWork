import Section from "../Section/Section";
import SectionSwiper from "../SectionSwiper/SectionSwiper";
import { firstSectionsInfo, secondSectionsInfo } from "../../helpers/fakeAPI";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className='visually-hidden'>Lorem ipsume</h1>
      <Section payload={firstSectionsInfo} />
      <SectionSwiper />
      <Section payload={secondSectionsInfo} />
    </main>
  );
}
