import React,{useEffect,useState} from 'react';
// Import Logo
import Logo from '../../assets/img/removewhite.png';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
// Import Bootstrap
import { Button,Alert } from "react-bootstrap";
// Social Login Links 
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL,ACCESS_TOKEN,BASE_URLS,Status,USERID,ROLES,BASE_URL} from '../../../SocialLink';

import axios from 'axios'

import { Redirect,Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
				email: "",
				password: "",
				tokens:"",
				emailerror:"",
				passworderror:"",
				loading:false,
				show:false,
				isSubmitting:false,
		};
}


handleSubmit = (e) => {
	e.preventDefault();
	this.state.isSubmitting(true)
	console.log(this.state);
}

handleChangeMail = (e) => {
	this.setState({email: e.target.value})
	this.setState({emailerror:""})
	this.setState({loading:false})
}
handleChangePass = (e) => {
	this.setState({password: e.target.value})
	this.setState({passworderror:""})
	this.setState({loading:false})
}

	getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

		var results = regex.exec(this.props.location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
 


sigin(){
	this.setState({loading:true})
	const regexs = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(regexs.test(this.state.email) === true){
	if(!this.state.email || regexs.test(this.state.email) === false){
		this.setState({loading:!this.state.loading})
					this.setState({
						emailerror: "Email is not valid"
					});
					return false;
	}else{
		var data={
			"email":this.state.email,
			"password": this.state.password
		}
	}
}else{
	if(!this.state.email || this.state.email.length<10){
		this.setState({loading:!this.state.loading})
		this.setState({
			emailerror: "Please enter valid number"
		});
		return false;
	}else{
		var data={
			"mobileNumber":this.state.email,
			"password":this.state.password
			}
	}
}
	if(!this.state.password){
		this.setState({loading:!this.state.loading})
		this.setState({
			passworderror:"Please enter Password"
		});
		
		return false;
	}
	if(this.state.password>8){
		this.setState({loading:!this.state.loading})
		this.setState({
			passworderror:"Your password is weak"
		});
		return false;
	}

	axios({
		  method: 'post',
		  url: BASE_URLS+"/auth-service/auth/sign-in",
		  data:data,
			 })
	 .then((response)=>{
		     console.log(response.data);
									const	tokens = response.data
									this.setState({tokens:tokens})
									if(tokens.accessToken!=""){
											    console.log(response.data.roles[0].name);
															localStorage.setItem(USERID,tokens.userId);
															localStorage.setItem(ROLES,response.data.roles[0].name)
											    		localStorage.setItem(ACCESS_TOKEN, tokens.accessToken);
											    window.location.reload(false);
									}
									this.setState({loading:!this.state.loading})
							})
	 .catch((error)=> {
				console.log(error.response);
				this.setState({show:true})
				this.setState({loading:!this.state.loading})
		})	

		// this.setState({loading:!this.state.loading})
}


     handleChangesubmit(){
						let i = 0;
      while (i < 4) {
					  this.sigin()
       i++;
       if (this.state.token != "") {
        break;
       }
      }
	  	}
    

    render() {

					const token = this.getUrlParameter('token');
     const error = this.getUrlParameter('error');
					const {show} = this.state;

							
					if(localStorage.getItem(ACCESS_TOKEN)){
						
							return  <Redirect to = {{
								pathname: "/dashboard",
								}}/>
						
					}
					else if(token){
						localStorage.setItem(ACCESS_TOKEN, token);
						return <Redirect to = {{
											pathname: "/dashboard",
						}}/>
					}

        return (
            <div className="main-wrapper login-body">
														

					       {/* {!show && <Button onClick={() => this.setState({show:true})}>Show Alert</Button>} */}
            <div className="login-wrapper">
                <div className="container">
																<Alert show={show} variant="danger">
																												<Alert.Heading>OOPS!!!!</Alert.Heading>
																														<p>
																															Please Login with valid credentials
																														</p>
																													<hr />
																												<div className="d-flex justify-content-end">
																															<Button onClick={() => this.setState({show:false})} variant="danger">
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
                                <h1>Login</h1>
                                <p className="account-subtitle">studentX.world</p>
                                
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" type="email" placeholder="Email / Mobile number"  onChange={this.handleChangeMail} id="validationServerUsername" required/>
																																								<div className="invalid-feedback">
													                              Please choose a username.
												                            </div>
																																								<span className="text-danger">{this.state.emailerror}</span>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" placeholder="Password"  onChange={this.handleChangePass} required/>
																																								<span className="text-danger">{this.state.passworderror}</span>
                                    </div>
																																				<div className="form-group">
																																					{
																																					this.state.loading ?
																																					<a href="#" className="btn btn-primary btn-block">
																																									 	<span className="spinner-border spinner-border-sm me-2" role="status"></span>Login</a>	:
																																									<a href="#" className="btn btn-primary btn-block" onClick={()=>this.handleChangesubmit()} disabled={this.state.isSubmitting}>
																																										 Login</a>
																																				    // <Button variant="primary" className="me-1 " ><span className="spinner-border spinner-border-sm me-2" role="status"></span>Login</Button>
																																								//      :
																																								// 					<div className='justify-content-center'>
																																								// <Button variant="primary" className="me-1 " onClick={()=>this.sigin()}>Login</Button>
																																								// </div>
																																								}
																																									
                                        {/* <a href="" className="btn btn-primary btn-block" onClick={()=>this.sigin()}>Login</a> */}
                                    </div>
                                </form>
                                
                                <div className="text-center forgotpass"><a href="/interact/forgot-password">Forgot Password?</a></div>
                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>
                                
                                <div className="social-login">
                                    <span>Login with</span>
                                    {/* <a href={FACEBOOK_AUTH_URL} className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a> */}
																																				<a href={GOOGLE_AUTH_URL} className="google"><FontAwesomeIcon icon={faGoogle} /></a> 
                                </div>
                                
                                <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export { Login };