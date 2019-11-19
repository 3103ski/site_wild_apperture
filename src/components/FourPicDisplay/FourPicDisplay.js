import React, { Component } from "react"

import "./FourPicDisplay.css"

class FourPics extends Component {
  state = {
    picOne: true,
    picTwo: false,
    picThree: false,
    picFour: false,
  }

  changePic = num => {
    this.setState({
      picOne: false,
      picTwo: false,
      picThree: false,
      picFour: false,
    })
    this.setState({
      [num]: true,
    })
    let digit
    if (num === "picOne") {
      digit = 1
    } else if (num === "picTwo") {
      digit = 2
    } else if (num === "picThree") {
      digit = 3
    } else if (num === "picFour") {
      digit = 4
    }
    this.props.changeTxt(digit)
  }

  render() {
    const picOneClass = !this.state.picOne ? "hidden" : "show"
    const picTwoClass = !this.state.picTwo ? "hidden" : "show"
    const picThreeClass = !this.state.picThree ? "hidden" : "show"
    const picFourClass = !this.state.picFour ? "hidden" : "show"

    return (
      <div className="slider-container">
        <div className="visiblePic">
          <img
            className={picOneClass}
            alt="family"
            src={require("../../images/fam-pic-1.jpg")}
          ></img>
          <img
            className={picTwoClass}
            alt="family"
            src={require("../../images/fam-pic-2.jpg")}
          ></img>
          <img
            className={picThreeClass}
            alt="family"
            src={require("../../images/fam-pic-3.jpg")}
          ></img>
          <img
            className={picFourClass}
            alt="family"
            src={require("../../images/fam-pic-4.jpg")}
          ></img>
        </div>
        <div
          className="picBtnContainer"
          style={{
            display: "flex",
          }}
        >
          <div
            className="picBtn"
            style={{
              width: "25%",
              padding: "5px 3px",
            }}
            onClick={() => this.changePic("picOne")}
          >
            <img src={require("../../images/fam-pic-1.jpg")} alt="family"></img>
          </div>
          <div
            className="picBtn"
            style={{
              width: "25%",
              padding: "5px 3px",
            }}
            onClick={() => this.changePic("picTwo")}
          >
            <img src={require("../../images/fam-pic-2.jpg")} alt="family"></img>
          </div>
          <div
            className="picBtn"
            style={{
              width: "25%",
              padding: "5px 3px",
            }}
            onClick={() => this.changePic("picThree")}
          >
            <img src={require("../../images/fam-pic-3.jpg")} alt="family"></img>
          </div>
          <div
            className="picBtn"
            style={{
              width: "25%",
              padding: "5px 3px",
            }}
            onClick={() => this.changePic("picFour")}
          >
            <img src={require("../../images/fam-pic-4.jpg")} alt="family"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default FourPics
