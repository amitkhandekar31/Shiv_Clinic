import React , { Component }	from 'react';
import $ from 'jquery';
import './Overview.css'
import Particles from 'react-particles-js';



 class Overview extends Component {
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
			<div className="col-lg-12 col-md-12 container2 noPad" id="container">
				<div className="navbar ">
					<div className="menu">
						<img src="/images/logo.png" />
						<div className="hamburger-menu" onClick={this.toggleClass.bind(this)}>
							<div className="bar"></div>
						</div>
					</div>
				</div>
				<div className="main-container ">
					<div className="col-lg-12 ovBgColor noPad">
						<img src="/images/wave-haikei10.svg" className="ovWave" />
					</div>
					<div className="col-lg-12 noPad bgCheck">
						<div className="col-lg-6 noPad">
							<h2 className="oHeader1">WELCOME TO </h2>
							<h2 className="oHeader2">SHIV CLINIC</h2>
							<p className="oHeader3">Shiv Clinic was launched with the vision of providing Superior Health and Preventive
						 care solutions at affordable prices.Shiv Clinic has been serving Mahud(b.k)
						  and its nearby areas for many years now.
						  Our clinic is committed to imaging excellence and patient care.
						  The good treatment for you is our prime task.</p>
						</div>
						<div className="col-lg-6">
						<img src="/images/flat-img4.png" className="imgProp1" />
						</div>
					</div>
				</div>
				{/*<div className="shadow one"></div>
								<div className="shadow two"></div>*/}
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
						</ul>
					</div>
			</div>
		);
	}
}

export default Overview;