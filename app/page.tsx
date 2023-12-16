import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página Inicial</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/classroom">Verificador de Chaves</Link>
          </li>
          <li>
            <Link href="/sala">Verificador de Linguagem</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
