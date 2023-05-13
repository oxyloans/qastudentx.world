import React from 'react';

// Import Logo
import Logo from '../../assets/img/removewhite.png';
import { Button,Alert } from "react-bootstrap";
import axios from 'axios';
import { BASE_URL,Status } from '../../../SocialLink';
import { Redirect,Link } from 'react-router-dom';

class ForgotPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			   mobileNumber:"",
						password:"",
						numbererror:"",
						passworderror:"",
						otp:"",
						otperror:"",
						mobileOtpSession:"",
						show:false,
						loading:false,
						showerror:false,
						hide:false,
						isSubmitting:false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.state.isSubmitting(true)
		console.log(this.state);
	}
	
	handleChangeNumber = (e) => {
		this.setState({mobileNumber: e.target.value})
		this.setState({numbererror:""})
		this.setState({loading:false})
	}

	handleChangePass = (e) => {
		this.setState({password: e.target.value})
		this.setState({passworderror:""})
		this.setState({loading:false})
	}

	handleChangeOtp = (e) => {
		this.setState({otp: e.target.value})
		this.setState({otperror:""})
		this.setState({loading:false})
	}


numberValidation(){
	if(this.state.number==="" ){
		this.setState({
			numbererror:"Mobile Number should be 10 digits"
		})
		this.setState({loading:!this.state.loading})
		return false;
	}
	return true;
	this.setState({loading:!this.state.loading})
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


	sendOtp(){
								this.setState({loading:!this.state.loading})
									
								if(this.numberValidation()){
									this.setState();
								}

							axios({
								method: 'post',
								url: BASE_URL+"/auth-service/user/send-mobile-otp",
								data:{
									"mobileNumber":this.state.mobileNumber
								},
								})
						.then((response)=>{
											console.log(response.data.mobileOtpSession);
											this.setState({mobileOtpSession:response.data.mobileOtpSession})
													this.setState({loading:!this.state.loading})
													this.setState({hide:!this.state.hide})
											})
						.catch((error)=> {
								console.log(error.response);
								// this.setState({showerror:true})
								this.setState({loading:!this.state.loading})
						})	
						this.setState({loading:!this.state.loading}) 
}

forgotpassword(){
									this.setState({loading:!this.state.loading})

									if(this.numberValidation()){
										this.setState();
									}
									if(this.otpValidation()){
										this.setState();
									}
									if(!this.state.password){
									this.setState({
										passworderror:"Please enter Password"
									});
									this.setState({loading:!this.state.loading})
									return false;
								}
								if(this.state.password>8){
									this.setState({
										passworderror:"Your password is weak"
									});
									this.setState({loading:!this.state.loading})
									return false;
								}
								axios({
									method: 'patch',
									url: BASE_URL+"/auth-service/user/forgot-password",
									data:{
										"email":"",
										"mobileNumber":this.state.mobileNumber,
										"mobileOtp":this.state.otp,
										"mobileOtpSession":this.state.mobileOtpSession,
										"password":this.state.password
									},
									})
								.then((response)=>{
												console.log(response.data.message);
												if(response.data.message==="password updated"){
													this.setState({show:true})
												}
														this.setState({loading:!this.state.loading})
												})
								.catch((error)=> {
									console.log(error.response);
									this.setState({showerror:true})
									this.setState({loading:!this.state.loading})
								})	
								this.setState({loading:!this.state.loading}) 
  }

    render() { 

					const {show} = this.state;
					const {showerror} = this.state;
        return (
            
            <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
																<Alert show={show} variant="success">
																			<Alert.Heading>Success!!!!</Alert.Heading>
																					<p>
																					You are successfully changed password, Please Login with password
																					</p>
																				<hr />
																			<div className="d-flex justify-content-end">
																				<Link to="/">
																						<Button onClick={() =>this.setState({show:false})} variant="success">
																							Close
																					</Button>
																					</Link>
																		</div>
																</Alert>
																<Alert show={showerror} variant="danger">
																					<Alert.Heading>Sorry!!!!</Alert.Heading>
																							<p>
																								You can not update you password. Please try after sometime.
																							</p>
																						<hr />
																					<div className="d-flex justify-content-end">
																								<Button onClick={() => this.setState({showerror:false})} variant="danger">
																									Close
																							</Button>
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
								 <h1>Forgot Password</h1>
								   <div className="form-group">
															<input className="form-control" type="number" placeholder="Mobile Number"  onChange={this.handleChangeNumber} id="validationServerUsername" required/>
															<span className="text-danger">{this.state.numbererror}</span>
											</div>
											{this.state.hide===true?
											<div className="form-group">
															<input className="form-control" type="number" placeholder=" OTP "  onChange={this.handleChangeOtp} required/>
															<span className="text-danger">{this.state.otperror}</span>
											</div>:null}
											{this.state.hide===true?
											<div className="form-group">
															<input className="form-control" type="password" placeholder="New Password"  onChange={this.handleChangePass} required/>
															<span className="text-danger">{this.state.passworderror}</span>
											</div>:null}
											{this.state.hide===false?
									  <div className="form-group mb-0">
									    {this.state.loading ?
									      <a href="#" className="btn btn-primary btn-block">
									        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                   Send OTP</a> :
													    <a href="#" className="btn btn-primary btn-block" onClick={this.sendOtp.bind(this)} disabled={this.state.isSubmitting}>Send OTP</a>}
									   </div>:
									 	<div className="form-group mb-0">
										   {this.state.loading ?
										     <a href="#" className="btn btn-primary btn-block">
										        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
									    	Reset Password</a>
													 :
														<a href="#" className="btn btn-primary btn-block" onClick={this.forgotpassword.bind(this)} disabled={this.state.isSubmitting}>Reset Password</a>}
										  </div>
									  	}
							   	<div className="text-center dont-have">Remember your password? <a href="/">Login</a></div>
							</div>
                        </div>
                    </div>
                </div>
         </div>   </div>
        )
    }
}
export { ForgotPassword };