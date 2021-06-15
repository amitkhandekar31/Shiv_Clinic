import React , { Component }	from 'react';
import Banner 			from './Banner/Banner.js'
import BannerMv 		from './Banner/BannerMv.js';
import OverviewMv 		from './Overview/OverviewMv.js';
import './Homepage.css'


const Loading =()=>
  <div className="loading">
    <div class="loader col-lg-12 col-xs-12 col-sm-12">
		<div class="loader-inner">
			<div class="loader-line-wrap">
				<div class="loader-line"></div>
			</div>
			<div class="loader-line-wrap">
				<div class="loader-line"></div>
			</div>
			<div class="loader-line-wrap">
				<div class="loader-line"></div>
			</div>
			<div class="loader-line-wrap">
				<div class="loader-line"></div>
			</div>
			<div class="loader-line-wrap">
				<div class="loader-line"></div>
			</div>
		</div>
	<h2 className="ldHeader col-lg-12 col-xs-12 col-md-12 col-sm-12">WELCOME TO SHIV CLINIC</h2>
	</div>
  </div> 

 class HomePage extends Component {
	constructor(){
		super();
		this.state = {
    		loading: true,
		}
	}

	componentDidMount(){
    	this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 3300);
	}
	componentWillUnmount() {
	     clearTimeout(this.isLoading);
	}
	  
	timer = () => setTimeout(()=>{
	    this.setState({loading: false})
	}, 2300);
	
	render() {
    const {loading} = this.state;

		return (
			loading ? (<Loading />)
			:
			<div>
				<div className="">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 noPad">
						<Banner />
					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;