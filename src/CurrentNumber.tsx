import React from "react";
import Speech from "speak-tts";

interface IProps {
  random: number;
}

class CurrentNumber extends React.Component<IProps> {
  render() {
    const { random } = this.props;

    const speech = new Speech();
    speech
      .init()
      .then((data: object) => {
        //returns data
      })
      .catch((e: any) => {
        console.error("An error occured while initializing : ", e);
      });

    speech
      .speak({
        text: `El ${random}`
      })
      .catch((e: any) => {
        console.error("An error occurred :", e);
      });

    return <>{random}</>;
  }
}

export default CurrentNumber;
