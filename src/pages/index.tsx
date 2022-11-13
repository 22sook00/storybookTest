import Head from "next/head";
import Image from "next/image";
import Button from "../components/Buttons/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className="default-laytout">
      <Button size="small" theme="primary">
        TEST
      </Button>
      <Button customStyle="w-[180px] h-[48px] bg-pink-200 text-pink-600 opacity-90">
        TEST
      </Button>
    </main>
  );
}
