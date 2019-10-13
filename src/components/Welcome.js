import React from 'react';

const Welcome = ({begin, started}) => {
  return (
    <div
    className={"welcome"}
    id={started ? "collapse" : null}>

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
