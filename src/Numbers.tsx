import React from "react";
import "./numbers.css"

interface IProps {
  shownNumbers: number[];
}

class Numbers extends React.Component<IProps> {
  render() {
    const { shownNumbers } = this.props;
    return (
      <>
        {shownNumbers.length > 0 && <p>Números que ya han salido:</p>}

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number < 10 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 10 && number < 20 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 20 && number < 30 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 30 && number < 40 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 40 && number < 50 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 50 && number < 60 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 60 && number < 70 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 70 && number < 80 ? <span> {number},</span> : ""
          )}
        </div>

        <div className="numbersDiv">
          {shownNumbers.map(number =>
            number >= 80 && number <= 90 ? <span> {number},</span> : ""
          )}
        </div>
      </>
    );
  }
}

export default Numbers;
