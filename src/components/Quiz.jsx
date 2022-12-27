import React from "react";
import pict from '../images/000.jfif';

function Quiz() {
    return (
      <div className="quiz-area">
        <div className="act-question">
            <p>Place for the questions</p>
        </div>
        <div className="answers">
            <div className="answer">
                <p>answer-A</p>
            </div>
            <div className="answer">
                <p>answer-B</p>
            </div>
            <div className="answer">
                <p>answer-C</p>
            </div>
        </div>
        <div className="picture">
            <img src={pict} alt="" className="pict"></img>
        </div>
      </div>
    );
  }
  
  export const qstRemain = 26;
  export const wrongAnsw = 1;
  export const rightAnsw = 2;
  export default Quiz;

  //style={{ width: '130%', float: 'left' , borderLeft: '2px solid #000000', justifyContent: 'center'}}