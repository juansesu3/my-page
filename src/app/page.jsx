import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png"
 
const Home = () => {
  return (
    <div className={styles.container}>
    <Image src={Hero} alt="hero-image" width={350} height={350} className={styles.img}/>
    </div>
  );
};
export default Home;
