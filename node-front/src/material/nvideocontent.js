import React from "react";
import "./nvideo.css";


class Nvideocontent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgurl: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        let a=null;
        for(let i=0;i<nextProps.length;i++){
            a = nextProps[i];
        }
    }
    render() {
        return (
            <div></div>

            //     this.props.arr.map((arr,i)=>{
            //     return (<img src={arr.imgurl} alt=""/>)       
            // })
        )
    }

} export default Nvideocontent;