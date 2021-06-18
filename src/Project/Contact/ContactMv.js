import React , { Component }	from 'react';
import $ from 'jquery';
import './Contact.css';
import axios from 'axios';
import swal from 'sweetalert';

const formValid = formerrors=>{
  console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
  return valid;
  }
const clientnameRegex = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const emailRegex = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const clientmobileRegex = RegExp(/^[0-9][0-9]{9}$/);


 class ContactMv extends Component {
	constructor(){
		super();
		this.state = {
			firstName 	:'',
			email 	:'',
			number 	:'',
			message :'',
			formerrors :{
	          clientName  : " ",
	          clientEmail : " ",
	          clientMobile : "",
	        
	        },
		}
	}

	handleChange(event){
      event.preventDefault();

		  // this.setState({ [event.target.name]: event.target.value });
		const datatype = event.target.getAttribute('data-text');
        const {name,value} = event.target;
        const formerrors = this.state.formerrors;
      // console.log("datatype",datatype);
      switch (datatype){


      case 'clientName' : 
           formerrors.clientName = clientnameRegex.test(value)? '' : "Please enter valid name";
           break;

        case 'clientEmail' : 
          formerrors.clientEmail = emailRegex.test(value)? '' : "Please enter valid mail address";
          break;

        case 'clientMobile' : 
             formerrors.clientMobile = clientmobileRegex.test(value)? '' : "Please enter a valid phone number";
            break;
            
      default :
      break;

      }
      this.setState({ formerrors,
        [name]:value
      } );
	}

	isNumberKey(event)
	   {

	   var charCode = (event.which) ? event.which : event.keyCode

	   if (charCode > 31 && (charCode < 48 || charCode > 57)  && (charCode < 96 || charCode > 105))
	   {
	    event.preventDefault();
	      return false;
	    }
	    else{
	      return true;
	    }
	  }
    handleSubmit(event){

		event.preventDefault()

		 const formValues1 = {
	        "email"         : this.state.email ,
	        "subject"       : "Your message is sent successfully to Shiv Clinic",
	        "Text"          : "", 
	        "mail"          : 'Dear ' + this.state.firstName + ', <br/><br/>'+
	                          "<b>Your Mobile: </b>" + this.state.number + '<br/>'+
	                          "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
	                          "Your following message has been successfully delivered to the admin of Shiv Clinic.  We will get back to you shortly. <br/> <br/> " + 
	                          "===============================  <br/> <br/> " + 
	                          "<pre> " + this.state.message + "</pre>" + 
	                          " <br/> <br/> =============================== " + 
	                          "<br/><br/> Thank You, <br/> Support Team, <br/> Shiv Clinic " ,

	      };
	      if(formValid(this.state.formerrors)){
		        axios
		        .post('/.netlify/functions/server/api/form',formValues1)
		        .then((res)=>{
		                   if(res.status === 200){
		                    swal("Thank you for contacting us. We will get back to you shortly.")
		                    }
		                })
		                .catch((error)=>{
		                        console.log("error = ",error);
		                        
		                    })
		              }
		      else{
	                swal("Please enter mandatory fields", "", "warning");
	                console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
	              }
	              //==================================================================================
//    For Admin Email Message
//==================================================================================
    var adminEmail = "shivclinic83@gmail.com";

    const formValues2 = {
        "email"         : adminEmail ,
        "subject"       : "New query/feedback arrived from Website!",
        "text"          : "",
        "mail"          : 'Dear Admin, <br/>'+
                          "Following new query/feedback came from website! <br/> <br/> " + 
                          "============================  <br/> <br/> " + 
                          "<b>Client Name: </b>"   + this.state.firstName  + '<br/>'+
                          "<b>Client Mobile: </b>" + this.state.number + '<br/>'+
                          "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+

                          "<pre> " + this.state.message + "</pre>" + 
                          "<br/><br/> ============================ " + 
                          "<br/><br/> This is a system generated email! " ,

      };
      // console.log("notification",formValues2); 
      if(formValid(this.state.formerrors)){
        axios
        .post('/.netlify/functions/server/api/form',formValues2)
        .then((res)=>{
                  if(res.status === 200){
                    console.log("Mail Sent TO ADMIN successfully!")
                  }
                })
                .catch((error)=>{
                        console.log("error = ",error);
                        if(error.message === "Request failed with status code 401")
                        {
                             // swal("Your session is expired! Please login again.","", "error");
                           
                        }
                    })
              }else{
                swal("Please enter mandatory fields", "", "warning");
                console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
              }
/*--------------------------end---------------------*/
		this.setState({
			firstName: '',
			email : '',
			number : '',
			message : '',
		})
	}
	handleCancel(){
		this.setState({
			firstName:'',
			email:'',
			number:'',
			message:''
		},()=>{
			// alert('abc')
		})
	}
	

	render() {
    const {formerrors} = this.state;

		return (
			<div className="hidden-lg hidden-md">
				<div className="col-sm-12 col-xs-12 cmvBox1 noPad ">
					<h2 className="omv-h1">--- CONTACT ---</h2>
					<div className="col-xs-12 col-sm-12 cmvBox2">
						<div className="noPad col-xs-12">
							  <div className="containerCC ">
							    <div className="screen1 col-xs-12">
							      <div className="screen-header">
							        <div className="screen-header-left">
							          <div className="screen-header-button close"></div>
							          <div className="screen-header-button maximize"></div>
							          <div className="screen-header-button minimize"></div>
							        </div>
							        <div className="screen-header-right">
							          <div className="screen-header-ellipsis"></div>
							          <div className="screen-header-ellipsis"></div>
							          <div className="screen-header-ellipsis"></div>
							        </div>
							      </div>
							      <div className="screen-body">
							        <div className="screen-body-item left">
							          <div className="app-title">
							            <span className="CC2">CONTACT US</span>
							           
							          </div>
							          <div className="app-contact1">CONTACT INFO : +91 935 969 1016</div>
							        </div>
							        <div className="screen-body-item">
							          <div className="app-form">
							            <div className="app-form-group">
							              <input type='text' className="app-form-control" name="firstName" placeholder="NAME" data-text="clientName" value={this.state.firstName} onChange={this.handleChange.bind(this)}  />
							            	{this.state.formerrors.clientName &&(
					                            <span className="text-danger">{formerrors.clientName}</span> 
					                          )}
							            </div>
							            <div className="app-form-group">
							              <input type='email' className="app-form-control" name="email" placeholder="EMAIL" data-text="clientEmail" value={this.state.email} onChange={this.handleChange.bind(this)} />
							            	{this.state.formerrors.clientEmail &&(
					                            <span className="text-danger">{formerrors.clientEmail}</span> 
					                          )}
							            </div>
							            <div className="app-form-group">
							              <input type='text' className="app-form-control" name="number" placeholder="CONTACT NO" data-text="clientMobile" value={this.state.number} onKeyDown={this.isNumberKey.bind(this)}
  							 						min="0" maxLength="10" onChange={this.handleChange.bind(this)} />
							            	{this.state.formerrors.clientMobile &&(
					                            <span className="text-danger">{formerrors.clientMobile}</span> 
					                          )}
							            </div>
							            <div className="app-form-group message">
							              {/*<input type='text' className="app-form-control" name="message" placeholder="MESSAGE" value={this.state.message} onChange={this.handleChange.bind(this)} />*/}
							            	<textarea  className="col-lg-12 textBox noPad app-form-control" name="message" placeholder="MESSAGE" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
							            </div>
							            <div className="app-form-group buttons">
							              <button className="app-form-button" onClick={this.handleCancel.bind(this)}>CANCEL</button>
							              <button className="app-form-button" onClick={this.handleSubmit.bind(this)}>SEND</button>
							            </div>
							          </div>
							        </div>
							      </div>
							    </div>
							    
							  </div>
							</div>
					</div>
				</div>
				
			</div>
			);
	}
}

export default ContactMv;