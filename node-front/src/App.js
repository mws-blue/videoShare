import React from 'react';
import './App.css';
import { Layout } from 'antd';

import HomeHeader from "./home/HomeHeader";
import HomeContent from "./home/HomeContent";

const { Header, Content } = Layout;

class App extends React.Component {
  constructor(){
    super();
    this.state={
      page:"main"
    }
  }

  changePage(page){
    this.setState({page:page})
  }

  render(){
    return (
      <div>
        <Layout>
          <Header style={{backgroundColor:"#7DBCEA"}}>
            <HomeHeader change={this}/>
          </Header>
          <Content style={{height:"100vh"}}>
            <HomeContent currentPage={this.state.page}/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;
