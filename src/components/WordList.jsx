import React, { useState } from "react";
import WordsTable from "./WordsTable";

const WordList = () => {
    const [words, setWords] = useState([
        {
            "id": "16433",
            "english": "sky",
            "transcription": " [skaɪ] ",
            "russian": "небо",
            "tags": "",
            "tags_json": "[\"\"]"
        },
        {
            "id": "16434",
            "english": "sea ",
            "transcription": "[si:] ",
            "russian": "море",
            "tags": "",
            "tags_json": "[\"\"]"
        },
        {
            "id": "16435",
            "english": "wind ",
            "transcription": "[wɪnd] ",
            "russian": "ветер",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16436",
            "english": "lake",
            "transcription": " [leɪk] ",
            "russian": "озеро",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16437",
            "english": "mountain",
            "transcription": " [ˈmauntɪn]",
            "russian": "гора",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16438",
            "english": "waterfall ",
            "transcription": "[ˈwɔ:təfɔ:l] ",
            "russian": "водопад",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16439",
            "english": "thunderstorm",
            "transcription": " [ˈθʌndəstɔ:m] ",
            "russian": "гроза",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16440",
            "english": "blizzard",
            "transcription": " [ˈblɪzəd] ",
            "russian": "вьюга",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16441",
            "english": "sun ",
            "transcription": "[sʌn]",
            "russian": "солнце",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16442",
            "english": "river",
            "transcription": " [ˈrɪvə] ",
            "russian": "река",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16443",
            "english": "valley",
            "transcription": " [ˈvælɪ] ",
            "russian": "долина",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16444",
            "english": "pond",
            "transcription": " [pɔnd] ",
            "russian": "пруд",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16445",
            "english": "snow",
            "transcription": " [snəu] ",
            "russian": "снег",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16446",
            "english": "beach",
            "transcription": " [bi:tʃ] ",
            "russian": "пляж",
            "tags": "",
            "tags_json": "[]"
        },
        {
            "id": "16455",
            "english": "basket",
            "transcription": "[basket]",
            "russian": "корзина",
            "tags": "",
            "tags_json": "[]"
        }
    ]);

    const handleEditWord = (word) => {
        const updatedWords = words.map((w) => {
            if (w.id === word.id) {
                return word;
            }

            return w;
        });

        setWords(updatedWords);
    };

    const handleDeleteWord = (wordId) => {
        const filteredWords = words.filter((w) => w.id !== wordId);

        setWords(filteredWords);
    };

    const handleAddWord = (word) => {
        const newWord = {
            id: Date.now(),
            ...word,
        };

        setWords([...words, newWord]);
    };

    return (
        <WordsTable words={words} onEditWord={handleEditWord} onDeleteWord={handleDeleteWord} onAddWord={handleAddWord} />
    );
};

export default WordList;
