import React from "react";

function Bar({ wrapperRef, goLeft, goRight, updateStats }) {
  // let {wrapperRef, goLeft, goRight, updateStats} = props;
  return (
    <div>
      <div ref={wrapperRef} id={"barWrapper"} />
      <button onClick={goLeft} onMouseEnter={updateStats}>
        Go Left
      </button>
      <button onClick={goRight} onMouseEnter={updateStats}>
        Go Right
      </button>
    </div>
  );
}

export default Bar;
