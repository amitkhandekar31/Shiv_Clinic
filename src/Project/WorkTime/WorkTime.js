import React , { Component }	from 'react';
import $ from 'jquery';
import './WorkTime.css';

 class WorkTime extends Component {
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
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container2" id="container">
				<div className="navbar ">
					<div className="menu">
						<img src="/images/logo.png" />
						<div className="hamburger-menu" onClick={this.toggleClass.bind(this)}>
							<div className="bar"></div>
						</div>
					</div>
				</div>
				<div className="main-container">
					<div className="col-lg-12 noPad conBlob">
						<img src="/images/blob-scene-haikei3.svg" className="col-lg-12 noPad " />
					</div>
					<div className="col-lg-12 noPad">
						<img src="/images/time1.png" className="col-lg-12 noPad conImg" />
					</div>
					<h2 className="conHeader1">Opening Hours</h2>
					<div className="col-lg-4 noPad conHeader2">
						<h3 className="conHeader3">MONDAY - SUNDAY</h3>
						<hr className="hrLine" / >
						<h4 className="conHeader4">8.00 am - 01.30 pm</h4>
						<h4 className="conHeader5">AND</h4>
						<h4 className="conHeader6">3.00 pm - 09.00 pm</h4>

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
						</ul>
					</div>
			</div>
		);
	}
}

export default WorkTime;