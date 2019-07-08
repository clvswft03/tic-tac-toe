import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Game extends React.Component {
  render() {
    return <div className="game">TEST</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Game />, rootElement);
