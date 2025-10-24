import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  RotatingLines,
  TailSpin,
  ThreeDots,
  Watch,
  RevolvingDot,
  Triangle,
  Hourglass,
} from "react-loader-spinner";
import "./resultmodal.css";
import { Redirect } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const Create = ({
  result,
  getData,
  updateQuizData,
  updatePlayerAnswer,
  updateCurrentPage,
  updateResultModalStatus,
  //   resultModalStatus,
}) => {
  const [backHome, updateBackHome] = useState(false);
  const [loadingLoader, updateLoadingLoader] = useState(true);
  const resultRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoadingLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loadingLoader) {
      resultRef.current.focus();
    }
  }, [loadingLoader, resultRef]);

  const backToHome = () => {
    updateBackHome(true);
  };

  const restartGame = () => {
    updateCurrentPage(1);
    updateQuizData([]);
    updatePlayerAnswer([]);
    updateResultModalStatus(false);
    getData();
  };

  if (backHome) {
    return <Redirect to="/" />;
  }

  return ReactDOM.createPortal(
    <div className="block__modalContainer">
      {loadingLoader ? (
        <ClimbingBoxLoader
          type="Oval"
          color="#ffa500"
          height={100}
          width={100}
          timeout={2000}
        />
      ) : (
        <div
          className="block__modalContainer__dialogBox"
          role="dialog"
          id="quiz-result"
        >
          <div
            className="block__modalContainer__dialogBox--container"
            ref={resultRef}
            tabIndex="0"
            aria-label="Quiz result"
            aria-describedby="dialog1Desc"
          >
            <h2>{result !== 0 ? "CONGRATULATION" : "SORRY!!"}</h2>
            <h5>You answered</h5>
            <h1>{result}/10</h1>
            <h5>{result <= 1 ? "question correct" : "questions correct"}</h5>
            <span id="dialog1Desc" role="textbox">
              {result !== 0
                ? result > 1
                  ? "Congratulation, You answered" +
                    result +
                    "questions correct"
                  : "Congratulation, You answered" + result + "question correct"
                : "Sorry, Your got" + result + "question correct"}
            </span>
            <div role="menu" className="block__modalContainer--nav">
              <button aria-label="play again" onClick={restartGame}>
                Play again
              </button>
              <button aria-label="back to home" onClick={backToHome}>
                Back to home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default Create;
