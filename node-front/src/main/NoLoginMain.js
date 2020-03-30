import React from "react";
import "./NotLoginMain.css";
import bg from "../video/bg.mp4";

class NotLoginMain extends React.Component{
    constructor(){
		super();
	}

	render(){
		return(
			<div className="video-wrap">
				<video className="bgd-video"   loop muted autoPlay>
				  <source src={bg} type="video/mp4"/> 
				</video>
				<div className="home-flag">
					<p style={{width:"100%",textAlign:"center",fontSize:"50px"}}>用作品打动世界</p>
					<p style={{width:"100%",textAlign:"center",fontSize:"20px"}}>1,817,867 位创作人已加入</p>
					<div className="flag-in">
						<a href="#">随便逛逛</a>
						<a href="#">立即加入</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NotLoginMain;