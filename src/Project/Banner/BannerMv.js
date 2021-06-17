import React , { Component }	from 'react';
import './Banner.css'


 class BannerMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	
	
	render() {
		return (
			<div className="col-sm-12 col-xs-12 bmvBox1 noPad">
				<img src="/images/logo.png" className="mvLogo col-xs-8" />
				<img src="/images/banner8.jpg" className="col-sm-12 col-xs-12 noPad bmvImg1" />
				<div className="col-xs-9 bmvBox2">
					<h1 className="bmv-header1">We Care </h1>
					<h1 className="bmv-header2">About Your Health </h1>
					<span className="bmv-header3">EVERYDAY WE BRING HOPE AND SMILE TO THE PATIENT WE SERVE</span>
					<div className="bmv-iconB1">
						<i className="fa fa-user-md col-lg-12 faIconMv1 pointer"  style={{color: "#337AB7"}} title="View Profile"/>
					</div>
					<div className="bmv-iconB2">
						<i className="fa fa-heartbeat col-lg-12 faIconMv2 pointer"  style={{color: "#ef4430"}} title="View Profile"/>
					</div>
					<div className="bmv-iconB3">
						<i className="fa fa-stethoscope col-lg-12 faIconMv3 pointer"  style={{color: "#337AB7"}} title="View Profile"/>
					</div>
				</div>
			</div>
			);
	}
}

export default BannerMv;