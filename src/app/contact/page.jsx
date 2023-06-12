import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ImgContact from "../../../public/contact.png";
import Button from "@/components/button/Button";
export const metadata = {
  title: "NeGiUpp Contact Information",
  description: "This is the contact information",
};
const Contacto = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={ImgContact}
            alt="image-contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contacto;
