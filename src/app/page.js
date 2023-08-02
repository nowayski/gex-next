"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/MetaComponents/Header";
import ItemSearch from "./components/SelectionArea/ItemSearch";
import React, { useState } from "react";

export default function Home() {
  const [hasQuery, setHasQuery] = useState(false);
  return (
    <div className="content-container">
      <Header />
      <h1>
        Search For Items in the <br />
        Grand Exchange.
      </h1>
      <p>
        Use this tool to look up items on runescape.
        <br /> Searches may be separated by commas. e.g. Cod, Salmon, Bronze
        Spear.
        <br />
        Click an item to view price history information. Favourite with the ★
        button.
      </p>
      <ItemSearch setQuery={setHasQuery} />
    </div>
  );
}
