import react from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgConatainer}>
          <Image
            src="https://juan-sesu-ecommerce.s3.amazonaws.com/1685800179423.jpeg"
            fill={true}
            className={styles.img}
            alt="iñustrations-image"
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgConatainer}>
          <Image
            src="https://juan-sesu-ecommerce.s3.amazonaws.com/1685800179423.jpeg"
            fill={true}
            className={styles.img}
            alt="iñustrations-image"
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgConatainer}>
          <Image
            src="https://juan-sesu-ecommerce.s3.amazonaws.com/1685800179423.jpeg"
            fill={true}
            className={styles.img}
            alt="iñustrations-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
