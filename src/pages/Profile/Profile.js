import React from 'react';
// Import Components
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
// Import Image
import proPic from '../../assets/img/profiles/avatar-02.jpg';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './edit.css'
import { faCheck, faEdit, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import {API_BASE_URL,ACCESS_TOKEN,Status,BASE_URL,USERID} from '../../../SocialLink';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { error } from 'jquery';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.updateprofile = this.updateprofile.bind(this);
        this.state = {
									userData:[],
                                    hide:true,
                                    mobileNumber:'',
                                    userid:"",
                                    updatemoblienumber:'',
                                    email:'',
                                    successmessage:false,
                                    errormessage:false,
                                    error:''
                                    
                                    
                                    
								}
    }            


 
				componentDidMount(){
				const token = localStorage.getItem(ACCESS_TOKEN);
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
                                                if(response.status==201 || response.status==200){
                                                    // code to be executed if response status is 200 or 201
                                                 
                                                    console.log(response.data);
													const userData=response.data
													this.setState({userData:userData})
                                                    this.setState({email:userData.email})
                                                    this.setState({userid:userData.userId})
                                                    this.setState({error:"Enter updated moblie number"}) 


                                                    setTimeout(()=>{

                                                    
                                                        this.setState({error:""}) },4000)
                                                }
													
													}
											)
									.catch((error)=> {
                                        if(response.status==500 || response.status==401){
                                            this.setState({error:"Internal Server Error"})
                                            setTimeout(()=>{

                                                    
                                                this.setState({error:""}) },4000)
                                        }
											console.log(error.response);
									})	     

                            //        x

			}
      

			 
            handleOnchange(event)
            {
                this.setState({updatemoblienumber: event.target.value});	
            }   
              

            updateprofile(){
                this.setState({hide:false})
            }
            
            handleClick() {

                if(this.state.updatemoblienumber.length>10 || this.state.updatemoblienumber.length<10 ){
                    this.setState({
                        error: "Invalid mobile number"
                    }); setTimeout(() => {
                        this.setState({error:""})
                    }, 4000);
                }else{
                        
                  
                const token = localStorage.getItem(ACCESS_TOKEN);
               
                // alert("handle")
                axios({
                    method:"patch",
                    url:BASE_URL+`/auth-service/user/creds-update?email=${this.state.email}&id=${this.state.userid}&mobileNumber=${this.state.updatemoblienumber}`,
                            headers:{
                                    Authorization:`Bearer ${token}`,
                            },
                           
            })
            
            .then((response)=>{  
                if(response.status==201 || response.status==200){
                    this.setState({successmessage:true})    
                    this.setState({errormessage:false})
                    this.setState({error:""})
                    alert(response)
                    setTimeout(()=>{

                        this.setState({hide:false})                     
                        this.setState({successmessage:false})  
                     },4000)

                }
                    }
            )
    .catch((error)=> {
        if(response.status==500 || response.status==400){
            this.setState({error:'internal server error'})  
        console.log(error);    


        setTimeout(()=>{

                                                    
            this.setState({successmessage:false})    
            this.setState({error:""})
         },4000)
        }
          
    })	     
                        }  }

    render() {
					const {userData} = this.state;
        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Profile</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                   
                   {this.state.hide  ? <> <Row>
                    <Col sm={12}>
                        <div className="profile-header">
                            <div className="row align-items-center">
                                <div className="col-auto profile-image">
                                    <a href="#">
                                        <img className="rounded-circle" alt="User Image" src={proPic} />
                                    </a>
                                </div>
                                <div className="col ml-md-n2 profile-user-info">
                                    <h4 className="user-name mb-0">{userData.firstName} {userData.lastName}</h4>
                                    <h6 className="text-muted">Student</h6>
                                    {/* <div className="user-Location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, United States</div> */}
                                    {/* <div className="about-text">Lorem ipsum dolor sit amet.</div> */}
                                </div>
                                <div className="col-auto profile-btn">                                    
                                    <Link to="/edit" className="btn btn-primary">
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="profile-menu">
                            {/* Personal Detail Tab */}
                            <Tab eventKey="about" title="About">
                                <Row>
                                    <Col lg={9}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between">
                                                    <span>Personal Details</span> 
                                                    <Link className="edit-link" data-toggle="modal" onClick={this.updateprofile}><FontAwesomeIcon icon={faEdit} className="mr-1" />Edit</Link>
                                                </Card.Title>

                                                <div className="row">
                                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Name</p>
                                                    <p className="col-sm-9">{userData.firstName} {userData.lastName}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
                                                    <p className="col-sm-9">{userData.dob}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
                                                    <p className="col-sm-9">{userData.email}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
                                                    <p className="col-sm-9">{userData.mobileNumber}</p>
                                                </div>
                                                {/* <div className="row">
                                                <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Address</p>
                                                    <p className="col-sm-9 mb-0">{userData.address}
                                                    </p>
                                                </div> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>

                                        {/* Account Status */}
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between">
                                                    <span>Account Status</span>
                                                    <a className="edit-link" href="/edit"><FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit</a>
                                                </Card.Title>
                                                <button className="btn btn-success" type="button"><FontAwesomeIcon icon={faCheck} className="mr-1" />Active</button>
                                            </Card.Body>
                                        </Card>
                                        {/* /Account Status */}

                                        {/* Skills */}
                                        {/* <Card>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between">
                                                    <span>Skills</span>
                                                    <a className="edit-link" href="#"><FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit</a>
                                                </Card.Title>
                                                <div className="skill-tags">
                                                    <span>Html5</span>
                                                    <span>CSS3</span>
                                                    <span>WordPress</span>
                                                    <span>Javascript</span>
                                                    <span>Android</span>
                                                    <span>iOS</span>
                                                    <span>Angular</span>
                                                    <span>PHP</span>
                                                </div>
                                            </Card.Body>
                                        </Card> */}
                                        {/* Skills */}
                                    </Col>
                                </Row>
                            </Tab>
                            {/* Personal Detail Tab */}


                            {/* Password Tab */}
                            {/* <Tab eventKey="password" title="Password">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Change Password</Card.Title>
                                        <Row>
                                            <Col md={10} lg={6}>
                                                <form>
                                                    <div className="form-group">
                                                        <label>Old Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <button className="btn btn-primary" type="submit">Save Changes</button>
                                                </form>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab> */}
                            {/* Password Tab */}
                        </Tabs>                        
                    </Col>
                </Row></> : <>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between">
                                                    <span>Personal Details</span> 
                                                    <Link className="edit-link" data-toggle="modal" to="/edit"><FontAwesomeIcon icon={faEdit} className="mr-1" />Edit</Link>
                                                </Card.Title>

                                                <div className="col" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
              
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault03">Email</label>
                    <input type="email" className="form-control" id="validationDefault03" placeholder="Email" value={this.state.userData.email} name="email"  disabled required/>
                </div>

                
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault02">MobileNumber</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Mobile Number"    name="lname"  onChange={this.handleOnchange.bind(this)}  required/>
																	
                </div>        

                <div className="col-auto profile-btn">                                    
                                    <button className="btn btn-primary"    onClick={this.handleClick}>
                                        update profile
                                    </button>
                                </div>     
                                <div  style={{marginTop: '20px',}}>{this.state.successmessage ?  <h5    className='succebox'>Mobile number updated  successfully!!</h5> :""   }</div>      

                                <div  style={{marginTop: '20px',}}>{this.state.errormessage ?  <h5    className='ebox'>Please enter valid mobile number!!</h5> :""   }</div>   
                                {this.state.error ?  <h5    className='ebox'>{this.state.error}</h5> : ""}
              </div>
                                            </Card.Body>
                                        </Card>
                            
                                      </>}
            </div>
        )
    }
}
export { Profile };