import styles from "./Header.module.scss";

const Header = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <a
          href="https://www.youtube.com/suntoususso"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://open.spotify.com/album/5T1thhkph2QEQLWPPgzEEQ"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
        <a
          href="https://suntoususso.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Bandcamp
        </a>
        <a
          href="https://www.instagram.com/suntou_kora_susso/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/suntoususso"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </nav>
    </footer>
  );
};

export default Header;
