import React from "react";
import "./nvideo.css";
import axios from 'axios';
import $ from 'jquery'
class Nvideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a:1,
            arr: []
        }
    }
    componentDidMount() {
        const _this=this;
        axios.get('http://localhost:3000/getImg')
            .then(function (response) {
                let arr=response.data
                for(let i=0; i<arr.length; i++){
                    $("#lists").append(`<img src=${response.data[i].imgurl}/>`)
                }
                
                
                _this.setState({
                    arr:response.data,
                  });
   
                   console.log(_this.state.arr)

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (<div className="content">
            <div id="lists">
             
            </div>



        </div>)
    }

}

export default Nvideo;