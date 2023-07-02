/* eslint-disable react/no-children-prop */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.body}>
        <div className={styles.intro}>
          <h1>Dünyaya fərqli perspektivdən baxan bir platforma</h1>
          <p>Birlikdə oxuyub, birlikdə araşdırıb, birlikdə öyrənmək üçün</p>
        </div>

        <div className={styles.button}>
          <button>Kəşf et</button>
          <button>
            Bizə qoşul
            <Image
              src="/assets/right-arrow.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className={styles.info}>
          <p>
            Paradoks: Dünyanı anlamaq üçün orijinal sənədli filmlər, məqsədli
            araşdırmalar və görüntülü hekayələr yaradan bir platformadır
          </p>

          <div>
            <p>
              Haqqımızda
              <Image
                src="/assets/arrow-up-right.svg"
                alt="arrow-up"
                width={24}
                height={24}
              />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
