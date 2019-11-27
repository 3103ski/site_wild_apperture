import React, { Component } from "react"
import "./FamilyPageContent.css"

import Navigation from "../Navigation/Navigation"
import Col from "../HalfCol/HalfCol"

// Section Components
import FourPicDisplay from "../FourPicDisplay/FourPicDisplay"
import FamPageTv from "../FamPageTv/FamPageTv"

class FamilyPageContent extends Component {
  state = {
    sectionTwoSlide: 1,
  }

  render() {
    let SectionTwoText
    if (this.state.sectionTwoSlide === 1) {
      SectionTwoText = (
        <div className="slideTxt">
          <h2 className="colorOne">Memories you can't forget.</h2>
          <h2 className="colorOne">Moments you'll love.</h2>
          <p className="colorOne">
            You take so many pictures of your family... but you're never in
            them! We know that's a common Mom problem. We're here to take that
            burden off your shoulders
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 2) {
      SectionTwoText = (
        <div className="slideTxt">
          <h2 className="colorOne">Neque porro quisquam est.</h2>
          <h2 className="colorOne">Mauris dignissim tincidunt.</h2>
          <p className="colorOne">
            Morbi at bibendum nulla. Quisque justo quam, varius in pellentesque
            ut, condimentum ac turpis. Integer luctus purus diam. Nunc suscipit
            volutpat urna sed molestie.
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 3) {
      SectionTwoText = (
        <div className="slideTxt">
          <h2 className="colorOne">Cras bibendum dapibus.</h2>
          <h2 className="colorOne">Sed quis sem in.</h2>
          <p className="colorOne">
            Donec semper, sem et aliquam aliquet, velit erat interdum tellus,
            eget euismod tellus risus et libero. Donec dolor lorem, tristique id
            ex in, maximus auctor urna.
          </p>
        </div>
      )
    } else if (this.state.sectionTwoSlide === 4) {
      SectionTwoText = (
        <div className="slideTxt">
          <h2 className="colorOne">Praesent sed massa.</h2>
          <h2 className="colorOne">
            fringilla, cursus augue at, fringilla dolor.
          </h2>
          <p className="colorOne">
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
          <img src={require("../../images/fam_bg-3.png")}></img>

          <div className="contain_fam-header">
            <div className="box_header-titles">
              <h1>WILD APERTURE</h1>
              <h4>FAMILY & COUPLES PHOTOGRAPHY AND VIDEOGRAPHY</h4>
            </div>
          </div>
        </div>

        {/* ******************************************* */}
        {/*         SECTION__2__PICTURE SLIDE           */}
        {/* ******************************************* */}

        <div className="contain_section-2 fam_bg">
          <img src={require("../../images/fam_bg-4.png")}></img>
          <Col padLeft="7%" left alignItems="center">
            <FourPicDisplay changeTxt={changeSlideNum}></FourPicDisplay>
          </Col>
          <Col padRight="7%" alignItems="center" right flexDir="column">
            {SectionTwoText}
          </Col>
        </div>

        {/* ******************************************* */}
        {/*           SECTION__3__quadPics              */}
        {/* ******************************************* */}

        <div className="contain_section-3 fam_bg">
          <img src={require("../../images/fam_bg-5.png")}></img>
          <Col padLeft="7%" left width="40%" flexDir="column">
            <h1 className="colorTwo lightWeight">They're growing so fast</h1>
            <p className="colorTwo">
              Our children are only this age once. We want to see them grow and
              how they've grown over the years. Do this because you need to.
            </p>
          </Col>
          <Col alignItems="center" padRight="7%" right width="60%">
            <img src={require("../../images/quad-pics.png")}></img>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*             SECTION__4__Tv                  */}
        {/* ******************************************* */}

        <div className="contain_tv-section fam_bg">
          <img src={require("../../images/fam_bg-6.png")}></img>
          <Col alignItems="center" width="25%">
            <img
              style={{
                bottom: "2%",
                position: "absolute",
                right: "-22%",
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
            <FamPageTv></FamPageTv>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*          Section__5__FAMILY PRINTS          */}
        {/* ******************************************* */}

        <div className="contain_print-section fam_bg">
          <img src={require("../../images/fam_bg-7.png")}></img>
          <Col padLeft="7%" left alignItems="center">
            <img
              src={require("../../images/three-framed.png")}
              alt="prints"
            ></img>
          </Col>
          <Col flexDir="column" right padRight="7%">
            <h1 className="lightWeight colorOne">Put Them On The Wall</h1>
            <p className="colorOne">
              This is where we talk about how awesome our pictures are and the
              fact that they need to be on a wall. Not only because they look
              nice but because they’ll be seen everyday to be cherished forever.
            </p>
            <h1 className="lightWeight colorOne">We Offer Prints</h1>
            <p className="colorOne">
              This is where we tell them the fact that we offer prints of all
              sizes and maybe click here to download our print price guide. At
              this point they can’t believe this is so awesome and are ready to
              book.
            </p>
            <button>Download Print Sheet</button>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*          SECTION__6__PACKAGES               */}
        {/* ******************************************* */}

        <div className="contain_packages-section fam_bg">
          <img src={require("../../images/fam_bg-8.png")}></img>

          {/* "Lets Talk Banner" */}
          <Col width="100%" height="15%" alignItems="center">
            <h1
              style={{ letterSpacing: "1px", marginTop: "4%" }}
              className="lightWeight colorThree"
            >
              Let's Talk About Our Packages
            </h1>
          </Col>

          {/* ----------------------------------------------- */}
          {/*             ADVENTURE PACKAGES                  */}
          {/* ----------------------------------------------- */}

          <Col height="18%" top="15%" width="100%">
            <Col flexDir="column" left padLeft="8%" alignItems="center">
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
                  marginTop: "12%",
                }}
              >
                <h2 className=" lightWeight colorThree">Adventure Package</h2>
              </div>
              <p
                className="colorThree"
                style={{ textAlign: "right", marginTop: "15px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <div className="pkgs_inclusions" style={{ textAlign: "right" }}>
                <h4 className="colorThree">
                  2 hour adventure package includes
                </h4>
                <h4 className="colorThree" style={{ marginBottom: "10px" }}>
                  • one 16 x 24 • 25 images • 2 minute video
                </h4>
                <h4 className="colorThree">$850 for just pictures</h4>
                <h4 className="colorThree">$1250 for pictures and video</h4>
              </div>
            </Col>
            <Col right padRight="5%" alignItems="center">
              <img
                className="package-pic-right"
                src={require("../../images/tape-pic-1.png")}
              ></img>
            </Col>
          </Col>

          <Col height="18%" top="33%" width="100%">
            <Col left padLeft="5%" alignItems="center">
              <img
                className="package-pic-left"
                src={require("../../images/tape-pic-2.png")}
              ></img>
            </Col>
            <Col right padRight="8%" flexDir="column" alignItems="center">
              <h3 className="colorThree lightWeight">
                Something here about something
              </h3>
              <p className="colorThree" style={{ marginTop: "15px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                augue sapien. Nunc faucibus congue interdum. Sed eu enim
                tincidunt, posuere risus ac, rutrum arcu.
              </p>
              <p className="colorThree">
                Aliquam consectetur, odio id iaculis auctor, ante urna gravida
                mi, in rutrum nisi sapien in sem. Fusce vehicula interdum
                pharetra. Cras blandit viverra eros, quis pulvinar purus
                fringilla sit amet. Morbi tristique odio ut pretium vestibulum.
                Integer laoreet ornare congue.
              </p>
            </Col>
          </Col>

          {/* MOUNTAIN GRAPHIC */}
          <Col alignItems="center" width="100%" top="51%" height="10%">
            <img
              className="mountain"
              src={require("../../images/img-mountain.png")}
            ></img>
          </Col>

          {/* ----------------------------------------------- */}
          {/*           DAY IN THE LIFE PACKAGES              */}
          {/* ----------------------------------------------- */}

          <Col height="18%" top="61%" width="100%">
            <Col flexDir="column" right padRight="8%" alignItems="center">
              <div
                style={{
                  width: "340px",
                  height: "65px",
                  backgroundColor: "#fefdfb",
                  border: "solid 5px #f1f0eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-100%",
                  zIndex: "1",
                  marginTop: "12%",
                }}
              >
                <h2 className="colorThree lightWeight">
                  Day In The Life Package
                </h2>
              </div>
              <p style={{ marginTop: "15px" }} className="colorThree">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <div className="pkgs_inclusions" style={{ textAlign: "left" }}>
                <h4 className="colorThree">
                  2 hour adventure package includes
                </h4>
                <h4 className="colorThree">
                  • one 16 x 24 • 25 images • 2 minute video
                </h4>
                <h4 style={{ marginTop: "10px" }} className="colorThree">
                  $850 for just pictures
                </h4>
                <h4 className="colorThree">$1250 for pictures and video</h4>
              </div>
            </Col>
            <Col left padLeft="5%" alignItems="center">
              <img
                className="package-pic-right"
                src={require("../../images/tape-pic-3.png")}
              ></img>
            </Col>
          </Col>

          <Col height="16%" top="79%" width="100%">
            <Col right padRight="5%" alignItems="center">
              <img
                className="package-pic-left"
                src={require("../../images/tape-pic-4.png")}
              ></img>
            </Col>
            <Col left padLeft="8%" flexDir="column" alignItems="center">
              <h3 style={{ textAlign: "right" }} className="colorThree">
                Something here about something
              </h3>
              <p
                className="colorThree"
                style={{ marginTop: "15px", textAlign: "right" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                augue sapien. Nunc faucibus congue interdum. Sed eu enim
                tincidunt, posuere risus ac, rutrum arcu.
              </p>
              <p className="colorThree" style={{ textAlign: "right" }}>
                Aliquam consectetur, odio id iaculis auctor, ante urna gravida
                mi, in rutrum nisi sapien in sem. Fusce vehicula interdum
                pharetra. Cras blandit viverra eros, quis pulvinar purus
                fringilla sit amet. Morbi tristique odio ut pretium vestibulum.
                Integer laoreet ornare congue.
              </p>
            </Col>
          </Col>
        </div>

        {/* ******************************************* */}
        {/*          SECTION__7__CONTACT FORM           */}
        {/* ******************************************* */}

        <div className="contain_form-section fam_bg">
          <img src={require("../../images/fam_bg-9.png")}></img>
          {/* LEFT PICTURES */}
          <Col width="25%" alignItems="center"></Col>
          {/* FORM */}
          <Col
            display="flex"
            width="50%"
            marginLeft="25%"
            flexDir="column"
            alignItems="center"
            padTop="5%"
            justCont="unset"
          >
            <h1>Ready to book?</h1>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <input placeholder="Name" type="text" name="name" />
              <input placeholder="Email" type="email" name="email" />
              <input
                placeholder="Date And Location"
                type="email"
                name="email"
              />
              <textarea
                placeholder="What's on your mind?"
                name="message"
                rows="6"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </Col>
          {/* RIGHT PICTURES */}
          <Col width="25%" marginLeft="75%"></Col>
        </div>
      </>
    )
  }
}

export default FamilyPageContent
