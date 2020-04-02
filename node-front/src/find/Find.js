import React from "react";
import "./Find.css";
import { FireOutlined, ContainerOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import avtor from "./1.jpg.jpg"
class Find extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="bg">
                <div className="find">
                    <div className="find-top">
                        <div className="find-top-box">
                            <div className="find-top-bar">
                                <div id="find-top-bar-one">创作人</div>
                                <div>创作机构</div>
                                <div>品牌</div>
                            </div>
                            <div className="find-top-contain">
                                <div id="all">全部</div>
                                <div>导演</div>
                                <div>摄影师</div>
                                <div>剪辑师</div>
                                <div>制片人</div>
                                <div>创意策划</div>
                                <div>编剧</div>
                                <div>设计师</div>
                                <div>出品人</div>
                                <div>调色师</div>
                                <div>灯光师</div>
                                <div>化妆演员</div>
                                <div>特效师</div>
                                <div>录音师</div>
                                <div>配音演员</div>
                                <div>化妆师</div>
                                <div>动画师</div>
                            </div>
                        </div>
                    </div>
                    <div className="Choose-bar">

                        <div ><FireOutlined style={{ color: 'red' }} /> 热门</div>
                        <div><ContainerOutlined /> 推荐</div>
                        <div><ClockCircleOutlined /> 最新</div>
                        <div id="solt">作品分类<DownOutlined /></div>
                    </div>
                    <div className="find-contain">
                        <div className="find-contain-item">
                            <div className="left-card">
                                <div className="left-card-top">
                                    <div className="avtor">
                                        <img src={avtor} alt="" />
                                    </div>
                                    <div className="right-card-contain" >
                                        <div className="info">
                                            <div className="username">用户名</div>
                                            <div id="identity">制片人</div>
                                            <div className="fensi">
                                                <div>粉丝 <span> 2462</span></div>
                                                <div>关注 <span> 12</span></div>
                                            </div>
                                            <div className="introduc">Timelab团队，请大家多多关照！</div>
                                        </div>
                                        <div className="right-card-buttom">
                                            <div className="connect">联系合作</div>
                                            <div className="fouck">关注</div>
                                        </div>
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
export default Find;