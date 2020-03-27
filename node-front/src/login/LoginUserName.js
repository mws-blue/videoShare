import React from "react";

class LoginUserName extends React.Component{
	constructor(){
		super();
		this.state = {
			userName:""
		}
	}

	handleChange(e){
		this.setState({userName:e.target.value})
		this.props.changeInfo.changeInfos(e);
	}

	render(){
		return <input type="text" name="username" value={this.state.userName} placeholder="不能包含特殊字符" onChange={this.handleChange.bind(this)} />;
	}
}

export default LoginUserName;