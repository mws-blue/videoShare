import React from "react";
import { Input } from 'antd';
class RegisterUserPassword extends React.Component{
	constructor(){
		super();
		this.state = {
			passWord:""
		}
	}

	handleChange(e){
		this.setState({passWord:e.target.value})
		this.props.changeInfo.changeInfos(e);
	}

	render(){
		let that = this;
		return (
		<input type="password" name="password" value={this.state.passWord} placeholder="密码" onChange={this.handleChange.bind(this)} />
	    // <Input.Password style={{maxLength:300,height:35}} name="password" value={that.state.passWord} placeholder="密码" onChange={this.handleChange.bind(that)} />
	    )
	}

}

export default RegisterUserPassword;