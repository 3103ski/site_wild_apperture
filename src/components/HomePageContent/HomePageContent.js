import React, { Component } from "react"
import "./HomePageContent.css"

import Navigation from "../Navigation/Navigation"
import Col from "../HalfCol/HalfCol"

class HomePageContent extends Component {
  state = {}
  render() {
    return (
      <>
        {/* ******************************************* */}
        {/*                    Header                   */}
        {/*            Title, Banner Pic, Nav           */}
        {/* ******************************************* */}

        <div className="contain_header-section section_BG">
          <img src={require("../../images/fam_bg-1.png")}></img>
          {/* Photo behind BG is backgroung img in CSS */}
          <div className="image_home-header-bg header-bg">
            <img src={require("../../images/fam_bg-2.png")}></img>
          </div>
          <Navigation></Navigation>
          <img
            style={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
              position: "absolute",
              left: "0",
              right: "0",
            }}
            src={require("../../images/img-arrow.png")}
          ></img>
          <img src={require("../../images/home-header-bg-3.png")}></img>

          <div className="contain_title-header">
            <div className="box_header-titles">
              <h1>WILD APERTURE</h1>
              <h4>FAMILY & COUPLES PHOTOGRAPHY AND VIDEOGRAPHY</h4>
            </div>
          </div>
        </div>

        {/* ******************************************* */}
        {/*                 Section__1                  */}
        {/*          Three Pics, Brown Stripe           */}
        {/* ******************************************* */}

        <div className="contain_home-section-1 section_BG">
          <img src={require("../../images/home-section-1-bg.png")}></img>
          <Col width="100%" alignItems="center" padLeft="7%" padRight="7%">
            <img
              src={require("../../images/home-section-1-threePics.png")}
              alt="pics"
            ></img>
            <div className="stripe_container">
              <div className="stripe">
                <img
                  src={require("../../images/home-section-1-stripe.png")}
                  alt="stripe"
                ></img>
                <h2>Family Photography & Videography</h2>
              </div>
            </div>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*                Section__2                   */}
        {/*             Family Page Info                */}
        {/* ******************************************* */}

        <div className="contain_home-section-2 section_BG">
          <img src={require("../../images/home-section-2-bg.png")}></img>
          <Col alignItems="center" width="45%" padLeft="7%">
            <img
              src={require("../../images/home-section-2-familyPic.png")}
              alt="familyPic"
            ></img>
          </Col>
          <Col
            width="55%"
            alignItems="center"
            padRight="7%"
            padLeft="2%"
            marginLeft="45%"
            flexDir="column"
          >
            <h3 className="color_home_brown-1">Adventure Packages Available</h3>
            <p className="color_home_brown-1">
              Proin dignissim elit nec massa convallis aliquam. Morbi et pretium
              massa. Aenean eu leo elit. Nulla eleifend blandit elit, a pharetra
              magna condimentum sit amet.
            </p>
            <h3 className="color_home_brown-1">Day In The Life Photo Shoots</h3>
            <p className="color_home_brown-1">
              Proin dignissim elit nec massa convallis aliquam. Morbi et pretium
              massa. Aenean eu leo elit. Nulla eleifend blandit elit, a pharetra
              magna condimentum sit amet.
            </p>
            <button
              style={{
                marginRight: "auto",
                backgroundColor: "#aa9482",
              }}
            >
              Get More Family Info
            </button>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*              Section__Mount                 */}
        {/*             Mountain Graphic                */}
        {/* ******************************************* */}

        <div className="contain_home-section-mount section_BG">
          <img src={require("../../images/home-section-mount-bg.png")}></img>
          <Col width="100%" padLeft="7%" padRight="7%" alignItems="center">
            <img
              className="mountain"
              src={require("../../images/home-section-mount-graphic.png")}
              alt="mountain"
            ></img>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*                 Section__3                  */}
        {/*          Three Pics, Blue Stripe            */}
        {/* ******************************************* */}

        <div className="contain_home-section-3 section_BG">
          <img src={require("../../images/home-section-3-bg.png")}></img>
          <Col width="100%" alignItems="center" padLeft="7%" padRight="7%">
            <img
              src={require("../../images/home-section-3-pictures.png")}
              alt="pics"
            ></img>
            <div className="stripe_container">
              <div className="stripe">
                <img
                  src={require("../../images/home-section-3-stripe.png")}
                  alt="stripe"
                ></img>
                <h2>Family Photography & Videography</h2>
              </div>
            </div>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*                 Section__4                  */}
        {/*           Couples info & link               */}
        {/* ******************************************* */}

        <div className="contain_home-section-4 section_BG">
          <img src={require("../../images/home-section-4-bg.png")}></img>
          <img src={require("../../images/home-section-spacer-1-bg.png")}></img>
          <Col alignItems="center" width="45%" padRight="7%" marginLeft="55%">
            <img
              src={require("../../images/home-section-4-couplePicture.png")}
              alt="familyPic"
            ></img>
          </Col>
          <Col
            width="55%"
            alignItems="center"
            padLeft="7%"
            padRight="2%"
            flexDir="column"
          >
            <h3 className="color_home_blue-1">Adventure</h3>
            <p className="color_home_blue-1">
              Proin dignissim elit nec massa convallis aliquam. Morbi et pretium
              massa. Aenean eu leo elit. Nulla eleifend blandit elit, a pharetra
              magna condimentum sit amet.
            </p>
            <h3 className="color_home_blue-1">A Day In The Life</h3>
            <p className="color_home_blue-1">
              Proin dignissim elit nec massa convallis aliquam. Morbi et pretium
              massa. Aenean eu leo elit. Nulla eleifend blandit elit, a pharetra
              magna condimentum sit amet.
            </p>
            <button
              style={{
                marginLeft: "auto",
                backgroundColor: "#96a2a7",
              }}
            >
              Get More Couples Info
            </button>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*          Section__Spacer-1                  */}
        {/* ******************************************* */}

        <div className="contain_home-section-spacer-1 section_BG">
          {/* <img src={require("../../images/home-section-spacer-1-bg.png")}></img> */}
        </div>

        {/* ******************************************* */}
        {/*               Section__5__                  */}
        {/*            TOMMY & JACELYNE                 */}
        {/* ******************************************* */}

        <div className="contain_home-section-5 section_BG">
          <img src={require("../../images/home-section-5-bg2.png")}></img>
          <Col padLeft="7%" width="45%" flexDir="column" alignItems="center">
            <div className="bioTitle">
              <h2 className="color_home_brown-2">
                HEY
                <span style={{ fontSize: "3.4vw" }}>!</span> <span>WE ARE</span>
              </h2>
              <h2 className="color_home_brown-2">TOMMY</h2>
              <h2 className="color_home_brown-2">
                <span>AND</span>
                JACELYNE
              </h2>
            </div>
            <p>
              A duo with a passion for capturing raw emotion. We're both born
              and raised in South Florida but have lived in a few other states
              through the last 10 years: Tennessee, Oregon, Washington and
              Colorado! We are lovers of mountains, forests, oceans, universe,
              awesome conversation, and photo and film. We love to build
              friendships through our work and connect with our couples in order
              to give them the best experience possible. We love traveling
              around the world to take pictures and create films and we think
              that shows in our work. Don't be shy to reach out to us!
            </p>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*          Section__Spacer-2                  */}
        {/* ******************************************* */}

        <div className="contain_home-section-spacer-2 section_BG">
          <img src={require("../../images/home-section-spacer-2-bg.png")}></img>
        </div>

        {/* ******************************************* */}
        {/*          Section__6__                       */}
        {/* ******************************************* */}

        <div className="contain_home-section-6 section_BG">
          <img src={require("../../images/home-section-6-bg.png")}></img>
        </div>

        {/* ******************************************* */}
        {/*          Section__7__                       */}
        {/* ******************************************* */}

        <div className="contain_home-section-7 section_BG">
          <img src={require("../../images/home-section-7-bg.png")}></img>
        </div>
      </>
    )
  }
}

export default HomePageContent
