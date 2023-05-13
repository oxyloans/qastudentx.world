import React from 'react';
// Import Components
import { Row, Col, Card, Table, Container, Button,Tooltip,OverlayTrigger} from "react-bootstrap";
// Import Chart
import { Line, Bar } from 'react-chartjs-2';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard, faUserGraduate, faBookOpen, faClock, faFileAlt, faClipboardList, faClipboardCheck, faHourglassEnd,faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from 'react-customizable-progressbar';
import {Link} from "react-router-dom";
import {API_BASE_URL,ACCESS_TOKEN,BASE_URL,USERID,ROLES} from '../../../SocialLink';
import axios from 'axios';
import './edit.css'
import map1 from '../../assets/img/download.jpg';
import { Redirect } from 'react-router-dom';
import Slidebarcontent from './Slidebarcontent';
import Timeline from './Timeline';
import Namecomponent from './namecomponent';
import Namesscroll from './Namesscroll';
import Invate from './invate';

 

// Revenue Chart
const data = {
	labels: ['Germany', 'France', 'Ireland','Netherland','Newzeland','US', 'UK'],
	datasets: [
					{
									label: 'Rent(in Rupees)',
									backgroundColor: 'rgb(25 175 251 / 20%)',
									borderColor: '#19affb',
									borderWidth: 3,
									hoverBackgroundColor: '#19affb',
									hoverBorderColor: '#19affb',
									data: [24420, 25000, 32560,32560,36000,36780,34780]
					},
					// {
					// 				label: 'Expense',
					// 				backgroundColor: 'rgb(253 187 56 / 20%)',
					// 				borderColor: '#fdbb38',
					// 				borderWidth: 3,
					// 				hoverBackgroundColor: '#fdbb38',
					// 				hoverBorderColor: '#fdbb38',
					// 				data: [43,21,56,57,70,23,43,21]
					// }
	]
};

// Student Chart
const dataBar = {
	labels: ['Germany', 'France', 'Ireland','Netherland','Newzeland','US', 'UK'],
	datasets: [
					{
									label: 'Food(in Rupees)',
									backgroundColor: '#19affb',
									hoverBackgroundColor: '#19affb',
									hoverBorderColor: '#19affb',
									data: [13450,12210, 14340, 12540, 9496, 12432, 12210]
					},
					// {
					// 				label: 'UK',
					// 				backgroundColor: '#fdbb38',
					// 				hoverBackgroundColor: '#fdbb38',
					// 				hoverBorderColor: '#fdbb38',
					// 				data: [443, 351, 526, 537, 750, 453, 643, 721]
					// }
	]
};

class StudentDashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userData:[],
            username:null
		}
}


 
	componentDidMount() {
       
			
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
        console.log(response.data.firstName)

                const	userData = response.data
                    this.setState({userData:userData})
                    // alert(userData.firstName)
                   this.setState({username:userData.firstName})
                   var fullname=response.data.firstName +" " +response.data.lastName;
                   console.log(fullname);
                   let upperCaseText = fullname.toUpperCase();
                   this.setState({username:upperCaseText});
                //    console.log()

                   
		      })
       .catch((error)=> {
					     console.log(error.response.data.status);
		      })	

	}
     
					render() {
						const {userData} = this.state;
                        const accessToken=localStorage.getItem("accessToken")

                        if(accessToken){
                            // alert("access")
                            
                        }else{
                            
                            return <Redirect to = {{
                                                pathname: "/",
                            }}/>
                        }
        return (
            <div>
               {/* Page Header */}    
    {/* <Slidebarcontent /> */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <h3 className="page-title">Welcome {userData.firstName}!</h3> */}    
 
                               {/* <div style={{display:'flex',flexDirection:'row'}}><h3 className="page-title" >Welcome </h3> <div className="cssforthe"> <Namecomponent  /> </div> </div>  */}
                               
                               <div style={{display:'flex',flexDirection:'row'}}><h3 className="page-title" ><Namesscroll  />  </h3>  </div> 
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/dashboard"> Dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Overview Section */}
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-13 d-flex">
                            <div className="card bg-nine w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <FontAwesomeIcon icon={faBookOpen} />
                                        </div>
                                        <div className="db-info">
                                            <h4 className='textcolor1'>04</h4>
                                            <h6 className='textcolor1'>Applied Courses</h6>
                                        </div>
                                    </div>
                                </div>
																																<OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props}>
																																															How many Courses applied.
																																														</Tooltip>
																																												)}
																																											>
																																													<p className="text-end" style={{marginTop:-20,marginRight:10}}><FontAwesomeIcon icon={faInfoCircle} /></p>
																																</OverlayTrigger>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-13 d-flex">
                            <div className="card bg-six w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                         <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <div className="db-info">
                                            <h4 className='textcolor1'>04</h4>
                                            <h6 className='textcolor1' style={{marginLeft:-6}}>Applied Applications</h6>
                                        </div>
                                    </div>
                                </div>
																																<OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props}>
																																																Applications applied to universities.
																																														</Tooltip>
																																												)}
																																											>
																																													<p className="text-end" style={{marginTop:-20,marginRight:10}}><FontAwesomeIcon icon={faInfoCircle} /></p>
																																											</OverlayTrigger>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-13 d-flex">
                            <div className="card bg-ten w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <FontAwesomeIcon icon={faClipboardList} />
                                        </div>
                                        <div className="db-info">
                                            <h4 className='textcolor1'>02</h4>
                                            <h6 className='textcolor1' style={{marginLeft:-6}}>Shortlisted Applications</h6>
                                        </div>
                                    </div>
                                </div>
																																<OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props}>
																																														 Applications	shortlisted by universities.
																																														</Tooltip>
																																												)}
																																											>
																																													<p className="text-end" style={{marginTop:-20,marginRight:10}}><FontAwesomeIcon icon={faInfoCircle} /></p>
																																											</OverlayTrigger>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-13 d-flex">
                            <div className="card bg-eleven w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <FontAwesomeIcon icon={faClipboardCheck} />
                                        </div>
                                        <div className="db-info">
                                            <h4 className='textcolor1'>01</h4>
                                            <h6 className='textcolor1'>Offer Letters</h6>
                                        </div>
                                    </div>
                                </div>
                                <OverlayTrigger
                                    placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={(props) => (
                                            <Tooltip {...props}>
                                                Offer letters send by universities.
                                            </Tooltip>
                                    )}
                                >   
                                        <p className="text-end" style={{marginTop:-20,marginRight:10}}><FontAwesomeIcon icon={faInfoCircle} /></p>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                    {/* /Overview Section */}

                <Row>
                     <Timeline  />
                          

                     {/* Invite Chat */}
                    <Col md={12} lg={8}>
                        <Card className="card-chart">
                           

                          <div className='invatestudent'>
               
                          <h5 className='hedimarg'>Invite Student(s)</h5><div className='twoinvate'>
                          
                  <div className="col-md-12 mb-12 col-xl-12 col-lg-12 invatestude row">   
                  <h6 className='headerdata'>
                  <input type='radio' className='butname' name="stundent" value='singlestudent' /> 
                  Send to Single Student
                    </h6> 
                    <h6 className='headerdata'>
                  <input type='radio' className='butname'name="stundent" value='singlestudent' /> 
                  Send to Multiple Student
                           </h6> 
                
               
                      <Invate />
                {/* <label htmlFor="validationDefault03"  className='labeldata'>Student Name</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="Student Name"  name="email"   required/>
                    <label htmlFor="validationDefault03"  className='labeldata'>Student Name</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="Student Name"  name="email"   required/> */}
               
                </div>   
                {/* <div className="col-md-6 mb-6 invatestude">
                <h6 className='headerdata'>
                     <input type='radio' className='butname' value='multiplestudents' />
                       Send to Multiple Student(s)
                          </h6> 
                  <label htmlFor="validationDefault03" className='labeldata' >Student Email</label>
                    <input type="email" className="form-control" id="validationDefault03" placeholder="Email"  name="email"   required/>
                </div>     */}
        
                  </div>
                
                             </div>  
                                {/* <h3className='diffwork'>OR</h3>    */}
                                    <div className='ciror'><span  className='cirorr1'>OR</span></div>
                             <div className="col-md-4 mb-3 invatestude">

                             <h6 className='headerdata '>Send to Multiple Student(s)
                                            </h6> 
                                            <div class=" input-gro  input-group1 ">
                                  <input type="text" class="form-control  mb-9 mr-sm-2 " id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"  />
                                  <button class="btn btn-outline-secondary col-md-4 mb-3 buttyp" type="button" id="inputGroupFileAddon04">copy link</button>
                                </div>
                             </div>   
                        </Card>
                    </Col>       

                    <Col xl={4} sm={4} xs={12}>
                        <Card className="flex-fill insta sm-box box11 congocenter">
   
                            <div  className='congocenter' >
                                <h5  className='textage'>Congratulations</h5>    
                                <h5  className='textage1'>{this.state.username}</h5>
                                <span className='spantext'>You have saved</span>
                                <h3 className='textpri'>USD $450</h3>    
                                <span className='spantext'>as Studentx Grant</span>
                            </div>
                        </Card>
                    </Col>

                    <Col md={12} lg={8}>
                        <Card className="card-chart">
                            {/* <Card.Header>
                                <Row className="align-items-center">
                                    <Col>
                                        <h5 className="card-title">Applications Status</h5>
                                    </Col>
                                   
                                </Row>
                            </Card.Header> */}

                            <Card.Body>
                               <div  className='courecontent'>
                                  <h3>My Applications</h3>  
                                    <div className='contentt'>
                                        <h5  className='fontsizele'>Adler University,Canada</h5>
                                        <button  type='submit' className=' buttonboder' >Cancel Withdrawn</button>
                                    </div>
                                    <span className='spantext1'>Intake: Dec,2022</span>
                                    <div className='spandiv1'>
                                    <span className='spantext1'>PREFERRED COURSE AND STUDNETX POTENTIAL GRANT</span>
                                    <h6  className='dataget'>Master of Public Policy & Administration | 300 USD</h6>
                                    <span className='spantext1'>APPLIED COURSE AND STUDNETX GUARANTEED GRANT</span>
                                    <h6  className='dataget'>Not Applied Yet</h6>
                                    </div>
                               </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* /Feed Activity */}     


                    <Col xl={4} sm={4} xs={12}>
                        <Card className="flex-fill insta sm-box box11">
                           

                           <img src='https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png' alt='avthr image' className='avthrimage' />      
                           <div className='realetion11'>
                           <h5>Bhargav sai</h5>
                           <span   className='spanda'>Client Executive</span>
                           <span className='spana' ><i class="fa fa-phone"></i> +91 8885966556</span>  
                           </div>
                        </Card>
                    </Col>   
                </Row>

                {/* Socail Media Follows */}
                <Row>
                    <Col xl={3} sm={6} xs={12}>
                        <Card className="flex-fill fb sm-box">
                            <FontAwesomeIcon icon={faFacebook} />
                            <h6>10</h6>
                            <p>Likes</p>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6} xs={12}>
                        <Card className="flex-fill twitter sm-box">
                            <FontAwesomeIcon icon={faTwitter} />
                            <h6>6</h6>
                            <p>Follows</p>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6} xs={12}>
                        <Card className="flex-fill insta sm-box">
                            <FontAwesomeIcon icon={faInstagram} />
                            <h6>8</h6>
                            <p>Follows</p>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6} xs={12}>
                        <Card className="flex-fill linkedin sm-box">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <h6>15</h6>
                            <p>Follows</p>
                        </Card>
                    </Col>
                </Row>
                {/* /Socail Media Follows */}
                    {/* /Student Dashboard */}
            </div>
        )
    }
		}
export { StudentDashboard };