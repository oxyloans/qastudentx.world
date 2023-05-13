import React,{useState,useEffect} from 'react';

import person from '../../assets/img/pesimage.png';
import { Link } from 'react-router-dom';
import './profile.css'
import axios from "axios"
import {BASE_URL} from "../../../SocialLink"
import './nav.css'
import { Card, Col } from 'react-bootstrap';

export default function Tabnav() {     
  const[userData,setuserData]=useState([])
  const[userfirstName,setuserfirstName]=useState();

    var full_name;
    var fullName;

  function getcall(){
    const token = localStorage.getItem("accessToken");
	const userId=localStorage.getItem("userId")
    axios({
        method:"get",
        url:BASE_URL+`/student-service/user/profile?id=${userId}`,
        headers:
        {
            Authorization:`Bearer ${token}`,
        }
        })
    .then((response)=>{
        // console.log(response.data)
        setuserData(response.data)
        full_name=response.data.firstName+" "+response.data.lastName;
        // console.log(full_name)
        let upperCaseText = full_name.toUpperCase();
        fullName=upperCaseText;
        // console.log(fullName)
        setuserfirstName(fullName)
        // console.log(userData);
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
}


useEffect(()=>{
    getcall();
},[])


  const inputsubmit=()=>{
    return(
      <>
      <input type='file'/>
      </>
    )
      
  }
  return (
    <div>

<>
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item " role="presentation">
      <button
        className="nav-link   nav-link11 active"
        id="pills-Student-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Student"
        type="button"
        role="tab"
        aria-controls="pills-Student"
        aria-selected="true"
      >
        Student Documents
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link   nav-link11"
        id="pills-Application-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Application"
        type="button"
        role="tab"
        aria-controls="pills-Application"
        aria-selected="false"
      >
        Application
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link   nav-link11"
        id="pills-Shortlisted-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Shortlisted"
        type="button"
        role="tab"
        aria-controls="pills-Shortlisted"
        aria-selected="false"
      >
        Shortlisted
      </button>
    </li>     <li className="nav-item" role="presentation">
      <button
        className="nav-link   nav-link11 "
        id="pills-Assigned-Staff-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Assigned-Staff"
        type="button"
        role="tab"
        aria-controls="pills-Assigned-Staff"
        aria-selected="false"
      >
        Assigned-Staff
      </button>
    </li>  
    <li className="nav-item" role="presentation">
      <button
        className="nav-link   nav-link11 "
        id="pills-Transactions-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Transactions"
        type="button"
        role="tab"
        aria-controls="pills-Transactions"
        aria-selected="false"
      >
        Transactions
      </button>
    </li>    
    <li className="nav-item" role="presentation">
      <button
        className="nav-link   nav-link11 "
        id="pills-Bank-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-Bank"
        type="button"
        role="tab"
        aria-controls="pills-Bank"
        aria-selected="false"
      >
        Bank Information
      </button>
    </li>
    
  </ul>
  <div className="tab-content" id="pills-tabContent">
    <div
      className="tab-pane fade show active"
      id="pills-Student"
      role="tabpanel"
      aria-labelledby="pills-Student-tab"
    >
      {/* ...Student d    */}
      <h5 className='labeldata1'> <h5  className='indataform'>Info!..</h5> Accepted Max File Size is 4MB. Accepted File Types are .jpg,.png and .pdf</h5>      

      <>    
      <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Education Documents</h6>        


        <div className='dropzone'>
          <label htmlFor='file-input'>
          <i class="fa fa-upload loade"></i>
          </label>
        <input id="file-input" type="file" style={{ display: "none" }} />
          
        </div>
      </div>
    </div>
  </div>    <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Education Documents</h6>        


        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">English Test Score</h6>        


        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Work Experience</h6>        


        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>     
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Emergency Contact Doc...</h6>        


        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div>    
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Passport & Travel History</h6>        

         <div className='disf1'>
        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
        <div className='mards'> 
        <div style={{marginTop: '10px'}}>
        <h6>VISA REFUSAL</h6>
        <span className='spante'>No Refusals</span>
        </div>
        <div style={{marginTop: '10px'}}>
        <h6>TRAVEL HISTORY</h6>
        <span className='spante'>Not Travelled Abroad</span>
        </div>  
        </div>
        </div>
      </div>
    </div>
  </div>

      </div>
      </>
    </div>
    <div
      className="tab-pane fade"
      id="pills-Application"
      role="tabpanel"
      aria-labelledby="pills-Application-tab"
    >
      {/* ...Application    */}

      <>  
        
      <div className="profile-header">
                            <div className="row align-items-center">
                                <div className="col-auto profile-image ">
                                    <a href="#">
                                        <img className="rounded imagedata11 imagedata1" alt="User Image" src={person}  />
                                    </a>
                                </div>
                                <div className="col ml-md-n2 profile-user-info ">
                                    <div className='buttontag'>
                                    <h5 className="textmau   textmau1">{userfirstName}</h5>
                                    <p  className='idbutton'>Student ID: 37422</p>
                                    <p  className='idbutton11'>Application ID: 56520</p>
                                    </div>
                                    
                                    <div>
                                        <span className='spantex'>DOB: {userData.dob} |</span>
                                        <span className='spantex'> {userData.gender} </span>
                                        {/* <span className='spantex'> Unmarried </span> */}
                                    </div>
                                    {userData.address!="" && userData.address!=null?
                                      <span className='spantex'>{userData.address}</span>   
                                    :null}
                                    <div style={{display:'flex', flexDirection:'column'}}>  

                                    <span className='spantex'><i class="fa fa-phone"  style={{marginRight: "7px"}}></i> +91 {userData.mobileNumber}</span>     
                                    <span className='spantex'><i class="fa fa-envelope" style={{marginRight: "7px"}}></i>  {userData.email}</span>
                                    <span className='spantex'>bhargav Rana (Study Advisor)</span>
                                    </div>
                                    <hr className='hrtags'/>   

                                    <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <h6>Adler University, Canada</h6>
                                    <span  className='spandata'>Cancel Withdrawn </span>
                                 
                                    </div>
                                    <h6>Intake: Dec 2022</h6> 
                                  
                                </div>
                          
                            </div>
                        </div>

         <>
          <div class="card w-100"  style={{marginTop: "0rem",}}>
   <div class="card-body">
      <h5 class="card-title">Created on: 03-Nov-2022</h5>
     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <a href="#" class="btn btn-primary">View More</a>   


    
   </div>
</div>
         
         </>              
        </>
    </div>
    <div
      className="tab-pane fade"
      id="pills-Shortlisted"
      role="tabpanel"
      aria-labelledby="pills-Shortlisted-tab"
    >
      {/* ...Shortlisted     */}
      <>
      
      <div>
      <div class="card w-100">
  <div class="card-body car11">           
  <i class="fa fa-file"></i>
    <h5 class="card-title">No courses shortlisted yet</h5>
    <p class="card-text">You have not shortlisted any course yet.</p>
    <a href="#" class="btn btn-primary">Shortlist Now</a>
  </div>
</div>
      </div>
      </>
    </div>     

    <div
      className="tab-pane fade"
      id="pills-Assigned-Staff"
      role="tabpanel"
      aria-labelledby="pills-Assigned-Staff-tab"
    >
      {/* ...Assigned Staff    */}

      <>
                        <h6>Studentx Staff</h6>
                      <Col xl={4} sm={6} xs={12} className='leftdata'>
                        <Card className="flex-fill insta sm-box box11">
                           

                           <img src='https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png' alt='avthr image' className='avthrimage' />      
                           <div className='realetion11'>
                           <h5>Bhargav sai</h5>
                           <span   className='spanda'>Client Executive</span>
                           <span ><i class="fa fa-phone"></i> +91 8885966556</span>  
                           </div>
                        </Card>
                    </Col>
      </>
    </div>
    <div
      className="tab-pane fade"
      id="pills-Transactions"
      role="tabpanel"
      aria-labelledby="pills-Transactions-tab"
    >
      ...Transactions  
    </div>

    <div
      className="tab-pane fade"
      id="pills-Bank"
      role="tabpanel"
      aria-labelledby="pills-Bank-tab"
    >
        {/* Bank Information */}
      {/* ...Bank Information    */}
       <>
       
       <div class="col-sm-3">
    <div class="card">
      <div class="card-body card-body1">
        <h6 class="card-title">Add New Account</h6>        


        <div className='dropzone'>
        

        <label htmlFor="file-input">
        <i class="fa fa-upload loade"></i>     
      </label>
      <input id="file-input" type="file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  </div></>
    </div>
  </div>
</>

    </div>
  )
}
