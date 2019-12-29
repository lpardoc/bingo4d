import React from "react";
import Title from "./Title";
import "./App.css";
import RandomNumber from "./RandomNumber";

class App extends React.Component {
  render() {
    return (
      <>
        <Title />

        <RandomNumber />
      </>
    );
  }
}
export default App;
