import React, { useState, useEffect } from "react";

function Clock(props) {

    const [timer, setTimer] = useState({ min: 0, sec: 0, milSec: 0 });

    let newMin = timer.min;
    let newSec = timer.sec;
    let newMilSec = timer.milSec;

    useEffect(() => {
        if (props.getStatus === 'started') {
            var interval = setInterval(updateTimer, 10);
            return () => clearInterval(interval);
        } else if (props.getStatus === 'stopped') {
            clearInterval(interval);
        } else if (props.getStatus === 'reset') {
            clearInterval(interval);
            setTimer({ min: 0, sec: 0, milSec: 0 });
        }
    }, [props.getStatus]);

    function updateTimer() {
        if (newSec === 60) {
            newMin++;
            newSec = 0;
        }
        if (newMilSec === 99) {
            newSec++;
            newMilSec = 0;
        }
        if (props.getStatus !== 'reset') {
            newMilSec++;
            setTimer({ min: newMin, sec: newSec, milSec: newMilSec });
        }
    };

    return (
        <div className="Clock">
            <div className="clk minClock">
                <div className="text">{(timer.min < 10) ? '0' + timer.min : timer.min}</div>
            </div>
            <div className="cln colon1">:</div>
            <div className="clk secClock">
                <div className="text">{(timer.sec < 10) ? '0' + timer.sec : timer.sec}</div>
            </div>
            <div className="cln colon2">:</div>
            <div className="clk milsecClock">
                <div className="text">{(timer.milSec < 10) ? '0' + timer.milSec : timer.milSec}</div>
            </div>
        </div>
    );
};

export default Clock;