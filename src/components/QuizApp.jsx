import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";

function QuizApp() {
    return (
        <div className="App">
          <Header />
          <Quiz />
          <Footer />
        </div>
      );
}

export default QuizApp;