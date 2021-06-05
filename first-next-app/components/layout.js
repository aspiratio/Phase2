import styles from "./layout.module.css";
import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog | {pageTitle}</title>
      </Head>
      <h1>My Blog</h1>
      {children}
    </div>
  );
}
