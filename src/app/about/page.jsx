import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://juan-sesu-ecommerce.s3.amazonaws.com/1686301053873.webp"
          width={500}
          height={500}
          alt="image-about"
        />
      </div>
      <div className={styles.imgTexy}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiencies
        </h2>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
            <br /> <br />
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
            relleno en documentos electrónicos, quedando esencialmente igual al
            original.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
            <br /> <br />
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
            relleno en documentos electrónicos, quedando esencialmente igual al
            original.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
