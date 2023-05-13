import React from 'react';
import {Dropdown} from 'react-bootstrap';
import $ from "jquery";
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';

// Import Images
import Logo from '../../assets/img/logo.png';

import '../../pages/Dashboard/loder.css'
import './ap.css'
// import LogoSmall from '../../assets/img/remove.png';
import LogoSmall from '../../assets/img/2removewhite.png';
import small from '../../assets/img/1122.png';
import avatar1 from '../../assets/img/profiles/avatar-02.jpg';
import avatar2 from '../../assets/img/profiles/avatar-11.jpg';
import avatar3 from '../../assets/img/profiles/avatar-17.jpg';
import avatar4 from '../../assets/img/profiles/avatar-13.jpg';
import avatar5 from '../../assets/img/profiles/avatar-01.jpg';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faBell, faSearch } from '@fortawesome/fontawesome-free-solid'
import {API_BASE_URL,ACCESS_TOKEN,BASE_URL,USERID,ROLES} from '../../../SocialLink';
import RingBell from '../../pages/Login/RingBell';



class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userData:[],
			role:"",
			rotet:true,
			username:'',
		}
}

    handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

	componentDidMount() {
		// Mobile menu sidebar overlay
	
		var $wrapper = $('.main-wrapper');
		
		$('body').append('<div class="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function() {
			$wrapper.toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});
		
		// Sidebar overlay
		
		$(".sidebar-overlay").on("click", function () {
			$wrapper.removeClass('slide-nav');
			$(".sidebar-overlay").removeClass("opened");
			$('html').removeClass('menu-opened');
		});

		const token = localStorage.getItem(ACCESS_TOKEN);
		// alert(token)
      axios({
	       method: 'get',
	       url: BASE_URL+'/auth-service/user/me',
       	headers: {
		          "Authorization":`Bearer ${token}`
	          },
	        })
       .then((response)=>{
							const	userData = response.data
								this.setState({userData:userData})
								this.setState({username:userData.firstName})
					    // alert(userData.firstName)
		      })
       .catch((error)=> {
					     console.log(error.response);
		      })	

								const userId=localStorage.getItem(USERID)
								// alert(token)
				
														// Getting Profile Details
															axios({
																	method:"get",
																	url:`https://meta.oxyloans.com/api/student-service/user/profile?id=${userId}`,
																			headers:{
																					Authorization:`Bearer ${token}`,
																			}
															})
															.then((response)=>{
																	// console.log(response.data);
																	const userData=response.data
																	if(this.state.userData==""){
																	this.setState({userData:userData})
																	}
																	}
															)
													.catch((error)=> {
															console.log(error.response);
													})	

													const role = localStorage.getItem(ROLES);
													this.setState({role:role})
	}

	logout(){
		localStorage.removeItem(ACCESS_TOKEN)
		localStorage.removeItem(ROLES)
		localStorage.removeItem(USERID)
		}
 
    
    render() {
					const {userData} = this.state;
					const profileImage= userData.profileImage;
		const exclusionArray = [
			'/',
			'/register',
			'/register/',
			'/forgot-password',
			'/forgot-password/',
			'/error'
		]
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		
        return (    
			
            <div className="header">
                {/* Logo */}         
                <div className="header-left">
                    <a href="" className="logo" >
																				<img className='logoimg1' src={LogoSmall} alt="Logo" />
				                 	</a>
																		<a href="" className="logo logo-small">
																								<img src={small} alt="Logo" className='  App-logo' />        
																				</a>
                </div>
                {/* /Logo */}

                <a id="toggle_btn" onClick={this.handlesidebar}>
					<FontAwesomeIcon icon={faAlignLeft} />
				</a>
				{/* <div className='inputboxcontiner'>
				<i class="bi-search"  style={{color:'black'}}></i>
				</div> */}
				

                {/* Search Bar */}
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here" />
                        <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
                {/* /Search Bar */}

				<a className="mobile_btn" id="mobile_btn">
					<i className="fas fa-bars"></i>
				</a>

                <ul className="nav user-menu">

				

					{/* Notifications */}
					{/* <li>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle nav-link">
								<FontAwesomeIcon icon={faBell} /> <span className="badge badge-pill">3</span>
							</Dropdown.Toggle>

							<Dropdown.Menu className="notifications">
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<a href="javascript:void(0)" className="clear-noti"> Clear All </a>
								</div>

								<div className="noti-content">
									<ul className="notification-list">
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar1} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
														<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar2} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
														<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar3} />
													</span>
													<div className="media-body">
													<p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span></p>
													<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar4} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span></p>
														<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div className="topnav-dropdown-footer">
									<a href="#">View all Notifications</a>
								</div>
							</Dropdown.Menu>
						</Dropdown>
					</li> */}
					{/* /Notifications */}
                    

					<div><RingBell  name={this.state.username} /></div>
					{/* User Menu */}
					<li className="nav-item dropdown has-arrow">
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle nav-link">
							
							<span className="user-img">
							{profileImage==null?<img className="rounded-circle" src={avatar1} width="31" alt={userData.firstName}/>:<img className="rounded-circle" src={profileImage} width="31" alt={userData.firstName}/>}</span>
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<div className="user-header">
									<div className="avatar avatar-sm">
										{profileImage==null?<img src={avatar1} alt="User Image" className="avatar-img rounded-circle" />:
										<img src={profileImage} alt="User Image" className="avatar-img rounded-circle" />}
									</div>
									<div className="user-text">
										<h6>{userData.firstName}</h6>
										{this.state.role=="ADMIN"?<p className="text-muted mb-0">ADMIN</p>:<p className="text-muted mb-0">Student</p>}
									</div>
								</div>
								{/* <Dropdown.Item href="/interact/profile">My Profile</Dropdown.Item> */}
						  <Dropdown.Item href = "/interact" onClick={() => this.logout()}>Logout</Dropdown.Item>     
						  <Dropdown.Item href = "/interact" >Update Mobile No</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					{/* /User Menu */}
                </ul>

            </div>
        )
    }
}

export { Header };