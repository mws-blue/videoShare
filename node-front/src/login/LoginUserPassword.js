import React from "react";

class LoginUserPassword extends React.Component{
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
		return <input type="text" name="password" value={this.state.passWord} placeholder="六位数字密码" onChange={this.handleChange.bind(this)} />;
	}

}

export default LoginUserPassword;