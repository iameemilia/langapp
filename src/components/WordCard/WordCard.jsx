import React, { useState } from "react";

const WordCard = ({ word, currentIndex, words }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslationClick = () => {
        setShowTranslation(!showTranslation);
    };

    return (
        <div className="word-card">
            <h2 className="word-card__english">{word.english}</h2>
            <p className="word-card__transcription">{word.transcription}</p>
            <p className="word-card__russian">{showTranslation ? word.russian : ""}</p>
            <button className="word-card__show-translation-button" onClick={handleShowTranslationClick}>
                {showTranslation ? "Скрыть перевод" : "Показать перевод"}
            </button>
            <p className="word-card__number">{currentIndex + 1} / {words.length}</p>
        </div>
    );
};

export default WordCard;