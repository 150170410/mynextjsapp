import Image from "next/image";
import ourBlogPic from "../../images/home-image-2.jpg";
import styles from "../home/home.module.css";


async function fetchtodos () {
  const res = await fetch  ("https://jsonplaceholder.typicode.com/todos" ,
  { next: { revalidate: 15}}
  );
  const data = await res.json();
  return data; 
}

export default async function Page() {

  const data = await fetchtodos();

  return (
    <>
    <div className={styles.bgWrap}>
      <Image
        src={ourBlogPic}
        alt="Out blog pic"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      </div>
      <h1 className={styles.bgText}>Welcome to Blog</h1>
      {data.map(({title}) => (
        <div>
         <h3 className={styles.titleText}>{title}</h3>
        </div>
      ))}
    </>
  );
}
