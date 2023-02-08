import { useState } from "react";
import "./Pong.css";
import React from "react";

export default function Pong() {

    const [topValue, setTopValue] = useState(0);

    const testBoxStyle = {
        top: `${topValue}px`
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "s")
                setTopValue(topValue + 8);
        else if (event.key === "w")
            setTopValue(topValue - 8);
    };

    return (
        <div onKeyDown={handleKeyDown} tabIndex={0} className="pongPage">
            <div className="testBox" style={testBoxStyle}>
                Index : {topValue}
            </div>
        </div>
    );
}
