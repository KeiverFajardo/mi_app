import React from 'react';
import './style.css';

export default function vocal() {
  
    const handleVocals = (e) => {
        if(
            e.key === 'a' ||
            e.key === 'e' ||
            e.key === 'i' ||
            e.key === 'o' ||
            e.key === 'u' 
        ) {
            e.preventDefault();
        }
    }
  
    return (
        <div>
            <input type="text" onKeyDown={handleVocals} />
        </div>
    );
};