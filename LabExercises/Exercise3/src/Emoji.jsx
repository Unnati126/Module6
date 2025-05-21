import { useState } from 'react';

function Emoji() {
    const [isHappy, setIsHappy] = useState(true);

    const toggleMood = () => {
        setIsHappy((prev) => !prev);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem'}}>
            <h1 style={{ fontSize: '4rem'}}>
                {isHappy ? '😊' : '😢'}
            </h1>
            <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;