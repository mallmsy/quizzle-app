import React from 'react';

const Welcome = ({begin, started}) => {
  return (
    <div
    className={"welcome"}
    id={started ? "collapse" : null}>

      <div className="question-box--wrapper" id={started ? "collapse" : null}>
        <div className="question-box" id={started ? "collapse" : null}>
          <h1>Welcome to QUIZZLE</h1>
          <p>Answer these questions to find out how much you know about life</p>
        </div>
      </div>

      <div
      className="next-button-wrapper"
      id={started ? "collapse" : null}>

        <div
        className="next-button"
        onClick={() => begin()}
        id={started ? "collapse" : null}>

          <p>{started ? "" : "Begin"}</p>

        </div>
      </div>
    </div>
  );
}

export default Welcome;
