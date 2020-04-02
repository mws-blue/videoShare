import React from 'react';
import "./Privacy.css";
import { Breadcrumb } from 'antd';
export default class Videos extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="black">
                    <Breadcrumb >
                        <Breadcrumb.Item>
                            个人资料
                    </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            上传视频
                    </Breadcrumb.Item>
                    </Breadcrumb>

                </div>
                <div className="videoBox">
                     <div className="videoItem"></div>
                </div>
            </div>
        )
    }
}