import React, { useState } from 'react'

import  './invate.css'
import axios from 'axios';
import { BASE_URL } from '../../../SocialLink';import Button from 'react-bootstrap/Button';import Modal from 'react-bootstrap/Modal';

export default function Invate() {    

  const[name1,setname]=useState("");
  const [success,setsuccess]=useState("")
  const[email,setEmail]=useState("");
  const[moblie,setMoblie]=useState("");

  const[errmessage,seterrmessage]=useState("");    const [mobileNumbererror,setmobileNumbererror]=useState("");
  const [EmailError,setEmailError]=useState("");
  const [NameError,setNameError]=useState(""); const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const validateName = () => {
    if (name1.trim() === '') {
      setNameError('name is required.');
      return false;
    }
    setNameError('');
    return true;
  };


  // const validateEmail = (email) => {
  //   // Email validation regular expression

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setEmailError("Please enter a valid email address");
   
  //     return false;
  //   }else {
  //     setEmailError("");
  //     return true;
  //   }
  // };    

  const validateMobileNumber = () => {
   
    const regex = /^[1-9]\d{9}$/;

    if (!regex.test(moblie)) {
      setmobileNumbererror('enter vaild mobile number');
      return false;
    }

    setmobileNumbererror('');
    return true;
  };
  
  const handleclick=(e)=>{
    e.preventDefault();
    // handleShow()
    const NameValid = validateName();
    // const Emailvaild = validateEmail();
    const vaildMoblie = validateMobileNumber();


        if (NameValid  && vaildMoblie ) {

    const userId=localStorage.getItem("userId")
    const token=localStorage.getItem("accessToken")


//    var dat={
//     email: email,
//     mobileNumber: moblie,
//     name: name1,
//     refereeSource: "STUDENTX",
//     referrerId: userId
// }
    axios({
      method:'post',
      url:BASE_URL+'/user-reference/student/invite-a-user',
      headers: {
        "Authorization":`Bearer ${token}`
      },
      data:{
        email: email,
        mobileNumber: moblie,
        name:  name1,
        refereeSource: "STUDENTX",
        referrerId: userId
    }
    }).then((res)=>{
        alert(res.data.message)
       
        setsuccess(res.data.message)
        setShow(true)
        
    }).catch((error)=>{
      seterrmessage(error.response.data.message)
      setShow(true)
    })      

  }
  }    
  return ( 

    <>
    <div  className='getstay'>
  
   
                    <input type="text" className="form-control col-md-12 mb-12 col-xl-4 col-lg-4" id="validationDefault03" placeholder=" Name"  name="email"   required  onChange={(e) => setname(e.target.value)}/>  
                    {NameError  && <div className='error'>{NameError} </div>}
                    <input type="email" className="form-control" id="validationDefault03" placeholder="Email"  name="email"  onChange={(e) => setEmail(e.target.value)}   required/>     
                    {EmailError  && <div className='error'>{EmailError} </div>}
                    <input type="number" className="form-control" id="validationDefault03" placeholder="Moblienumber"  name="email" onChange={(e) => setMoblie(e.target.value)}   required/>
                    {mobileNumbererror  && <div className='error'>{mobileNumbererror} </div>}
                

            

                 
    </div>
    <div className=' btn btn-primary button1 butto' onClick={handleclick}  >Invite Student</div> 
 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errmessage  && <div className="error">{errmessage}</div>}
          {success && <div className="succees-message">Invited {success}</div>}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
 </>
  )
}
