import React from "react";
import "./material.css";
import { Carousel } from 'antd';
import mp1 from "./media/media.mp3";
import banner from "./media/banner.mp4"
import axios from 'axios';


import {
    PlayCircleFilled,
    PauseCircleFilled
} from '@ant-design/icons';
import VideoList from './videoList.js';

class Material extends React.Component {
    constructor() {
        super()
        this.state = {
            //控制音乐播放按钮
            display_name1: 'block',
            display_name: "none",
            display1:"block",
            display2:"none",
        }
    }
    display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
        this.play()
        if(this.state.display_name1=="block"){
            this.setState({
                display_name1: 'none',
                display_name: "block"
            })
        }else{
            this.setState({
                display_name1: 'block',
                display_name: "none"
            })
        }
       
    }
    componentDidMount() {
      
        axios.get('http://localhost:3000/getImg')
        .then(function (response) {
            console.log("ok")
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
     
      }
    //音乐点击播放
    play() {
        console.log(1)
        var audio = document.getElementById('aud');
        if (audio.paused) {
            audio.play();

        } else {
            audio.pause();

        }
    }
    toList(){
    this.setState({
        display1:"none",
        display2:"block",

    })
   
    }
    render() {
        return (
            <div>
                <div style={{display:this.state.display2}}>
                <VideoList />
            </div>
                
            <div className="imports" style={{display:this.state.display1}}>
               
                <div className="head-banner">
                    <video src={banner} autoPlay="" muted loop ></video>
                  <div className="content-wraper">
                      <div className="banner-content">
                          <h1 className="title">海量素材，任意挑选</h1>
                          <p className="slogon">30000000+视频、音乐、图片和AE模板等高清素材供你选择</p>
                      <div className="resource-search-wraper">
                          <div>
                              <form action="" className="searchPond5Form">
                                <input type="text"  className="search-input" placeholder="搜索千万部高清电影级视频素材，多个关键词使用空格隔开"/>
                                <a href="" className="search-button">搜索</a>
                              </form>
                          </div>
                          
                      </div>
                      </div>
                  </div>
                </div>

                <div className="video-sort">
                    <div className="border-title">
                        <i><span className="border-title-span">热门视频专辑</span></i>
                    </div>
                    <div className="center-wraper">
                        <ul className="video-sort-list">
                            <li onClick={this.toList.bind(this)}><p onClick={this.toList.bind(this)}> <img onClick={this.toList.bind(this)}  src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/01/185c4149a48ffaf.jpg" /><span>延时</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b976c23e3ab8.jpg" /><span>自然</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b976c23d61c1.jpg" /><span>科技</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b976c240e293.jpg" /><span>航拍</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b976c23b867d.jpg" /><span>商业</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b976c23c5ab5.jpg" /><span>运动</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/01/185c4149658961e.jpg" /><span>水下摄影</span></p></li>
                            <li><p href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2018/09/115b9780d2d1873.jpg" /><span>更多</span></p></li>

                        </ul>
                    </div>
                </div>

                <div className="audio-sort">
                    <div className="center-wraper">
                        <ul className="sort-list">
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a1ade9c3.jpg" alt="" /><span>商业</span></a></li>
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a7332dbd.jpg" alt="" /><span>快乐</span></a></li>
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" alt="" /><span>摇滚</span></a></li>
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a7abff68.jpg" alt="" /><span>动感</span></a></li>
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a7ed90c0.jpg" alt="" /><span>钢琴</span></a></li>
                            <li><a href=""><img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a834d060.jpg" alt="" /><span>原声乐器</span></a></li>
                        </ul>
                        <div className="audio-hot">
                            <h2 className="title">热门音乐 <a href="">查看更多</a></h2>

                            <div className="audio-list-wraper">
                                <Carousel autoplay dotPosition="right" dots="false">
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                            <div className="audio-list-wraper">
                                <Carousel autoplay dotPosition="right" dots="false">
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>

                                </Carousel>
                            </div>
                            <div className="audio-list-wraper">

                                <Carousel autoplay dotPosition="right" dots="false">
                                    <div style="height:105px!important">

                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>

                                </Carousel>
                            </div>
                            <div className="audio-list-wraper">
                                <Carousel autoplay dotPosition="right" dots="false">
                                    <div style="height:105px!important">
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                    <div>
                                        <audio src={mp1} id="aud"></audio>
                                        <div className="audio-item-left">
                                            <img src="https://oss-xpc0.xpccdn.com/Upload/edu/2019/07/045d1d7a772364f.jpg" onClick={this.play} alt="" />
                                        </div>
                                        <div className="playicon" style={{ display: this.state.display_name1 }} onClick={this.display_name.bind(this)}>
                                            <PlayCircleFilled />
                                        </div>
                                        <div className="stopicon" style={{ display: this.state.display_name }} onClick={this.display_name.bind(this)}>
                                            <PauseCircleFilled />
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
export default Material;