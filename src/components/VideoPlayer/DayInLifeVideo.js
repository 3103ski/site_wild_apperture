import React, { Component } from "react"
import ReactPlayer from "react-player"

import "./videos.css"

class TestVideo extends Component {
	state = {}
	render() {
		return (
			<div>
				<div className='transition'></div>
				<ReactPlayer
					url='https://assets.mixkit.co/videos/546/546-720.mp4'
					playing
					loop
					width='100%'
					height='unset'
				/>
			</div>
		)
	}
}

export default TestVideo
