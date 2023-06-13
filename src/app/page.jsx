"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";

const Home = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // Función para manejar el evento de cambio de tamaño de la ventana
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Agregar el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);
    // Obtener la medida de la ventana al cargar el componente
    setWidth(window.innerWidth);
    // Eliminar el evento de cambio de tamaño de la ventana al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Button url="/portfolio" text="See Our Works" />
      </div>
      {width > 768 && (
        <div className={styles.item}>
          <Image src={Hero} alt="hero-image" className={styles.img} />
        </div>
      )}
    </div>
  );
};
export default Home;
