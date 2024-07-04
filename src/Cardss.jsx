import React from "react";
import Menu from "../src/components/Menu/Menu";
import WordList from "../src/components/WordList/WordList";

// Страница с карточками
export default function Game() {
    return (
        <>
            <Menu />
            <main>
                <WordList />
            </main>
        </>
    );
}
