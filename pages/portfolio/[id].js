import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

function PortifolioProjectPage() {
    const router = useRouter();
    console.log(router.query);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1>Id {router.query.id}</h1>
      </div>
    </div>
  );
}

export default PortifolioProjectPage;
