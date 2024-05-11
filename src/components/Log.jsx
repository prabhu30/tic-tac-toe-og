import React from "react";

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          <b>{turn.player}</b> selected the square{" "}
          <b>
            {turn.square.row} , {turn.square.col}
          </b>
        </li>
      ))}
    </ol>
  );
}

export default Log;
