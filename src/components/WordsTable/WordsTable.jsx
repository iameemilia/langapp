import React, { useState } from "react";
import "./WordsTable.css";

const WordsTable = ({ words, onEdit, onDelete, onAdd }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const handleEdit = (word) => {
        setIsEditing(word.id);
    };

    const handleSave = (word) => {
        // Сохранить изменения в БД
        setIsEditing(null);
    };

    const handleCancel = () => {
        setIsEditing(null);
        setIsAdding(false);
    };

    const handleAdd = () => {
        setIsAdding(true);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id}>
                        <td>
                            {isEditing === word.id ? <input type="text" defaultValue={word.english} /> : word.english}
                        </td>
                        <td>
                            {isEditing === word.id ? <input type="text" defaultValue={word.transcription} /> : word.transcription}
                        </td>
                        <td>
                            {isEditing === word.id ? <input type="text" defaultValue={word.russian} /> : word.russian}
                        </td>
                        <td>
                            {isEditing === word.id ? (
                                <>
                                    <button onClick={() => handleSave(word)}>Сохранить</button>
                                    <button onClick={handleCancel}>Отмена</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => handleEdit(word)}>Редактировать</button>
                                    <button onClick={() => onDelete(word)}>Удалить</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
                {isAdding && (
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td>
                            <button onClick={handleSave}>Добавить</button>
                            <button onClick={handleCancel}>Отмена</button>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">
                        <button onClick={handleAdd}>Добавить слово</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default WordsTable;
