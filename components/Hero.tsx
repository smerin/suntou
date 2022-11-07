import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/suntou-susso-wallpaper.jpg"
        alt="Suntou Susso"
        width={1920}
        height={1280}
        className={styles.image}
      />
      <h1>Suntou Susso</h1>
    </section>
  );
};

export default Hero;
