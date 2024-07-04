import React from "react";
import Menu from "../src/components/Menu/Menu";
import "./components/styles.css";
import WordsTable from "./components/WordsTable/WordsTable";
import { words } from "./words";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <WordsTable rows={words} />
      </main>
    </>
  );
}