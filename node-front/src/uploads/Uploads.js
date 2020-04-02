import React from 'react';
import $ from 'jquery';
import "./Privacy.css";
import { Breadcrumb } from 'antd';
import Privacy from "../uploads/Privacy";
import { Switch } from 'antd';

export default class Uploads extends React.Component {
    constructor() {
        super()
    }


    updateFiles() {

    }
    updateFile() {
        let file = document.getElementById("choose").files[0];
        let formData = new FormData();
        let vName = $('#vName').val();
        let vDesc = $('#vDesc').val();
        let userInfo = localStorage.getItem("userInfo")
        // let userInfo =JSON.parse(localStorage.getItem("userInfo"))
        let userId = userInfo.userId
     

        formData.append("fileData", file);
        $.ajax({
            type: 'post',
            url: "http://localhost:4000/profile",
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                $(".newViedo").attr("src", data.filePath);
                console.log(vName, vDesc)
                let vUrl = data.filePath;
                $.ajax({
                    type: 'post',
                    dataType: 'text',
                    url: "http://localhost:4000/uploader",
                    data: { vName, vDesc, vUrl ,userId},
                    success: function (data) {
                        alert("shangchuanchengg")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            },
            error: function (err) {
                console.log(err.message);
            }
        })
    }
    onChange(checked) {
        console.log(`${checked}`);
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
                            上传视频
                    </Breadcrumb.Item>
                    </Breadcrumb>

                </div>
                <div className="showUpload">
                    <form encType='multipart/form-data' method='post'>
                        <label htmlFor="">视频标题</label> <input id="vName" type="text" /><br /><br />
                        <label htmlFor="">视频描述</label> <input id="vDesc" type="text" /><br /><br />
                        <input className="file" type="file" id="choose" /><br /><br />
                    是否公开： <Switch defaultChecked onChange={this.onChange.bind(this)} /><br />
                    </form>
                    <button className="fileBtn" onClick={this.updateFile.bind(this)}>上传文件</button><br />
                </div>
            </div>

        )
    }

}