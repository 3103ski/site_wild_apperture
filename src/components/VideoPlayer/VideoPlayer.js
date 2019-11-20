import React, { Component } from "react"
import ReactPlayer from "react-player"

class TestVideo extends Component {
	state = {}
	render() {
		return (
			<ReactPlayer
				// url={require("../../images/test-video.mp4")}
				url='https://assets.mixkit.co/videos/546/546-720.mp4'
				playing
				loop
				width='100%'
				height='unset'
			/>
		)
	}
}

export default TestVideo
