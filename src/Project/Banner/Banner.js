import React , { Component }	from 'react';
import $ from 'jquery';
import './Banner.css'
import BannerMv from '../Banner/BannerMv.js';
import OverviewMv from '../Overview/OverviewMv.js';
import PortfolioMv from '../Portfolio/PortfolioMv.js';
import ServicesMv from '../Services/ServicesMv.js';
import AwardsMv from '../Awards/AwardsMv.js';
import WorkTimeMv from '../WorkTime/WorkTimeMv.js';
import AddressMv from '../Address/AddressMv.js';
import ContactMv from '../Contact/ContactMv.js';


 class Banner extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	toggleClass(){
		if($('#container').hasClass('active'))
	    {
	        $('#container').addClass('inActive').removeClass('active');
	        console.log("if====")
	    }
	    else
	    {
	       $('#container').addClass('active').removeClass('inActive');
	       console.log("else")
	    }
	}
	
	render() {
		return (
				<div>
					<div className="container2 col-lg-12 col-md-12 hidden-sm hidden-xs noPad" id="container">
						<div className="navbar ">
							<div className="menu">
								{/*<h3 className="logo">Brand<span>Name</span></h3>*/}
								<img src="/images/logo.png" />
								<div className="hamburger-menu" onClick={this.toggleClass.bind(this)} title="Click here">
									<div className="bar"></div>
								</div>
							</div>
						</div>
						<div className="main-container col-lg-12 col-md-12 noPad">
							<div className="col-lg-12 col-md-12 noPad">
								<img src="/images/banner8.jpg" className="imgProp" />
								<h1 className="header1">We Care </h1>
								<h1 className="header2">About Your Health </h1>
								<span className="header3">EVERYDAY WE BRING HOPE AND SMILE TO THE PATIENT WE SERVE</span>
								<div className="iconB1">
									<i className="fa fa-user-md col-lg-12 faIcon1 pointer"  style={{color: "#337AB7"}} title="View Profile"/>
								</div>
								<div className="iconB2">
									<i className="fa fa-heartbeat col-lg-12 faIcon2 pointer"  style={{color: "#ef4430"}} title="View Profile"/>
								</div>
								<div className="iconB3">
									<i className="fa fa-stethoscope col-lg-12 faIcon3 pointer"  style={{color: "#337AB7"}} title="View Profile"/>
								</div>
								<button className="btn1 " onClick={this.toggleClass.bind(this)} >Get Started</button>
							</div>
						</div>
						<div className="shadow one"></div>
						<div className="shadow two"></div>
						<div className="links">
							<ul>
								<li>
									<a href="/">HOME</a>
								</li>
								<li>
									<a href="/Overview">OVERVIEW</a>
								</li>
								<li>
									<a href="/Portfolio">PORTFOLIO</a>
								</li>
								<li>
									<a href="/Services">SERVICES</a>
								</li>
								<li>
									<a href="/Awards">AWARDS</a>
								</li>
								
								<li>
									<a href="/WorkTime">OPENING HOURS</a>
								</li>
								<li>
									<a href="/Address">LOCATION</a>
								</li>
								<li>
									<a href="/Contact">CONTACT US</a>
								</li>
							</ul>
						</div>
					
					</div>
			{/*-----------mobile view--------------*/}
					<div className="hidden-lg hidden-md">
						<div className="col-sm-12 noPad">
							<div className="col-sm-12 col-xs-12 noPad">
								<BannerMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
								<OverviewMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
								<PortfolioMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
{								<ServicesMv />}
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
{								<AwardsMv />}
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
								<WorkTimeMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
								<AddressMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad">
								<ContactMv />
							</div>
							<div className="col-sm-12 col-xs-12 noPad bmvBox3">
								<h3 className="footerH1 col-xs-12 col-sm-12 noPad">Design & Developed by Amit Khandekar</h3>
							</div>
							
							
						</div>
					</div>
				</div>

		);
	}
}

export default Banner;