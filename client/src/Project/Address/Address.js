import React , { Component }	from 'react';
import $ from 'jquery';
import './Address.css';



 class Address extends Component {
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
						<div className="hamburger-menu" onClick={this.toggleClass.bind(this)}>
							<div className="bar"></div>
						</div>
					</div>
				</div>
				<div className="main-container adBox1">
					{/*<div className="col-lg-12 noPad  ">
						{<img src="/images/blob-haikei3.svg" className="col-lg-12 noPad" />}
					</div>*/}
					<img src="/images/blob-haikei6.svg" className="col-lg-12 noPad addBlob" />
					<img src="/images/location1.png" className="col-lg-12 noPad addImg" />
					<h2 className="addHeader1">LOCATION</h2>
					<div className="col-lg-4 adBox2">
						<h3 className="addHeader2">SHIV CLINIC</h3>
						<hr className="addHr" />
						<h4 className="addHeader3">A/p Mahud (b.k)</h4>
						<h4 className="addHeader3">near Shivaji Vidyalaya,</h4>
						<h4 className="addHeader3">Pandharpur - Atpadi road </h4>
						<h4 className="addHeader3">Pincode: 413306</h4>
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

export default Address;