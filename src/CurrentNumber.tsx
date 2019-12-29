import React from "react";
import Speech from "speak-tts";

interface IProps {
  random: number;
}

class CurrentNumber extends React.Component<IProps> {
  render() {

    const { random } = this.props;

    const speech = new Speech(); // will throw an exception if not browser supported
    if (speech.hasBrowserSupport()) {
      // returns a boolean
      console.log("speech synthesis supported");
    }

    speech
      .init()
      .then((data: object) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data);
      })
      .catch((e: any) => {
        console.error("An error occured while initializing : ", e);
      });

      speech.speak({
        text: `El ${random}`,
    }).then(() => {
        console.log("Success !")
    }).catch((e: any) => {
        console.error("An error occurred :", e)
    })


    
    return <> {random} </>;
  }
}

export default CurrentNumber;
