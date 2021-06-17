import React , { Component }	from 'react';
import $ from 'jquery';
import './Awards.css';
import Particles from 'react-particles-js';



 class AwardsMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	componentDidMount(){
		$("#slideshow > div:gt(0)").hide();

		setInterval(function() {
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		}, 4000);
	}
	
	render() {
		return (

			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 amvBox1 noPad ">
					<h2 className="omv-h1">--- AWARDS ---</h2>
					<div className="col-xs-12 col-sm-12 amvBox2">
						<div id="slideshow">
						   <div>
						     <img src="/images/certi1.jpg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi2.jpg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi3.jpg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi4.jpg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi5.jpeg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi6.jpeg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi13.jpg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi9.jpeg" className="amvImg col-xs-12" />
						   </div>
						   <div>
						     <img src="/images/certi11.jpeg" className="amvImg col-xs-12" />
						   </div>
						   
						</div>
					</div>
				</div>
			</div>
			
			);
	}
}

export default AwardsMv;