import styles from "./DefaultLayout.module.scss";
import Link from "next/link";
import { createContext } from "react";

export const GlobalState = createContext({
  icecream: {
    taste: "VanillaJS",
    format: "Cone/Cup/Brioche",
    nTaste: 42,
  },
  iceCreams: [
    {
      id: 1,
      taste: "React",
      format: "Brioche",
    },
    {
      id: 2,
      taste: "Sass",
      format: "Cone",
    },
    {
      id: 3,
      taste: "Tailwind",
      format: "Cup",
    },
  ],
});

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.Navbar}>
        <Link href="/about-us">About</Link>
        <Link href="/">Home</Link>
        <Link href="/hotel">Hotel</Link>
        <Link href="/products">Prodotti</Link>
        <Link href="/GlobalState">Stato Globale</Link>
      </div>
      {children}
      <div className={styles.footer}>
        Copyright @ Claudio Ventimiglia{" "}
        <a href="https://www.instagram.com/">🐧</a>
      </div>
    </div>
  );
};

export default DefaultLayout;
