import React , { Component }	from 'react';
import $ from 'jquery';
import './Overview.css'



 class OverviewMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	

	render() {
		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 omvBox1 noPad ">
					<h2 className="omv-h1">--- OVERVIEW ---</h2>
					<img src="/images/wave-haikei10.svg" className="col-xs-12 col-sm-12 noPad" />
					<div className="col-xs-12 col-sm-12 omvBox2">
						<div className="col-xs-5 noPad">
							<h2 className="omv-h2">WELCOME TO </h2>
							<h2 className="omv-h3">SHIV CLINIC</h2>
							<p className="omv-h4">Shiv Clinic was launched with the vision of providing Superior Health and Preventive
						 care solutions at affordable prices.Shiv Clinic has been serving Mahud(b.k)
						  and its nearby areas for many years now.
						  Our clinic is committed to imaging excellence and patient care.
						  The good treatment for you is our prime task.</p>
						</div>
						<div className="col-xs-7 noPad">
							<img src="/images/flat-img4.png" className="col-xs-12" />
						</div>
					</div>
				</div>
				
			</div>
			);
	}
}

export default OverviewMv;