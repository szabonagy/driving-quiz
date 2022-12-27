// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from '../images/logo.png';
import Timer from './Timer'
import { qstRemain } from "./Quiz";
import { wrongAnsw } from "./Quiz";
import { rightAnsw } from "./Quiz";

function Header() {
    const year = new Date().getFullYear();
    return <header>
        <div className="top-left">
            <div className="left-elems">
                <p>Copyright ⓒ </p>
                <p>{year}</p>
            </div>
            <div className="left-elems">
                <p>26</p>
                <p>Összes kérdés</p>
            </div>
            <div className="left-elems">
                <p>{qstRemain}</p>
                <p>Hátralévő kérdések</p>
            </div>
        </div>
        <div className="top-timer">
            <Timer/>
        </div>
        <div className="top-right">
            <div className="top-questions">
                <p>{rightAnsw}</p>
                <p>Helyes válaszok</p>
            </div>
            <div className="top-questions">
                <p>{wrongAnsw}</p>
                <p>Hibás válaszok</p>
            </div>
            <div className="logo">
                <img src={logo} alt=""style={{ width: '27%', float: 'left' , borderLeft: '2px solid #000000'}}></img>
            </div>
        </div>
    </header>
}

export default Header;

//