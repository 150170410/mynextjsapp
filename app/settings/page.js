import Image from "next/image";
import ourSettingPic from "../../images/home-image-3.jpg";
import styles from "../home/home.module.css";

export default function Page() {
  return (
    <>
        <div className={styles.bgWrap}>
      <Image
        src={ourSettingPic}
        alt="Out settings pic"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      </div>
      <h1 className={styles.bgText}>Welcome to Settings Page</h1>
    </>
  );
}
