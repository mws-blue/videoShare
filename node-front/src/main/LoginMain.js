import React from "react";
import { Carousel } from 'antd';

import "./LoginMain.css";

class LoginMain extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Carousel className="home-lunbo" autoplay>
					<div className="item-lunbo">
						<div className="first-lunbo"><img className="first-demo" src=" https://cs.xinpianchang.com/uploadfile/banner/2019/09/23/5d88b8665a634.jpg@720w_200h_50-20bl_1e_1c"/>
						     <div className="sencod-lunbo"><img className="second-demo" src="https://cs.xinpianchang.com/uploadfile/banner/2019/09/23/5d88b8665a634.jpg@2280w_800h_1e_1c"/></div>
						</div>
					</div>
					<div className="item-lunbo">
						<div className="first-lunbo"><img className="first-demo" src=" https://cs.xinpianchang.com/uploadfile/banner/2020/03/21/5e757e37e3540.png@720w_200h_50-20bl_1e_1c"/>
						     <div className="sencod-lunbo"><img className="second-demo" src="https://cs.xinpianchang.com/uploadfile/banner/2020/03/21/5e757e37e3540.png@2280w_800h_1e_1c"/></div>
						</div>
					</div>
					<div className="item-lunbo">
						<div className="first-lunbo"><img className="first-demo" src=" https://cs.xinpianchang.com/uploadfile/banner/2020/03/27/5e7d6a4330e0b.jpg@720w_200h_50-20bl_1e_1c"/>
						     <div className="sencod-lunbo"><img className="second-demo" src="https://cs.xinpianchang.com/uploadfile/banner/2020/03/27/5e7d6a4330e0b.jpg@2280w_800h_1e_1c"/></div>
						</div>
					</div>
					<div className="item-lunbo">
						<div className="first-lunbo"><img className="first-demo" src=" https://cs.xinpianchang.com/uploadfile/banner/2020/03/20/5e743b9fae97d.png@720w_200h_50-20bl_1e_1c"/>
						     <div className="sencod-lunbo"><img className="second-demo" src="https://cs.xinpianchang.com/uploadfile/banner/2020/03/20/5e743b9fae97d.png@2280w_800h_1e_1c"/></div>
						</div>
					</div>	
				</Carousel>
				<div className="home-contain">
                    <div className="extension-wrap">
                         <ul>
							 <li>
								 <a href="https://edu.xinpianchang.com/course/244?from=advertise&subjectID=209&channel1=xpcweb&channel2=xpcactivity&index=1">
									 <img src="//oss-xpc6.xpccdn.com/default/30c3CLSEaBTzVF7rlCfATMD575D2TnvrJ40kMWM1.jpeg@424w_320h_1e_1c"/></a>
							 </li>
							 <li>
								 <a href="https://edu.xinpianchang.com/subject/193?from=xpcactivity&index=2">
									 <img src="//oss-xpc6.xpccdn.com/default/1YMVHmeoCZq8MU3lhFGXkruysLPsTIW7Vhk3uIyX.jpeg@424w_320h_1e_1c"/></a>
							 </li>
							 <li>
								 <a href="https://edu.xinpianchang.com/course/149?from=advertise&subjectID=135&channel1=xpcweb&channel2=xpcactivity&index=3">
									 <img src="//oss-xpc6.xpccdn.com/default/WSdFuuNXFMfv9SNBU0iXxLG3sHuGzUQeis0XMjZa.jpeg@424w_320h_1e_1c"/>
								 </a>
							 </li>
							 <li>
								 <a href="https://resource.xinpianchang.com?from=xpcactivity&index=4">
									 <img src="//oss-xpc6.xpccdn.com/default/B4uUMAI6l5CyREZaecNPTDGttq674WtFSfq3jmHr.jpeg@424w_320h_1e_1c"/>
								 </a>
							 </li>
							 <li>
								 <a href="https://edu.xinpianchang.com/subject/172?from=advertise&subjectID=172&channel1=xpcweb&channel2=xpcactivity&index=5">
									 <img src="//oss-xpc6.xpccdn.com/default/ScR90pie93MyUTgdMJ5qcvRTi8yQHD0haQvYGpmd.jpeg@424w_320h_1e_1c"/>
								 </a>
							 </li>
						 </ul>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginMain;