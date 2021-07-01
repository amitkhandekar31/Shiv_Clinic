import React , { Component }	from 'react';
import $ from 'jquery';
import './Portfolio.css'



 class PortfolioMv extends Component {
	constructor(){
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 pmvBox1 noPad ">
					<h2 className="omv-h1">--- PORTFOLIO ---</h2>
					<img src="/images/blob-haikei7.svg" className="col-xs-12 col-sm-12 noPad" />
					<div className="col-xs-12 col-sm-12 omvBox2">
						<div className="col-xs-6 pmvDiv1">
							<img src="/images/06.png" className="col-xs-12 noPad pmvImg1" />
						</div>
						<div className="col-xs-6 noPad pmvDiv2">
							<span className="pmv-h1 col-xs-12 noPad">DR. VILAS KHANDEKAR </span>
							<span className="pmv-h2 col-xs-12 noPad">B.A.M.S | General Physician</span>
							<span className="pmv-h3 col-xs-12 noPad">He is a General Physician and General Practitioner in Mahud(B.K) Tal:Sangola.
							He also the Founding member of Mahud Multispeciality ICU.He completed BAMS from Tilak Ayurved Mahavidyalaya, Pune in 1981.
								 Over the 37 years of experience, he is one of the best general medical practitioners in the field.
								 His areas of expertise includes diagnosis,prevention and treatment of health conditions affecting babies,children & adolescents.
								 He believes in promoting health awareness and healthy lifestyle.
							</span>
						</div>
					</div>
					<hr className="hrLine1 " / >
					<img src="/images/blob-haikei7.svg" className="col-xs-12 col-sm-12 noPad pmv-blob1" />

					<div className="col-xs-12 col-sm-12 pmvBox2">
						
						<div className="col-xs-6 noPad pmvDiv4">
							<span className="pmv-h1 col-xs-12 noPad">DR. OMKAR KHANDEKAR  </span>
							<span className="pmv-h2 col-xs-12 noPad">B.H.M.S | General Practitioner</span>
							<span className="pmv-h3 col-xs-12 noPad">He is a Homoeopath and General Practitioner in Mahud(B.K).
								He completed BHMS from Sawkar Homoeopathic Medical College, Satara in 2013.
								He has strong understanding of current principles methods, and procedures for the delivery of medical evaluation, diagnosis, and patient treatment.
								His aim is to provide complete in holistic treatment to every person in a family, also to provide diet & lifestyle education which is need of our society right now.
							</span>
						</div>
						<div className="col-xs-6 pmvDiv3">
							<img src="/images/051.png" className="col-xs-12 noPad pmvImg2 " />
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default PortfolioMv;