import React , { Component }	from 'react';
import $ from 'jquery';
import './WorkTime.css';



 class WorkTimeMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	

	render() {
		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 wmvBox1 noPad ">
					<h2 className="omv-h1">--- WORKING TIME ---</h2>
					<img src="/images/blob-scene-haikei3.svg" className="col-xs-12 col-sm-12 noPad" />
					<div className="col-xs-12 col-sm-12 wmvBox2">
						<h2 className="wmv-h1">Opening Hours</h2>
						<div className="col-xs-5 noPad wmvBox3">
						<h3 className="col-xs-12 wmv-h2">MONDAY - SUNDAY</h3>
						<hr className="hrLineMv" / >
						<h4 className="wmv-h3">8.00 am - 01.30 pm</h4>
						<h4 className="wmv-h4">AND</h4>
						<h4 className="wmv-h5">3.00 pm - 09.00 pm</h4>
						</div>
						<div className="col-xs-7 noPad">
							<img src="/images/time1.png" className="col-xs-1 wmvImg" />
						</div>
					</div>
				</div>
				
			</div>
			);
	}
}

export default WorkTimeMv;