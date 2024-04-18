import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const timer = setInterval(() => {
            start += 1; 
            setCount(start);
            if (start === end) {
                clearInterval(timer); 
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <span className="text-8xl text-black group-hover:text-white">{count}</span>
    );
};

export default Counter;
