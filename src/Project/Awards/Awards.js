import React , { Component }	from 'react';
import $ from 'jquery';
import './Awards.css';
import Particles from 'react-particles-js';



 class Awards extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	componentDidMount(){

	}
	toggleClass(){
		if($('#container').hasClass('active'))
	    {
	        $('#container').addClass('inActive').removeClass('active');
	        // console.log("if====")
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
				<div className="main-container aBgColor">
				<h2 className="awardH1 col-lg-12">AWARDS & ACHIEVEMENTS</h2>

					<Particles
					    params={{
						    "particles": {
						        "number": {
						            "value": 260,
						            "density": {
						                "enable": false
						            }
						        },
						        "size": {
						            "value": 3,
						            "random": true,
						            "anim": {
						                "speed": 4,
						                "size_min": 0.3
						            }
						        },
						        "line_linked": {
						            "enable": false
						        },
						        "move": {
						            "random": true,
						            "speed": 1,
						            "direction": "top",
						            "out_mode": "out"
						        }
						    },
						    "interactivity": {
						        "events": {
						            "onhover": {
						                "enable": true,
						                "mode": "bubble"
						            },
						            "onclick": {
						                "enable": true,
						                "mode": "repulse"
						            }
						        },
						        "modes": {
						            "bubble": {
						                "distance": 250,
						                "duration": 2,
						                "size": 0,
						                "opacity": 0
						            },
						            "repulse": {
						                "distance": 200,
						                "duration": 4
						            }
						        }
						    }
						}} />
			        <div class="containerAw">
						  <div class="carousel">
						    <div class="carousel__face"><img src="/images/certi1.jpg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi2.jpg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi3.jpg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi4.jpg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi5.jpeg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi6.jpeg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi9.jpeg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi11.jpeg" className="certiImg" /></div>
						    <div class="carousel__face"><img src="/images/certi13.jpg" className="certiImg" /></div>
						    
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

export default Awards;