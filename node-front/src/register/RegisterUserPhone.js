import React from "react";
import { Input, Select,Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="+86" style={{ width: 90 }}>
    <Option value="香港+852">香港+852</Option>
    <Option value="澳门+853">澳门+853</Option>
	<Option value="台湾+886">台湾+886</Option>
  </Select>
);

class RegisterUserPhone extends React.Component{
	constructor(){
		super();
		this.state = {
			phone:""
		}
	}

	handleChange(e){
		this.setState({phone:e.target.value})
		this.props.changeInfo.changeInfos(e);
	}

	render(){
		return (	
		<input type="text" name="phone" value={this.state.phone} placeholder="7-11位" onChange={this.handleChange.bind(this)} />
		// <div style={{ marginBottom: 16,marginTop:18 }}>
		// 		<Input style={{maxLength:300,height:40}} addonBefore={selectBefore} defaultValue="手机号" onChange={this.handleChange.bind(this)} />
		// </div>
		)
	}
}

export default RegisterUserPhone;