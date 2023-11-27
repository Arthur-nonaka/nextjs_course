import styles from "@/styles/Home.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1>Home Page</h1>
      </div>
      <h2>
        <Link href="/portfolio">Portflio</Link>
      </h2>
      <h2>
        <Link href="/clients">Client</Link>
      </h2>
    </div>
  );
}

export default HomePage;
