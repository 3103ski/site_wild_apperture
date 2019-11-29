import React, { Component } from "react"

import "./FamPageTv.css"

import AdventureVideo from "../VideoPlayer/AdventureVideo"
import DayInLifeVideo from "../VideoPlayer/DayInLifeVideo"

class FamPageTv extends Component {
  state = {
    video: "adventure",
  }
  videoSelect = vid => {
    console.log(this.state)
    switch (vid) {
      case "adventure":
        {
          this.setState({
            video: "adventure",
          })
        }
        break
      case "dayInTheLife": {
        this.setState({
          video: "dayInTheLife",
        })
      }
    }
  }

  render() {
    const textColorThree = "#837448"
    const txtStyleThree = { color: textColorThree, fontFamily: "playfair" }
    let video

    console.log("tv sees", this.state.video)

    switch (this.state.video) {
      case "adventure":
        {
          video = <AdventureVideo></AdventureVideo>
        }
        break
      case "dayInTheLife":
        {
          video = <DayInLifeVideo></DayInLifeVideo>
        }
        break
    }
    return (
      <div className="player-skin-container">
        <h1 style={txtStyleThree}>Memories In Motion</h1>
        <p style={txtStyleThree}>
          There is absolutely nothing like having a sweet family video to
          cherish forever. Something about family videos goes here and then it
          explains why this family video is so awesome and why you should spend
          a ton of money on adding a family video to your package.
        </p>
        <div>
          <div style={{ display: "flex" }}>
            <button onClick={() => this.videoSelect("adventure")}>
              <img
                style={{ width: "1.4vw" }}
                src={require("../../images/icon-play-box.png")}
              ></img>
              <p
                style={{
                  fontFamily: "Playfair",
                  color: "white",
                  margin: "0 0 0 .7vw",
                  fontSize: "1.2vw",
                  lineHeight: "1.7vw",
                  width: "unset",
                }}
              >
                Adventure
              </p>
            </button>
            <button onClick={() => this.videoSelect("dayInTheLife")}>
              <img
                style={{ width: "1.4vw" }}
                src={require("../../images/icon-play-box.png")}
              ></img>
              <p
                style={{
                  fontFamily: "Playfair",
                  color: "white",
                  margin: "0 0 0 .7vw",
                  fontSize: "1.2vw",
                  lineHeight: "1.7vw",
                  width: "unset",
                }}
              >
                Day In The Life
              </p>
            </button>
          </div>
        </div>
        <img
          className="tv-frame"
          src={require("../../images/fam-page-tv.png")}
        ></img>
        <div className="video">
          <div>{video}</div>
        </div>
      </div>
    )
  }
}

export default FamPageTv
