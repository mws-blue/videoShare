import React from "react";
import "./videoItem.css"
import lironghao from "../video/lironghao.mp4";
import avatar from "../img/avatar.jpg";
import $ from "jquery";

class VideoItem extends React.Component {
	constructor() {
		super()
	}


	render() {
		return (
			<div className="itemVideo-contain">
				<div className="video-play">
					<div className="video-img">
						<img src="https://cs.xinpianchang.com/uploadfile/banner/2019/09/23/5d88b8665a634.jpg@720w_200h_50-20bl_1e_1c" />
					</div>
					<video className="video-body" controls>
						<source src={require('../' + this.props.change.state.item.vUrl)} />
					</video>
				</div>
				<div className="video-descbody">
					<div className="desc-left">
						<h3 className="video-name">{this.props.change.state.item.vName}</h3>
						<div className="video-type">
							<span>音乐</span>
							<span>MV</span>
						</div>
						<div className="user-action">
							<div className="play-numbox">
								<span className='play-title'>播放量</span>
								<span className="play-num">{this.props.change.state.item.playNum}</span>
							</div>
							<div className='action-right'>
								<span className='like'>
									<span className='like-title'>喜欢</span>
									<span className="like-num">{this.props.change.state.item.likeNum}</span>
								</span>
								<span className='share'>分享</span>
								<span className='colect'>收藏</span>
							</div>
						</div>
						<div className="video-desc">
							<p>{this.props.change.state.item.vDesc}</p>
						</div>
					</div>
					<div className='desc-rigth'>
						<div style={{ marginBottom: "20px" }}>
							<h3>本片创作人</h3>
							<div className="user-info">
								<img className='user-avatar' src={avatar} />
								<span className='user-name'>{this.props.change.state.item.userName}</span>
								<span className='user-focus'>关注</span>
							</div>
						</div>
						<div>
							<h3>相似作品</h3>
							<div>
								<div className="introduce-video">
									<div><img style={{ width: "165px" }} src="https://oss-xpc0.xpccdn.com/uploadfile/article/2020/03/25/5e7b204b9718f.jpeg@335w.jpg" /></div>
									<div className="intro-infobox">
										<span className='intro-title'>生生不息励志哲思混剪《生命不息，战斗不止》</span>
										<span>Vlog-其他</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VideoItem;