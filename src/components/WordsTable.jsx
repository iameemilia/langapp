import React, { useState } from "react";
import WordCard from "./WordCard";
import WordForm from "./WordForm";

const WordsTable = ({ words, onEditWord, onDeleteWord, onAddWord }) => {
    const [editingWordId, setEditingWordId] = useState(null);
    const [editedWord, setEditedWord] = useState({});


    const handleEditWordClick = (wordId) => {
        const word = words.find((w) => w.id === wordId);
        setEditingWordId(wordId);
        setEditedWord(word);
    };

    const handleDeleteWordClick = (wordId) => {
        onDeleteWord(wordId);
    };

    const handleSaveWordClick = () => {
        onEditWord(editedWord);
        setEditingWordId(null);
    };

    const handleCancelEditClick = () => {
        setEditingWordId(null);
    };

    const handleChangeEditedWord = (e) => {
        const { value } = e.target;
        setEditedWord({ ...editedWord, [e.target.name]: value });
    };
    const handleAddWordClick = (word) => {
        onAddWord(word);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Английское слово</th>
                    <th>Транскрипция</th>
                    <th>Русское слово</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id} className={editingWordId === word.id ? "word-row--editing" : ""}>
                        {editingWordId === word.id ? (
                            <>
                                <td><input type="text" name="english" value={editedWord.english} onChange={handleChangeEditedWord} /></td>
                                <td><input type="text" name="transcription" value={editedWord.transcription} onChange={handleChangeEditedWord} /></td>
                                <td><input type="text" name="russian" value={editedWord.russian} onChange={handleChangeEditedWord} /></td>
                                <td>
                                    <button onClick={handleSaveWordClick}>Сохранить</button>
                                    <button onClick={handleCancelEditClick}>Отмена</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td><WordCard word={word} /></td>
                                <td><button onClick={() => handleEditWordClick(word.id)}>Редактировать</button></td>
                                <td><button onClick={() => handleDeleteWordClick(word.id)}>Удалить</button></td>
                            </>
                        )}
                    </tr>
                ))}
                <tr>
                    <td colSpan="4">
                        <WordForm onSubmit={handleAddWordClick} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default WordsTable;