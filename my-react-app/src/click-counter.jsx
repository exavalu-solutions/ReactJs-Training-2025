import React, { useRef } from 'react';

const ClickCounter = () => {
    const count = useRef(0)
    const handleCount = () => {
        count.current += 1
        console.log("count", count.current)
    }
    return (
        <div>
            <p>Count: {count.current}</p>
            <button onClick={handleCount}>Increase count</button>
        </div>
    );
}

export default ClickCounter;
