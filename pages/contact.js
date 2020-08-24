import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
        <nav>
            <Link href = '/' >
                Home
            </Link>
            <Link href = '/about' >
                about
            </Link>
        </nav>
      <section>
        <h1>contact us</h1>;
      </section>
    </div>
  )
}
