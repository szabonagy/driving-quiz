import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fail from "./Fail";
import Success from "./Succes";
import QuizApp from "./QuizApp"
import Main from "./Main";
import FirebaseAuthService from "./FirebaseAuthService";
// eslint-disable-next-line no-unused-vars
import firebase from "../FirebaseConfig"
import LoginForm from "./LoginForm";
// import { wrongAnsw } from "./Quiz";
// import { rightAnsw } from "./Quiz";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";


function App() {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  // const [showComponent, setShowComponent] = useState(false);
  // const [showPassed, setPassed] = useState(false);
  // const [failedAnsw, setfailedAnsw] = useState(false);
  // const [remainQuestions, setremainQuestions] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShowComponent(true);
  //   }, 1800000);
  // }, []);

  // useEffect(() =>{
  //   if (rightAnsw >= 22) {
  //     setPassed(true);
  //   };
  // },[])

  // useEffect(() =>{
  //   if (wrongAnsw > 4) {
  //     setfailedAnsw(true);
  //   };
  // },[])

  // useEffect(() =>{
  //   if (rightAnsw + wrongAnsw === 26) {
  //     setremainQuestions(false);
  //   };
  // },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/quiz",
      element: <QuizApp />
    },
    {
      path: "/fail",
      element: <Fail />
    },
    {
      path: "/success",
      element: <Success />
    },
    {
      path: "/login",
      element: <LoginForm />
    },
  ]);

  return(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
   };

export default App;