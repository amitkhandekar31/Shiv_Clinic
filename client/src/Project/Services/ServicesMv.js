import React , { Component }	from 'react';
import $ from 'jquery';
import './Services.css';



 class ServicesMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	

	render() {
		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 smvBox1 noPad ">
					<h2 className="omv-h1">--- OUR SERVICES ---</h2>
					<img src="/images/blob-haikei3.svg" className="col-xs-12 col-sm-12 noPad" />
					<div className="col-xs-12 col-sm-12 smvBox2">
						<div className="col-xs-6 smvBox3">
							<img src="/images/flat-img2.png" className="col-xs-12 noPad" />
						</div>
						<div className="col-xs-6 noPad">
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/treatment.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Diagnosis and Treatment</h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/nutrition.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Health and Nutrition advice</h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/vaccine.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Vaccination & Nebulization</h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/medical-history.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Ordering of screening and Medical tests</h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/doctor.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Diagnosis and Treatment</h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/treatment.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Referrals to health specialist </h4>
								</div>
							</div>
							<div className="col-xs-12 noPad">
								<div className="col-xs-3 noPad infocardContainer_mv">
							    	<img src="/images/pediatrician.png" className="smvImg1"></img>
								</div>
								<div className="col-xs-9 noPad textbois_mv">
								    <h4 className="smv-h1">Pediatrician Visit</h4>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default ServicesMv;