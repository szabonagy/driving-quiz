import React from "react";
import Fail from "./Fail";
import Success from "./Succes";
import QuizApp from "./QuizApp"
import firebaseApp from "../FirebaseConfig";
import { wrongAnsw } from "./Quiz";
import { rightAnsw } from "./Quiz";
import { useState, useEffect } from "react";


function App() {

  const [showComponent, setShowComponent] = useState(false);
  const [showPassed, setPassed] = useState(false);
  const [failedAnsw, setfailedAnsw] = useState(false);
  const [remainQuestions, setremainQuestions] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 1800000);
  }, []);

  useEffect(() =>{
    if (rightAnsw >= 22) {
      setPassed(true);
    };
  },[])

  useEffect(() =>{
    if (wrongAnsw > 4) {
      setfailedAnsw(true);
    };
  },[])

  useEffect(() =>{
    if (rightAnsw + wrongAnsw === 26) {
      setremainQuestions(false);
    };
  },[])

    if (showComponent && !showPassed) {
      return <Fail />;
    } if (!failedAnsw && !showPassed && remainQuestions) {
      return <QuizApp />
    } if (!failedAnsw && showPassed) {
      return <Success />
    } return <Fail />;
  };

export default App;