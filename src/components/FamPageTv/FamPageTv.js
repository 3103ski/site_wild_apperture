import React, { Component } from "react"

import "./FamPageTv.css"

import VideoPlayer from "../VideoPlayer/VideoPlayer"

class FamPageTv extends Component {
	state = {}
	render() {
		return (
			<div className='player-skin-container'>
				<img
					className='tv-frame'
					src={require("../../images/fam-page-tv.png")}></img>
				{/* <video src={require("../../images/test-video.mp4")} autoplay></video> */}
				<div className='video'>
					<VideoPlayer></VideoPlayer>
				</div>
			</div>
		)
	}
}

export default FamPageTv
