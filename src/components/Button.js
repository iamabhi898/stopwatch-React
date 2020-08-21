import React, { useState } from 'react';

function Buttons(props) {

    const [status, setStatus] = useState('not-started');

    const start = () => {
        setStatus('started');
    }

    const stop = () => {
        setStatus('stopped');
    }

    const reset = () => {
        setStatus('not-started');
    }

    return (
        <div className="Buttons">
            {/* START */}
            <div
                className={(status === 'not-started') ? "btn btn1" : "btn btn1 none"}
                onClick={() => {
                    props.handleClick1();
                    start();
                }}>
                <div className="text">START</div>
            </div>
            {/* STOP */}
            <div
                className={(status === 'started') ? "btn btn2" : "btn btn2 none"}
                onClick={() => {
                    props.handleClick2();
                    stop();
                }}>
                <div className="text">STOP</div>
            </div>
            {/* RESUME */}
            <div
                className={(status === 'stopped') ? "btn btn3" : "btn btn3 none"}
                onClick={() => {
                    props.handleClick1();
                    start();
                }}>
                <div className="text">RESUME</div>
            </div>
            {/* RESET */}
            <div
                className={(status === 'stopped') ? "btn btn4" : "btn btn4 none"}
                onClick={() => {
                    props.handleClick3();
                    reset();
                }}>
                <div className="text">RESET</div>
            </div>
        </div>
    );
}

export default Buttons;