import React,{useState,useEffect} from 'react';
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import person from '../../assets/img/pesimage.png';
import { Link } from 'react-router-dom';
import './profile.css'
import Tabnav from './Tabnav';
import UploadAndDisplayImage from '../UploadAndDisplayImage';
import {BASE_URL} from "../../../SocialLink";
import axios from "axios"

export default function Copyprofile() {

const[userData,setuserData]=useState([]); const [form ,setform]=useState(true);
const[errormessage,seterrormessage]=useState();
const[successmessage,setsuccessmessage]=useState();
const[userfirstName,setuserfirstName]=useState();


const [moblie ,setmoblie]=useState()

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


const handleshow =()=>{

}

const handleupdate =()=>{


    const token=localStorage.getItem("accessToken");

    const email=userData.email;
    const userId=localStorage.getItem("userId")
    axios({
        method:"patch",
        url:BASE_URL+`/auth-service/user/creds-update?email=${email}&id=${userId}&mobileNumber=${moblie}`,
        headers:
        {
            Authorization:`Bearer ${token}`,
        },
        }).then((res)=>{
            setsuccessmessage(res.data)
            setform(false)
        }).catch((error)=>{
            seterrormessage(error.response.data.message)
            setform(false)
        })

}
useEffect(()=>{
    getcall();
},[])




  return (
    <div>
        <>
        
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

                    
                    <div className="profile-header"> 
                            <div className="row align-items-center">
                                <div className="col-auto profile-image ">
                                    {/* <a href="#">
                                        <img className="rounded imagedata11"   id="imagePreview" alt="User Image" src={person}  />
                                    </a> */}
                                    <UploadAndDisplayImage />
                                </div>
                                <div className="col ml-md-n2 profile-user-info ">
                                    
                                    <h4 className="textmau">{userfirstName}</h4>
                                    <div className='spadiv'>
                                        <span className='spadata'>DOB: {userData.dob} | </span>
                                        <span className='spadata'>{userData.gender} </span>
                                        {/* <span className='spadata'> Unmarried </span> */}
                                    </div>
                                {userData.address!="" && userData.address!=null?
                                    <span  className='spadata'>{userData.address}</span>   
                                :null}

                                    <div style={{display:'flex', flexDirection:'column'}}>  

                                    <span className='textlevfont'><i class="fa fa-phone" ></i> +91 {userData.mobileNumber}  <i class="bi bi-pencil  pencil1"   data-toggle="modal" data-target="#exampleModal" onClick={handleshow}>...</i></span>     
                                    <span className='textlevfont'><i class="fa fa-envelope"> </i> {userData.email}</span>
                                    </div>
                                    
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
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:"bold"}}>Update Your Moblie Number!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
      {form ? <> <div className="modal-body">
      <div class="form-group col-md-5 col-xl-8 col-lg-8">
                      {/* <label for="inputEmail4">Last Name *</label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="email *"
                        value={userData.email}
                      />
                      
                    </div>


       <div class="form-group col-md-5 col-xl-8 col-lg-8">
                      {/* <label for="inputEmail4">Last Name *</label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Moblie number*"
                        onChange={(e) => setmoblie(e.target.value)}
                      />
                      
                    </div>
      {errormessage  && <div className='error'>{errormessage}</div>}
      </div></>  :
       <div className="modal-body">
       {successmessage  &&  <div className='suceess'>moblie number successfully  {successmessage}</div>}
       {errormessage  && <div className='error'>{errormessage}</div>}
       </div>}
     
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      {successmessage ? <></> : <button type="button" className="btn btn-primary"  onClick={handleupdate}>Update</button>} 
      </div>
    </div>
  </div>
</div></>  
                <Tabnav />
    </div>
  )
}
