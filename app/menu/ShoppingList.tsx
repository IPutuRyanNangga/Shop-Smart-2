"use client";
import React, { useState } from 'react';
import './styles.css';

const ShoppingList: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setItems([...items, input]);
            setInput('');
        }
    };

    const handleRemove = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>Shop Smart</h1>
            <form id="shopping-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="item-input"
                    placeholder="Enter item"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
            <ul id="shopping-list">
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button
                            className="remove-button"
                            onClick={() => handleRemove(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;