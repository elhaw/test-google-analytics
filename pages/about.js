import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <nav style={{ display: "flex" }}>
        <Link href="/">Home</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <section>
        <h1>contact us</h1>;
      </section>
    </div>
  )
}
