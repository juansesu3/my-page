import react from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

console.log({ items });

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgConatainer}>
            <Image
              src={item.image}
              fill={true}
              className={styles.img}
              alt="iñustrations-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
