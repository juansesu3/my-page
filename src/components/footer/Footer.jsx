import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 NeGiUpp. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src={"/1.png"}
          width={15}
          height={15}
          alt="NeGiUpp FaceBook Account"
        />
        <Image
          src={"/2.png"}
          width={15}
          height={15}
          alt="NeGiUpp Instagram  Account"
        />
        <Image
          src={"/3.png"}
          width={15}
          height={15}
          alt="NeGiUpp Twiter Account"
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          alt="NeGiUpp Youtube Account"
        />
      </div>
    </div>
  );
};

export default Footer;
