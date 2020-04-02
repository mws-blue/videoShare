import React from 'react';
import $ from 'jquery';
import "./Privacy.css";
import uploadsImg from "./upload.png"
import { Breadcrumb } from 'antd';

export default class Uploads extends React.Component {
    constructor() {
        super()
    }


    toUpload(){
        this.props.headThis.handleReback("upload")
    }

    render() {
        return (
            <div>
                <div className="black">
                    <Breadcrumb >
                        <Breadcrumb.Item>
                            个人资料
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            私密视频
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <span>上传了0个视频</span>
                </div>
                <div className="uploadBox">
                    <img className="uploadsImg" src={uploadsImg} alt="" />
                    <div className="uploadText"><span className="cccText">你还没有上传私密视频</span><span className="redText" onClick={this.toUpload}>立即上传</span></div>
                </div>
            </div>
        )
    }

}