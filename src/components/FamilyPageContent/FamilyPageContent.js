import React, { Component } from "react"
import "./FamilyPageContent.css"

import Navigation from "../Navigation/Navigation"
import Col from "../HalfCol/HalfCol"

// Section Components
import FourPicDisplay from "../FourPicDisplay/FourPicDisplay"
import SectionThreeTv from "../FamPageTv/FamPageTv"
import FamPageTv from "../FamPageTv/FamPageTv"

class FamilyPageContent extends Component {
  state = {
    sectionTwoSlide: 1,
  }
  render() {
    const textColorOne = "#aa7363"
    const textColorTwo = "#3c5764"
    const textColorThree = "#837448"

    const txtStyleOne = { color: textColorOne, fontFamily: "playfair" }
    const txtStyleTwo = { color: textColorTwo, fontFamily: "playfair" }
    const txtStyleThree = { color: textColorThree, fontFamily: "playfair" }

    // Section two

    let SectionTwoText
    if (this.state.sectionTwoSlide === 1) {
      SectionTwoText = (
        <div className="slideTxt">
          <h1 style={{ color: textColorOne, fontFamily: "playfair" }}>
            Memories you can't forget.
          </h1>
          <h1 style={{ color: textColorOne, fontFamily: "playfair" }}>
            Moments you'll love.
          </h1>
          <p style={{ color: textColorOne, fontFamily: "playfair" }}>
            You take so many pictures of your family... but you're never in
            them! We know that's a common Mom problem. We're here to take that
            burden off your shoulders
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 2) {
      SectionTwoText = (
        <div className="slideTxt">
          <h1 style={{ color: textColorOne, fontFamily: "playfair" }}>
            Neque porro quisquam est.
          </h1>
          <h1 style={{ color: textColorOne, fontFamily: "playfair" }}>
            Mauris dignissim tincidunt.
          </h1>
          <p style={{ color: textColorOne, fontFamily: "playfair" }}>
            Morbi at bibendum nulla. Quisque justo quam, varius in pellentesque
            ut, condimentum ac turpis. Integer luctus purus diam. Nunc suscipit
            volutpat urna sed molestie.
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 3) {
      SectionTwoText = (
        <div className="slideTxt">
          <h1 style={txtStyleOne}>Cras bibendum dapibus.</h1>
          <h1 style={txtStyleOne}>Sed quis sem in.</h1>
          <p style={txtStyleOne}>
            Donec semper, sem et aliquam aliquet, velit erat interdum tellus,
            eget euismod tellus risus et libero. Donec dolor lorem, tristique id
            ex in, maximus auctor urna.
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 4) {
      SectionTwoText = (
        <div className="slideTxt">
          <h1 style={txtStyleOne}>Praesent sed massa.</h1>
          <h1 style={txtStyleOne}>
            fringilla, cursus augue at, fringilla dolor.
          </h1>
          <p style={txtStyleOne}>
            Suspendisse egestas urna ac iaculis condimentum. Aliquam erat
            volutpat. Aenean volutpat vulputate augue vitae condimentum.
          </p>
        </div>
      )
    }
    const changeSlideNum = num => {
      this.setState({
        sectionTwoSlide: num,
      })
    }

    return (
      <>
        {/* ******************************************* */}
        {/* HEADER__NAV__TITLE */}
        {/* ******************************************* */}
        <div className="contain_header-section fam_bg">
          <img src={require("../../images/fam_bg-1.png")}></img>
          <div className="image_header-bg">
            <img src={require("../../images/fam_bg-2.png")}></img>
          </div>
          <Navigation></Navigation>
          <img
            style={{
              width: "570px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
              position: "absolute",
              left: "0",
              right: "0",
            }}
            src={require("../../images/img-arrow.png")}
          ></img>
          <img src={require("../../images/fam_bg-3.png")}></img>

          <div className="contain_fam-header">
            <div className="box_header-titles">
              <h1>WILD APERTURE</h1>
              <h4>FAMILY & COUPLES PHOTOGRAPHY AND VIDEOGRAPHY</h4>
            </div>
          </div>
        </div>

        {/* ******************************************* */}
        {/* SECTION__2__PICTURE SLIDE */}
        {/* ******************************************* */}
        <div className="contain_section-2 fam_bg">
          <img src={require("../../images/fam_bg-4.png")}></img>
          <Col left alignItems="center">
            <FourPicDisplay changeTxt={changeSlideNum}></FourPicDisplay>
          </Col>
          <Col alignItems="center" right flexDir="column">
            {SectionTwoText}
          </Col>
        </div>

        {/* ******************************************* */}
        {/* SECTION__3__quadPics */}
        {/* ******************************************* */}
        <div className="contain_section-3 fam_bg">
          <img src={require("../../images/fam_bg-5.png")}></img>
          <Col left width="40%" flexDir="column">
            <h1 style={txtStyleTwo}>They grow so fast</h1>
            <p style={txtStyleTwo}>
              Our children are only this age once. We want to see them grow and
              how they've grown over the years. Do this because you need to.
            </p>
          </Col>
          <Col alignItems="center" right width="60%">
            <img src={require("../../images/quad-pics.png")}></img>
          </Col>
        </div>

        {/* ******************************************* */}
        {/* SECTION__4__Tv */}
        {/* ******************************************* */}
        <div className="contain_tv-section fam_bg">
          <img src={require("../../images/fam_bg-6.png")}></img>
          <Col alignItems="center" width="25%">
            <img
              style={{
                marginBottom: "-55%",
              }}
              src={require("../../images/fam-page-plant.png")}
            ></img>
          </Col>
          <Col
            flexDir="column"
            marginLeft="25%"
            width="50%"
            alignItems="center"
            padTop="20px"
          >
            <h1 style={txtStyleThree}>Memories In Motion</h1>
            <p style={txtStyleThree}>
              There is absolutely nothing like having a sweet family video to
              cherish forever. Something about family videos goes here and then
              it explains why this family video is so awesome and why you should
              spend a ton of money on adding a family video to your package.
            </p>
            <div>
              <div style={{ display: "flex" }}>
                <button>
                  <img
                    style={{ width: "15px" }}
                    src={require("../../images/icon-play-box.png")}
                  ></img>
                  <p
                    style={{
                      fontFamily: "Playfair",
                      color: "white",
                      margin: "0 0 0 8px",
                      fontSize: "12px",
                    }}
                  >
                    Adventure
                  </p>
                </button>
                <button>
                  <img
                    style={{ width: "15px" }}
                    src={require("../../images/icon-play-box.png")}
                  ></img>
                  <p
                    style={{
                      fontFamily: "Playfair",
                      color: "white",
                      margin: "0 0 0 8px",
                      fontSize: "12px",
                    }}
                  >
                    Day In The Life
                  </p>
                </button>
              </div>
            </div>
            <FamPageTv></FamPageTv>
          </Col>
        </div>

        {/* ******************************************* */}
        {/* Section__5__FAMILY PRINTS */}
        {/* ******************************************* */}

        <div className="contain_print-section fam_bg">
          <img src={require("../../images/fam_bg-7.png")}></img>
          <Col left alignItems="center">
            <img
              src={require("../../images/three-framed.png")}
              alt="prints"
            ></img>
          </Col>
          <Col flexDir="column" right>
            <h1 style={{ ...txtStyleOne, padding: "0 15px" }}>
              Put Them On The Wall
            </h1>
            <p
              style={{
                ...txtStyleOne,
                fontSize: "14px",
                lineHeight: "17px",
                padding: "5px 15px",
                margin: "0",
              }}
            >
              This is where we talk about how awesome our pictures are and the
              fact that they need to be on a wall. Not only because they look
              nice but because they’ll be seen everyday to be cherished forever.
            </p>
            <h1 style={{ ...txtStyleOne, padding: "0 15px" }}>
              We Offer Prints
            </h1>
            <p
              style={{
                ...txtStyleOne,
                fontSize: "14px",
                lineHeight: "17px",
                padding: "5px 15px",
                margin: "0",
              }}
            >
              This is where we tell them the fact that we offer prints of all
              sizes and maybe click here to download our print price guide. At
              this point they can’t believe this is so awesome and are ready to
              book.
            </p>
            <button
              style={{
                width: "170px",
                height: "35px",
                backgroundColor: "#937656",
                margin: "10px 15px",
                fontSize: "14px",
                color: "white",
              }}
            >
              Download Print Sheet
            </button>
          </Col>
        </div>
        {/* ******************************************* */}
        {/* SECTION__6__PACKAGES */}
        {/* ******************************************* */}

        <div className="contain_packages-section fam_bg">
          <img src={require("../../images/fam_bg-8.png")}></img>

          {/* ----------------------------------------------- */}
          {/*  ADVENTURE PACKAGES --------------------------- */}
          {/* ----------------------------------------------- */}
          <Col width="100%" height="15%" alignItems="center">
            <h1 style={{ ...txtStyleOne }}>Let's Talk About Our Packages</h1>
          </Col>
          <Col height="16%" top="15%" width="100%">
            <Col flexDir="column" left alignItems="center">
              <div
                style={{
                  width: "280px",
                  height: "65px",
                  backgroundColor: "#fefdfb",
                  border: "solid 5px #f1f0eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "-100%",
                  zIndex: "1",
                }}
              >
                <h2 style={txtStyleThree}>Adventure Package</h2>
              </div>
              <p
                style={{
                  ...txtStyleThree,
                  fontSize: "14px",
                  lineHeight: "15px",
                  textAlign: "right",
                  margin: "10px 0 5px auto",
                  maxWidth: "480px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h4 style={{ ...txtStyleThree, margin: " 5px 0 0 auto" }}>
                2 hour adventure package includes
              </h4>
              <h4 style={{ ...txtStyleThree, margin: " 5px 0 10px auto" }}>
                • one 16 x 24 • 25 images • 2 minute video
              </h4>
              <h4 style={{ ...txtStyleThree, margin: " 5px 0 0 auto" }}>
                $850 for just pictures
              </h4>
              <h4 style={{ ...txtStyleThree, margin: " 2px 0 10px auto" }}>
                $1250 for pictures and video
              </h4>
            </Col>
            <Col right alignItems="center">
              <img
                className="package-pic-right"
                src={require("../../images/tape-pic-1.png")}
              ></img>
            </Col>
          </Col>
          <Col height="16%" top="31%" width="100%">
            <Col left alignItems="center">
              <img
                className="package-pic-left"
                src={require("../../images/tape-pic-2.png")}
              ></img>
            </Col>
          </Col>
          {/* ----------------------------------------------- */}
          {/*  ADVENTURE PACKAGES --------------------------- */}
          {/* ----------------------------------------------- */}
        </div>
        {/* ******************************************* */}
        {/* ******************************************* */}
        <div className="contain_form-section fam_bg">
          <img src={require("../../images/fam_bg-9.png")}></img>
        </div>
      </>
    )
  }
}

export default FamilyPageContent