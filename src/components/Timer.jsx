import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Timer = () => {
    const navigate = useNavigate();

    let time = localStorage.getItem('time') // get's the item from the local storage

    let remaining = getTimeRemaining(time); // calculates the remaining time based on the data saved to the local storage

    
    const intervalReference = useRef(null); // creating a refference variable
    
    const [timer, setTimer] = useState(`${remaining.minutes}:${remaining.seconds}`); //actualizes the timer
    
    const startTimer = () => {
        let { total, minutes, seconds } = getTimeRemaining(time); //reads the remaining times
        if (total >= 0) {
            
            //handle the appearence of the timer, set 0 to front if needed
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            //if the succes doesn't exist in the local storage then it is equal to 0
            if(Number(localStorage.getItem('success') ?? "0") >= 22) {
                navigate('/success') //if the success value grater or equal than 22 then succcessfull test
            } else {
                navigate('/fail') // else fail
            }
        }
    }
    const clearTimer = () => {
        
        setTimer('00:00'); //sets the timer to this value when the time runned out
        
        // localStorage.setItem('time',new Date(new Date().getTime()+30*60*1000)) //set the time valuest at the start of a test, have to be attached to button!

        if (intervalReference.current) clearInterval(intervalReference.current); //if the refference was set, then stops the old interval
        const id = setInterval(() => {
            startTimer();
        }, 1000)
        intervalReference.current = id;
    }

    useEffect(() => {
        clearTimer(); //once happens, clears the timer
    }, []);
    
    return (
        <div className="top-timer">
            <h2>{timer}</h2>
        </div>
    )
}
  
//calculating the remaining time based on e parameter
const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total, minutes, seconds
    };
}

export default Timer;

//localStorage.setItem('time',new Date(new Date().getTime()+1000000))
//localStorage.setItem('time',new Date(new Date().getTime()+30*60*1000)) //set the time valuest at the start of a test, have to be attached to button!