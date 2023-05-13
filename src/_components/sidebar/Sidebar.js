import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from "jquery";
import { history } from "../_helpers";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserGraduate, faChalkboardTeacher, faBuilding, faBook, faFile, faHockeyPuck, faDollarSign, faClipboard, faCalendar, faTable, faShieldAlt, faBaseballBall, faBus, faColumns, faCode, faSearch, faUser, faFilter  } from '@fortawesome/fontawesome-free-solid'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';

import {API_BASE_URL,ACCESS_TOKEN,BASE_URL,ROLES} from '../../../SocialLink';


import '../../../src/pages/Login/logsati.css'

import axios from 'axios';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathname: history.location.pathname.split("/")[1],
			role:"",
		}
	}
	componentDidMount() {
		var Sidemenu = function() {
			this.$menuItem = $('#sidebar-menu a');
		};

		function init() {
			var $this = Sidemenu;
			$('#sidebar-menu a').on('click', function(e) {
				if($(this).parent().hasClass('submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('subdrop')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('subdrop');
					$(this).next('ul').slideDown(350);
					$(this).addClass('subdrop');
				} else if($(this).hasClass('subdrop')) {
					$(this).removeClass('subdrop');
					$(this).next('ul').slideUp(350);
				}
			});
			$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
		}

		$(document).on('mouseover', function(e) {
			e.stopPropagation();
			if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
				var targ = $(e.target).closest('.sidebar').length;
				if(targ) {
					$('body').addClass('expand-menu');
					$('.subdrop + ul').slideDown();
				} else {
					$('body').removeClass('expand-menu');
					$('.subdrop + ul').slideUp();
				}
				return false;
			}
		});
		// Sidebar Initiate
		init();
    
		// Getting User Data
      
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
								this.setState({user:response.data.userRoles[0].roles.name})
					    // alert(userData.firstName)
		      })
       .catch((error)=> {
					    //  console.log(error.response);
		      })	
								const role=localStorage.getItem(ROLES)
								this.setState({role:role})
	}

    render() {

		const { pathname } = this.state;
		const { user } =this.state;
		let pathnames = window.location.pathname;
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
            <div className="sidebar" id="sidebar">
                
				<Scrollbars style={{ height: "100vh" }}>
					<div className="sidebar-inner">
						<div id="sidebar-menu" className="sidebar-menu">
							<ul>
								<li className="menu-title  menu-title11"> 
									<span>Main Menu</span>
								</li>
								<li className = {pathnames.includes('/interact/dashboard') || pathnames.includes('/dashboard')  ? 'active' : ''}> 
								<Link to = "/dashboard">
										<FontAwesomeIcon icon={faThLarge} /> <span>Dashboard</span> 
										</Link>
								</li>
								{this.state.role==="ADMIN"?
								<li className = {pathnames.includes('/interact/totalusers') || pathnames.includes('/totalusers')  ? 'active' : ''}> 
								<Link to = "/totalusers">
										<FontAwesomeIcon icon={faUser} /> <span>Total Users</span> 
										</Link>
								</li>:null}
								{/* <li className = {pathnames.includes('/interact/preference') || pathnames.includes('/preference')  ? 'active' : ''}> 
								<Link to = "/preference">
										<FontAwesomeIcon icon={faThLarge} /> <span>Preference</span> 
										</Link>
								</li> */}
								{this.state.role!=="ADMIN"?
								<li className = {pathnames.includes('/interact/profile') || pathnames.includes('/profile') || pathnames.includes('/edit') ? 'active' : ''}> 
								<Link to = "/profile">
										<FontAwesomeIcon icon={faUser} /> <span>My Profile</span> 
									</Link>
								</li>:null}
								{this.state.role!=="ADMIN"?
								<li className = {pathnames.includes('/interact/program') || pathnames.includes('/program') || pathnames.includes('/edit') ? 'active' : ''}> 
								<Link to = "/program">
										<FontAwesomeIcon icon={faUser} /> <span>Program </span> 
									</Link>
								</li>:null}
								{/* {user!=="ADMIN"?
								<li className = {pathnames.includes('/interact/setpreferences') || pathnames.includes('/setpreferences')  ? 'active' : ''}> 
								<Link to = "/setpreferences">
										<FontAwesomeIcon icon={faFilter} /> <span>Set Preferences</span> 
									</Link>
								</li>:null} */}
								{this.state.role!="ADMIN"?
								 <li className = {pathnames.includes('/interact/application') || pathnames.includes('/application')  ? 'active' : ''}> 
								<Link to = "/application">
										<FontAwesomeIcon icon={faSearch} /> <span>My Application</span> 
									</Link>
								</li> :null}


								{this.state.role!="ADMIN"?
								 <li className = {pathnames.includes('/interact/apply') || pathnames.includes('/apply')  ? 'active' : ''}> 
								<Link to = "/apply">
										<FontAwesomeIcon icon={faSearch} /> <span>Search And Apply</span> 
									</Link>
								</li> :null}
								
								 {/* <li className = {`submenu ${pathnames.includes('/interact/shortlisted') ? 'active' : pathnames.includes('/interact/approved') ? 'active' : pathnames.includes('/interact/rejected') ? 'active' : pathnames.includes('/interact/offer') ? 'active' : ''}`}>								
									<a href="">
										<FontAwesomeIcon icon={faUserGraduate} /> <span>My Applications</span> <span className="menu-arrow"></span>
									</a>
									<ul>
										<li className = {pathnames.includes('/interact/shortlisted') ? 'active' : ''}>
											<Link to = "/shortlisted">Shortlisted Applications</Link>
										</li>
										<li className = {pathnames.includes('/interact/approved') ? 'active' : ''}>
											<Link to = "/approved">Approved Applications</Link>
										</li>
										<li className = {pathnames.includes('/interact/rejected') ? 'active' : ''}>
											<Link to = "/rejected">Rejected Applications</Link>
										</li>
										<li className = {pathnames.includes('/interact/offer') ? 'active' : ''}>
											<Link to = "/offer">All Applications</Link>
										</li>
									</ul>
								</li> */}
								{this.state.role=="ADMIN"?
								<li className = {pathnames.includes('/interact/reffer') || pathnames.includes('/reffer')  ? 'active' : ''}> 
								<Link to="/reffer">
										<FontAwesomeIcon icon={faChalkboardTeacher} /> <span>My Network</span> 
									</Link>
								</li>:null}    
								
								{/* <li className = {pathnames.includes('/react/guidance') || pathnames.includes('/react/guidance')  ? 'active' : ''}> 
								<a href="/react/guidance">
										<FontAwesomeIcon icon={faClipboard} /> <span>Guidance</span> 
									</a>
								</li> */}
								</ul> 
						</div>
					</div>
				</Scrollbars>
            </div>
        )
    }
}

export { Sidebar };