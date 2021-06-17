import React , { Component }	from 'react';
import $ from 'jquery';
import './Address.css';



 class AddressMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	

	render() {
		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 admvBox1 noPad ">
					<h2 className="omv-h1">--- ADDRESS ---</h2>
					<img src="/images/blob-haikei6.svg" className="col-xs-12 col-sm-12 noPad" style={{position:'relative',height:'100%'}} />
					<div className="col-xs-12 col-sm-12 admvBox2">
						<h2 className="admv-h1">LOCATION</h2>
						<div className="col-xs-7 noPad">
							{<img src="/images/location1.png" className="admvImg" />}
						</div>
						<div className="col-xs-5 noPad admvBox3">
							<h3 className="admv-h2 col-xs-12 noPad">SHIV CLINIC</h3>
							<hr className="addHr" />
							<h4 className="admv-h3 col-xs-12 noPad">A/p Mahud (b.k)</h4>
							<h4 className="admv-h3 col-xs-12 noPad">near Shivaji Vidyalaya,</h4>
							<h4 className="admv-h3 col-xs-12 noPad">Pandharpur - Atpadi road </h4>
							<h4 className="admv-h3 col-xs-12 noPad">Pincode: 413306</h4>
						</div>
						
					</div>
				</div>
				
			</div>
			);
	}
}

export default AddressMv;