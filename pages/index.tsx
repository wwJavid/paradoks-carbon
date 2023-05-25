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
    </main>
  );
}
