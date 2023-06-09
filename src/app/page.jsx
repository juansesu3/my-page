import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better desing for your digital products
        </h1>
        <p className={styles.description}>
          Turning your idea into Reality. We bring together the teams form the
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero-image" className={styles.img} />
      </div>
    </div>
  );
};
export default Home;
