import React , { Component }	from 'react';
import $ from 'jquery';
import './Services.css';



 class Services extends Component {
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
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container1" id="container">
				<div className="navbar ">
					<div className="menu">
						<img src="/images/logo.png" />
						<div className="hamburger-menu" onClick={this.toggleClass.bind(this)} title="Click here">
							<div className="bar"></div>
						</div>
					</div>
				</div>
				<div className="main-container sBgColor">
				<div className="col-lg-12 noPad">
					<img src="/images/blob-haikei3.svg" className="col-lg-12 noPad" />
				</div>
				<h2 className="serviceH1 col-lg-12">OUR SERVICES</h2>
					<div className="col-lg-12 serList">
						<div className="col-lg-6">
						<img className="sImg1" src="/images/flat-img2.png" />
						</div>
						<div className="col-lg-6">
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/treatment.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Diagnosis and Treatment</h4>
							  	</div>
							</div>
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/nutrition.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Health and Nutrition advice</h4>
							  	</div>
							</div>
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/vaccine.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Vaccination & Nebulization</h4>
							  	</div>
							</div>
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/medical-history.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Ordering of screening and Medical tests </h4>
							  	</div>
							</div>
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/doctor.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Referrals to specialist health professionals</h4>
							  	</div>
							</div>
							<div class="infocardContainer">
							  	<div id="main">
							    	<img src="/images/pediatrician.png"></img>
							  	</div>
							  	<div id="textbois">
								    <h4>Pediatrician Visit</h4>
							  	</div>
							</div>
						</div>
					</div>
				</div>
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
		);
	}
}

export default Services;