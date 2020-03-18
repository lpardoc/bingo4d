import React from "react";
import "./numbers.css"

interface IProps {
  shownNumbers: number[];
  numbersToBeShown: number[]
}

class Numbers extends React.Component<IProps> {
  render() {
    const { shownNumbers, numbersToBeShown } = this.props;

    const allNumbers = shownNumbers.concat(numbersToBeShown).sort()
    return (
      <>
        

        <div className="numbersDiv">
          {allNumbers.map((number: number) =>
            number < 10 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }>{number}</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 10 && number < 20 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 20 && number < 30 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 30 && number < 40 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 40 && number < 50 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 50 && number < 60 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 60 && number < 70 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 70 && number < 80 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {allNumbers.map(number =>
            number >= 80 && number <= 90 ? <span className={shownNumbers.includes(number) ? "numbersShown" : "numberToBeShown" }> {number} </span> : ""
          )}
        </div>
      </>
    );
  }
}

export default Numbers;
