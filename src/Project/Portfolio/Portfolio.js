import React , { Component }	from 'react';
import $ from 'jquery';
import './Portfolio.css';
import Particles from 'react-particles-js';



 class Portfolio extends Component {
	constructor(){
		super();
		this.state = {

		      showComponent: true
		
		}
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
	       // console.log("else")
	    }
	}
	 handleChange = () => {
	    this.setState({
	      showComponent: !this.state.showComponent,
	    },()=>{
	    	this.hideClass();
	    });
	  }

	hideClass(){
		// if($('#hideDiv').hasClass('hideDp'))
	 //    {
	 //        $('#hideDiv').addClass('showDp').removeClass('hideDp');
	 //        console.log("remove hideDiv====")
	 //    }
	 //    else
	 //    {
	 //       $('#hideDiv').addClass('hideDp').removeClass('showDp');
	 //       console.log("add hideDiv")
	 //    }
	 if($('#hideDiv').hasClass('hideDp')){
	 	 $('#hideDiv').removeClass('hideDp')
	 	// console.log('if')

	 }
	 else{
	 	 $('#hideDiv').addClass('hideDp')
	 	// console.log('else')

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
				<div className="main-container bgColor">
					<div className="col-lg-12 noPad">
						<img src="/images/blob-haikei7.svg" className="col-lg-12 noPad pfBlob1" />
					</div>
					<div className="col-lg-12 pfSection">
					<input type="radio" id="trigger1" name="slider" className="radioBtn" onChange={this.handleChange.bind(this)} checked={!this.state.showComponent}  />
						<label for="trigger1" className="trigger1"></label>
						<div class="slide ">
							<div className="col-lg-12 ">
								<div className="col-lg-4 bg1">
									<img src="/images/d3.png" className="pImg2 noPad" />
								</div>
								<div className="col-lg-6 bg2">
									{/*<h3 className="pfHeader1">HELLO, I'M</h3>*/}
									<h2 className="pfHeader1">DR. OMKARESHWAR KHANDEKAR </h2>
									<h3 className="pfHeader2">B.H.M.S | General Practitioner</h3>
									<span className="pfHeader3">He is a Homoeopath and General Practitioner in Mahud(B.K) Tal:Sangola.
													 <br/>He completed BHMS from Sawkar Homoeopathic Medical College, Satara in 2012
													 <br/>He has strong understanding of current principles methods, and procedures for the delivery of medical evaluation, diagnosis, and patient treatment.
													 His aim is to provide complete in holistic treatment to every person in a family, also to provide diet & lifestyle education which is need of our society right now.
													 </span>
								</div>
								
							</div>
						</div>

						<input type="radio" id="trigger2" name="slider" className="radioBtn"  onChange={this.handleChange.bind(this)} checked={this.state.showComponent} />
						<label for="trigger2" className="trigger1 trigger2"  ></label>
						<div class="slide ">
							<div className="col-lg-12 " id="hideDiv">
								<div className="col-lg-4 bg1">
									<img
							              src="/images/d1.png"
							              alt=""
							              className="pImg1"
							        />
								</div>
								<div className="col-lg-6 bg2">
									{/*<h3 className="pfHeader1">HELLO, I'M</h3>*/}
									<h2 className="pfHeader1">DR. VILAS KHANDEKAR </h2>
									<h3 className="pfHeader2">B.A.M.S | General Physician</h3>
									<span className="pfHeader3">He is a General Physician and General Practitioner in Mahud(B.K) Tal:Sangola.
													<br/>He also the Founding member of Mahud Multispeciality Hospital & ICU.
													<br/>He completed BAMS from Tilak Ayurved Mahavidyalaya, Pune in 1981.
													 <br/>Over the 37 years of experience, he is one of the best general medical practitioners in the field.
													 His areas of expertise includes diagnosis,prevention and treatment of health conditions affecting babies,children & adolescents.
													 He believes in promoting health awareness and healthy lifestyle.</span>
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

export default Portfolio;