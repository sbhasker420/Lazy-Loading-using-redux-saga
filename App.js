import React, { Component } from "react";
import CardList from "./cardList/CardList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="cardList">
        <CardList />
      </div>
    );
  }
}

export default App;
