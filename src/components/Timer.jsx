import React, {useEffect, useState } from "react";
const Time = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let interValid = setInterval( ()=> {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interValid)
    },[] )

    return(
        <div className= "clock">
            <p> Time:{time.toLocaleTimeString()}</p>
        </div>
    )
}
export default Time;
