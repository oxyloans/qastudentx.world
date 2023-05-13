import React from 'react';
// Import Logo
import Logo from '../../assets/img/removewhite.png';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
// Import Bootstrap
import { Button,Alert,Modal } from "react-bootstrap";
import axios from 'axios';
import { BASE_URL,Status,GOOGLE_AUTH_URL,BASE_URLS} from '../../../SocialLink';
import { Redirect,useHistory,Link } from 'react-router-dom';


	class Register extends React.Component{
	constructor(props) {
	  super(props) 
	  this.state = {
		 fname:'',
		 lname:'',
		 email: '',
		 number:'',
			OTP:"",
			mobileOtpSession:"",
		 password:'',
		 gender:'',
		 error:'',
		 fname_error:'',
		 lname_error:'',
		 email_error:'',
		 number_error:'',
		 password_error:'',
			otperror:'',
			loading:false,
			loading1:false,
			show:false,
			show1:false,
			hide:false,
			isSubmitting:false,

	  }
			
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.state.isSubmitting(true)
		console.log(this.state);
	}


	handleOnchangefName(event){
		this.setState({
			fname:event.target.value
		})
		this.setState({
			fname_error:""
		})
		this.setState({loading:false})
	}

	handleOnchangelName(event){
		this.setState({
			lname:event.target.value
		})
		this.setState({
			lname_error:""
		})
		this.setState({loading:false})
	}

	handleOnchangeemail(event){
		this.setState({
			email:event.target.value
		})
		this.setState({
			email_error:""
		})
		this.setState({loading:false})
	}

	handleOnchangenumber(event){
		this.setState({
			number:event.target.value
		})
		this.setState({
			number_error:""
		})
		this.setState({loading:false})
	}

	handleOnchangepassword(event){
		this.setState({
			password:event.target.value
		})
		this.setState({
			password_error:""
		})
		this.setState({loading:false})
	}

handleOnchangegender(event) {
		this.setState({
			gender: event.target.value
		});
		this.setState({loading:false})
	  }	

			handleOnchangeOTP(){
				console.log("OTP"+event.target.value);
				this.setState({
					OTP: event.target.value
				});
				this.setState({loading:false})
			}

			otpValidation(){
				if(this.state.number < 6 ){
					this.setState({
						otperror:"OTP Number should be 6 digits"
					})
					this.setState({loading:!this.state.loading})
					return false;
				}
				return true;
			}


	  emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                email_error: "Email is not valid"
            });
												this.setState({loading:!this.state.loading})
            return false;
        }
        return true;
    }



	numberValidation(){
		if(this.state.number.length<10 ){
			this.setState({
				number_error:"Mobile Number should be 10 digits"
			})
			this.setState({loading:!this.state.loading})
			return false;
		}
		return true;
	}

	passwordValidation(){
		if(this.state.number.length<8 ){
			this.setState({
				password_error:"Password should have minimum 8 charcters/numbers/special Characters"
			})
			this.setState({loading:!this.state.loading})
			return false;
		}
		return true;
	}

	firstnameValidation(){
		if(this.state.fname==""){
			this.setState({
				fname_error:"First Name should not be empty"
			})
		this.setState({loading:!this.state.loading})
			return false;
		}
		return true;
	}

	lastnameValidation(){
		if(this.state.lname==""){
			this.setState({
				lname_error:"Last Name should be empty"
			})
		this.setState({loading:!this.state.loading})
			return false;
		}
		return true;
	}

	sendOtp(){
		this.setState({loading1:true})
			
		if(this.numberValidation()){
			this.setState();
		}

	axios({
		method: 'post',
		url: BASE_URL+"/auth-service/user/send-mobile-otp",
		data:{
			"mobileNumber":this.state.number
		},
		})
.then((response)=>{
					console.log(response.data.mobileOtpSession);
					this.setState({mobileOtpSession:response.data.mobileOtpSession})
							this.setState({loading1:false})
							this.setState({hide:true})
					})
.catch((error)=> {
		console.log(error.response);
		// this.setState({showerror:true})
		this.setState({loading1:false})
})	
this.setState({loading1:false}) 
}



 	submitfunction(){
			this.setState({loading:!this.state.loading})
	if(this.emailValidation()){
		this.setState();
	}
	 if(this.numberValidation()){
		this.setState();
	}
	if(this.passwordValidation()){
		this.setState();
	}
	if(this.firstnameValidation()){
		this.setState();
	}
	if(this.lastnameValidation()){
		this.setState();
	}
	if(this.otpValidation()){
		this.setState();
	}
	var data={
		alternativeMobile: this.state.number,
		email: this.state.email,
		firstName: this.state.fname,
		gender: this.state.gender,
		lastName: this.state.lname,
		middleName: "",
		mobileOtp: this.state.OTP,
  otpSession: this.state.mobileOtpSession,
		mobileNumber: this.state.number,
		password: this.state.password,
		profileImage: "",
		proofNumber: "",
		proofPath: "",
		roleId: "784953ca-ee52-49ca-ad7d-3848c8b791fd"
	  }
	  var postData=JSON.stringify(data)
	axios({
		method: 'post',
		url: BASE_URL+"/auth-service/auth/sign-up",
		data:data
			})
	.then((response)=>{
				if(response.status==201 || response.status==200){
					this.setState({show1:true})
				}
				this.setState({loading:!this.state.loading})
		})
	.catch((error)=> {
				console.log(error.response);
				this.setState({show:true})
				this.setState({loading:!this.state.loading})
		})	
	}

	  

    render() {
					
					const {show} = this.state;
					const {show1} = this.state;
        return (
            <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
																          <Alert show={show} variant="danger">
																												<Alert.Heading>OOPS!!!!</Alert.Heading>
																														<p>
																															Mobile number/email already registered, Please register with another mobile number / email 
																														</p>
																													<hr />
																												<div className="d-flex justify-content-end">
																															<Button onClick={() => this.setState({show:false})} variant="danger">
																																Close
																														</Button>
																											</div>
																									</Alert>
																									 <Alert show={show1} variant="success">
																												<Alert.Heading>Success!!!!</Alert.Heading>
																														<p>
																														You are successfully registered, Please Login 
																														</p>
																													<hr />
																												<div className="d-flex justify-content-end">
																													<Link to="/">
																															<Button variant="success">
																																Close
																														</Button>
																														</Link>
																											</div>
																									</Alert>
                	<div className="loginbox">
                    	<div className="login-left">
																					<a href="https://studentx.world">
						                	{/* <img className="img-fluid" src={Logo} alt="Logo" /> */}
							               </a>
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<h1>Register</h1>
								<p className="account-subtitle">studentX.world</p>		
									<div className="form-group">
										<input className="form-control" 
										type="text" 
										placeholder="First Name"  
										value={this.state.fname} 
										onChange={this.handleOnchangefName.bind(this)}
										/>
										<span className="text-danger" >{this.state.fname_error}</span>
									</div>

									<div className="form-group">
										<input className="form-control" 
										type="text" 
										placeholder="Last Name" 
										value={this.state.lname} 
										onChange={this.handleOnchangelName.bind(this)}
										/>
										<span className="text-danger">{this.state.lname_error}</span>
									</div>
									<div className="form-group">
										<input className="form-control" 
										type="number" 
										placeholder="Mobile Number"  
										value={this.state.number} 
										onChange={this.handleOnchangenumber.bind(this)}
										/>
									<span className="text-danger">{this.state.number_error}</span>
									</div>
									{this.state.hide==false?(
									<div>
										{this.state.loading1==false ?
											<a href="#" className="btn btn-primary" onClick={this.sendOtp.bind(this)} disabled={this.state.isSubmitting}>
											Send OTP</a>
											:
											<a href="#" className="btn btn-primary">
											<span className="spinner-border spinner-border-sm me-2" role="status"></span>Send OTP</a>
										}						
									</div>):(
										<div>
									<div className="form-group">
										<input className="form-control" 
										type="OTP" 
										placeholder="OTP"  
										value={this.state.OTP} 
										onChange={this.handleOnchangeOTP.bind(this)}
										/>
									<span className="text-danger">{this.state.otperror}</span>
									</div>
									<div className="form-group row">
												<label className="col-lg-3 col-form-label">Gender</label>
												<div className="col-lg-10" >
													<div className="form-check form-check-inline">
														<input className="form-check-input" 
														type="radio" 
														name="gender" 
														id="gender_male" 
														value="Male" 
														onChange={this.handleOnchangegender.bind(this)}
														/>
														<label className="form-check-label" htmlFor="gender_male">
														Male
														</label>
													</div>
													
													<div className="form-check form-check-inline">
														<input className="form-check-input" 
														type="radio" 
														name="gender" 
														id="gender_female" 
														value="Female"
														onChange={this.handleOnchangegender.bind(this)} 
														/>
														<label className="form-check-label" htmlFor="gender_female">
														Female
														</label>
													</div>
												</div>
									</div>

									<div className="form-group">
										<input className="form-control" 
										type="email" 
										placeholder="Email" 
										value={this.state.email}
										onChange={this.handleOnchangeemail.bind(this)}
										/>
										<span className="text-danger">{this.state.email_error}</span>
									</div>

									<div className="form-group">
										<input className="form-control" 
										type="password" 
										placeholder="Password" 
										value={this.state.password} 
										onChange={this.handleOnchangepassword.bind(this)}
										/>
										<span className="text-danger">{this.state.password_error}</span>

									</div>
									
									<div className="form-group mb-0">
										{this.state.loading ?
										<a href="#" className="btn btn-primary btn-block">
												<span className="spinner-border spinner-border-sm me-2" role="status"></span>Register</a>	:
											<a href="#" className="btn btn-primary btn-block" onClick={this.submitfunction.bind(this)} disabled={this.state.isSubmitting}>
												Register</a>
										}
										{/* <a href="#" className="btn btn-primary btn-block"> */}								
									</div>
									</div>)}
								
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								
								
								<div className="social-login">
									<span>Register with</span>
									{/* <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a> */}
									<a href={GOOGLE_AUTH_URL} className="google"><FontAwesomeIcon icon={faGoogle} /></a>
								</div>
								
								
								<div className="text-center dont-have">Already have an account? <a href="/interact">Login</a></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
												
												{/* Modals */}
      <Modal show={show1}>
        <Modal.Header closeButton onClick={()=>this.setState({show1:false})}>
          <Modal.Title>Success!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
								You are successfully registered, Please Login 
        </Modal.Body>
        <Modal.Footer>
										<Link to="/">
												<Button variant="success" onClick={()=>this.setState({show1:false})}>
													OK
											</Button>
											</Link>
        </Modal.Footer>
      </Modal>

						{/* Modals */}
      <Modal show={show}>
        <Modal.Header closeButton onClick={()=>this.setState({show:false})}>
          <Modal.Title>OOPS!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
								Mobile number/email already registered, Please register with another mobile number / email  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>this.setState({show:false})}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
												
												</div>
        )
    }
}
export { Register };