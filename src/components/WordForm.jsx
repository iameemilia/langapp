import React, { useState } from "react";

const WordForm = ({ onSubmit }) => {
    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRussian] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const word = {
            english,
            transcription,
            russian,
        };

        onSubmit(word);

        setEnglish("");
        setTranscription("");
        setRussian("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="english">Английское слово</label>
            <input type="text" id="english" value={english} onChange={(e) => setEnglish(e.target.value)} />

            <label htmlFor="transcription">Транскрипция</label>
            <input type="text" id="transcription" value={transcription} onChange={(e) => setTranscription(e.target.value)} />

            <label htmlFor="russian">Русское слово</label>
            <input type="text" id="russian" value={russian} onChange={(e) => setRussian(e.target.value)} />

            <button type="submit">Добавить слово</button>
        </form>
    );
};

export default WordForm;
