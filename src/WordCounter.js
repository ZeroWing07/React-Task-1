import { useState } from "react";

export default function WordCounter() {
    
    const [wordCount, setWordCount] = useState(0);

    function onTextChange(event) {
        const words = event.target.value
                        .split(/\s+/) 
                        .filter(Boolean); 
        setWordCount(words.length);
    }

    return (
        <div>
            <textarea onChange={onTextChange}></textarea>
            <div>Word count: {wordCount}</div>
        </div>
    )
}
