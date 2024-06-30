
import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordList.css";

const WordList = ({ words, initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

    const handleNextClick = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePreviousClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(words.length - 1);
        }
    };

    return (
        <div className="word-list">
            <button
                className="word-list__button word-list__button--previous"
                onClick={handlePreviousClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M19 12a1 1 0 0 1-1-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" />
                    <path d="M12 17.414L9.586 15l2.829-2.828-2.829-2.829L12 7.414l4 4L12 17.414z" />
                </svg>
            </button>
            <WordCard word={words[currentIndex]} currentIndex={currentIndex} words={words} />
            <button
                className="word-list__button word-list__button--next"
                onClick={handleNextClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M19 12a1 1 0 0 1-1-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" />
                    <path d="M12 6.586L9.586 9l2.829 2.828-2.829 2.829L12 16.586l4-4L12 6.586z" />
                </svg>
            </button>
        </div>
    );
};

WordList.defaultProps = {
    initialIndex: 0,
};

export default WordList;
