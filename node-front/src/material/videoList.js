import React from "react";
import "./videoList.css";
import Pondmusic from "./pondmusic.js"
import Nvideo from "./nvideo.js";
class VideoList extends React.Component {
   constructor(){
       super()
       this.state={
           block:"block",
           none:"none",
           red:"red",
           white:"white",
            key:1,
            current: 'nvideo',
           title:[
               {title:"pond5视频",name:"video"}
               ,{title:"国内视频",name:"nvideo"}
               ,{title:"pond5音乐",name:"pondmusic"}
               ,{title:"国内音乐",name:"nmusic"}
               ,{title:"图片",name:"imgS"}
               ,{title:"矢量/插画",name:"cpointer"}
               ,{title:"AE模板",name:"AE"}
               
           ]
       }
   }
   ion(a){
   this.setState({key:a})     
   }
 
   componentDidMount() {
   
    }
   render(){
       return(
           <div className="main-wrapper">

<div className="page-title">
    <div className="allwork-title">
        <div id="resource-tab">
            <ul className="resourseul" >
            <li id="Uli"  onClick={this.ion.bind(this,1)}  className={ this.state.key==1 ?this.state.red :this.state.white } >pond5视频</li>
            <li id="Uli" onClick={this.ion.bind(this,2)}  className={ this.state.key==2 ?this.state.red :this.state.white }>国内视频</li>
            <li id="Uli"  onClick={this.ion.bind(this,3)}  className={ this.state.key==3 ?this.state.red :this.state.white } >pond5音乐</li>
            <li id="Uli"  onClick={this.ion.bind(this,4)}  className={ this.state.key==4 ?this.state.red :this.state.white } >图片</li>
            <li id="Uli"  onClick={this.ion.bind(this,5)}  className={ this.state.key==5 ?this.state.red :this.state.white }>矢量/插画</li>
            <li id="Uli"  onClick={this.ion.bind(this,6)}  className={ this.state.key==6 ?this.state.red :this.state.white }>AE模板</li>
            </ul>
        </div>
    </div>
    <div className="changecontent">
    <div className={ this.state.key==1 ?this.state.block :this.state.none }><Nvideo/></div>
    <div  className={ this.state.key==2 ?this.state.block :this.state.none }><Pondmusic/></div>
    <div></div>
</div>
</div>



           </div>
       )
   }
}
export default VideoList;