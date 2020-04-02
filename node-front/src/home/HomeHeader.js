import React from "react";
import { Menu } from 'antd';

import "./Home.css";
import RihgtHead from "./RihgtHead";

const { SubMenu } = Menu;

class HomeHeader extends React.Component {
	constructor() {
		super();
		this.beginBgc = (localStorage.getItem("userInfo") !== null && localStorage.getItem("userInfo") !== "") ? "loginHead" : "notLoginHead";
		this.state = {
			headSyle: this.beginBgc
		}
	}

	handleClick = e => {

		console.log('click ', e.key);

		//改变内容
		this.props.change.changePage(e.key);

		//改变头部样式 点首页并且有存用户信息
		if (e.key === "main") {
			//点首页没有登录
			if (localStorage.getItem("userInfo") === null || localStorage.getItem("userInfo") === "" || localStorage.getItem("userInfo") === undefined) {
				this.props.change.changeTop("fixedTop");
				//设置头部样式
				this.setState({ headSyle: "notLoginHead" });
			} else {
				// 点首页登录
				this.props.change.changeTop("content-layui");
				//设置头部样式
				this.setState({ headSyle: "loginHead" });
			}

		} else {
			//其他
			this.props.change.changeTop("content-layui");

			//设置头部样式
			this.setState({ headSyle: "loginHead" });
		}
	};

	handleChange = e => {

		//设置头部样式
		this.setState({ headSyle: "loginHead" });

		console.log(e.target.id);
		this.props.change.changePage(e.target.id);

		//全传content-layui  不让内容置顶
		this.props.change.changeTop("content-layui");
	}

	//退出  由RigHthead触发
	handleChanges(a) {
		if (a === "main") {
			this.props.change.changePage(a);

			this.props.change.changeTop("fixedTop");

			//设置头部样式
			this.setState({ headSyle: "notLoginHead" });
		} else {

			this.props.change.changePage(a);

			this.props.change.changeTop("content-layui");

			//设置头部样式
			this.setState({ headSyle: "loginHead" });
		}
	}

	render() {
		return (
			<div className={this.state.headSyle}>
				<span className="logo-wrap">新片场</span>
				<Menu style={{ borderStyle: "none" }} className="head-menu" onClick={this.handleClick} mode="horizontal">
					<Menu.Item key="main"> 首页</Menu.Item>

					<SubMenu title={<span className="submenu-title-wrapper">发现</span>}>
						<Menu.ItemGroup title="作品">
							<Menu.Item key="main1">广告</Menu.Item>
							<Menu.Item key="main2">宣传片</Menu.Item>
						</Menu.ItemGroup>
						<Menu.Item key="main3">文章</Menu.Item>
					</SubMenu>
					<Menu.Item key="find">找人/机构</Menu.Item>
					<Menu.Item key="main4">学院</Menu.Item>
					<Menu.Item key="main5">快活</Menu.Item>
					<Menu.Item key="material">正版素材</Menu.Item>
					<SubMenu title={<span className="submenu-title-wrapper">活动</span>}>
						<Menu.Item key="main6">电影季</Menu.Item>
						<Menu.Item key="main7">创作吧少年</Menu.Item>
						<Menu.Item key="main8">VEW VISION毕业季 </Menu.Item>
						<Menu.Item key="main9">更多</Menu.Item>
					</SubMenu>
					<SubMenu title={<span className="submenu-title-wrapper">更多</span>}>
						<Menu.Item key="main10">新片场影业</Menu.Item>
						<Menu.Item key="main11">新片场短视频</Menu.Item>
						<Menu.Item key="main12">新片场营销 </Menu.Item>
						<Menu.Item key="main13">下载App</Menu.Item>
					</SubMenu>
				</Menu>
				<RihgtHead headThis={this} />
			</div>
		)
	}
}


export default HomeHeader;