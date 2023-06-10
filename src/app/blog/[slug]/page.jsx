import Image from "next/image";
import styles from "./page.module.css";
import {notFound} from "next/navigation";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.slug);

  console.log({data})

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            accusantium dolor, distinctio excepturi iusto atque sunt non tempora
            deserunt earum veniam illum quod. Culpa tenetur rem dolorem facere
            suscipit! Atque placeat enim sint magni corporis consequatur eos
            magnam similique animi? Amet dolor optio rem vero? Ducimus numquam,
            nihil, pariatur perferendis eum libero tempore deserunt, eos amet
            totam in aut fugit?
          </p>
          <div className={styles.author}>
            <Image
              src="https://juan-sesu-ecommerce.s3.amazonaws.com/1686396482134.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://juan-sesu-ecommerce.s3.amazonaws.com/1686396482134.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit
          eaque, omnis tempore, accusamus dolor nam hic eveniet maiores commodi
          consectetur expedita labore vero est animi, repellendus inventore?
          Molestias, cupiditate.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit
          eaque, omnis tempore, accusamus dolor nam hic eveniet maiores commodi
          consectetur expedita labore vero est animi, repellendus inventore?
          Molestias, cupiditate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta velit eaque, omnis tempore, accusamus dolor
          nam hic eveniet maiores commodi consectetur expedita labore vero est
          animi, repellendus inventore? Molestias, cupiditate. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Soluta velit eaque, omnis
          tempore, accusamus dolor nam hic eveniet maiores commodi consectetur
          expedita labore vero est animi, repellendus inventore? Molestias,
          cupiditate.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
