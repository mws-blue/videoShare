import React from 'react';
import './App.css';
import { Layout } from 'antd';

import HomeHeader from "./home/HomeHeader";
import HomeContent from "./home/HomeContent";

const { Header, Content } = Layout;

class App extends React.Component {
  constructor(){
    super();
    this.begin = (localStorage.getItem("userInfo")!==null && localStorage.getItem("userInfo")!=="")?"content-layui":"fixedTop"
    this.state={
      page:"main",
      setclass:this.begin,
      item:""
    }
    console.log("用户信息")
    console.log(localStorage.getItem("userInfo"))
  }

  changePage(mypage,item){
   
    this.setState({page:mypage,item:item})
  }

  changeTop(a){
    this.setState({setclass:a})
  }

  render(){
    return (
        <Layout className="project-content">
          <Header className="head-layui">
            <HomeHeader change={this}/>
          </Header>
          <Content style={{width:"100vw"}}  className={this.state.setclass}>
            <HomeContent appThis={this} currentPage={this.state.page}/>
          </Content>
        </Layout>
    )
  }
}

export default App;
