import React, { useState } from "react";

import "./logsati.css";
import Logo from "../../assets/img/removewhite.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import images from "../../assets/img/loginpageq.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, GOOGLE_AUTH_URL } from "../../../SocialLink";
import RecuterSin from "./RecuterSin";

export default function Regist() {       
  const [display ,setdisplay] =useState(true);
  const [selectedOption,setselectedOption]=("")
  const [otperror,setotperror]=useState("")
  const [email,setemail]=useState("");
  const [firstName,setfirstName]=useState("");
  const [error,seterror]=useState("");
  const[student,setstudent]=useState(true)
  const[successmassge,setsuccessmassge]=useState("");   
  const [gender,setgender]=useState("");
  const [firstNameError,setfirstNameError]=useState("")
  const [moblieNumberError,setmoblieNumberError]=useState("")
  const [mobileOtpsession,setmobileOtpsession]=useState("")
  const[lasNameError,setlasNameError]=useState("")
  const [lastName,setlastName]=useState("");
  const [middleName,setmiddleName]=useState("");
  const [mobileOtp,setmobileOtp]=useState("");
  const[EmailError,setEmailError]=useState("");
  const[mobileNumbererror,setmobileNumbererror]=useState("");
  const[PasswordError,setPasswordError]=useState("");
  const [otpSession,setotpSession]=useState("");
  const [mobileNumber,setmobileNumber]=useState("");      const [password1,setpassword1]=useState("");
  const [password,setpassword]=useState("");
  const history=useHistory();





  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  const hanlderecter =()=>{
    setstudent(false)
  }

  const hanldestudent =()=>{
    setstudent(true)
  }
  const validateFirstName = () => {
    if (firstName.trim() === '') {
      setfirstNameError('First name is required.');
      return false;
    }
    setfirstNameError('');
    return true;
  };

  const validateLastName = () => {
    if (lastName.trim() === '') {
      setlasNameError('Last name is required.');
      return false;
    }
    setlasNameError('');
    return true;
  };     


  const handleDropdownChange = (e) => {
    setstudent(e.target.value === 'true');
    
  };
  const validateEmail = (email) => {
    // Email validation regular expression

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      setLoding(false)
      return false;
    }else {
      setEmailError("");
      return true;
    }
  };



  const validatePassword = (password) => {
    // Password validation regular expression
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number");
      setLoding(false)
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };        

  const validateMobileNumber = () => {
   
    const regex = /^[1-9]\d{9}$/;

    if (!regex.test(mobileNumber)) {
      setmobileNumbererror('Invalid mobile number');
      return false;
    }

    setmobileNumbererror('');
    return true;
  };

  const validateotp = () => {
   
    const regex = /^[1-9]\d{6}$/;

    if (!regex.test(mobileOtp)) {
      setotperror('Enter 6 digit otp number');
      return false;
    }

    setotperror('');
    return true;
  };

  const handlenextRe=(e)=>{
    e.preventDefault();
        const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const ismoblienumbervaild = validateMobileNumber();

    

        if (isFirstNameValid && isLastNameValid && ismoblienumbervaild ) {
          // alert(mobileNumber)
      var data1={
        mobileNumber: mobileNumber,
        templateName: "STUDENTX"
      }

        axios({
          method:"post",
          url:BASE_URL+'/auth-service/user/send-mobile-otp?type=check',
          data:data1
        })
        .then((res)=>{
          
          setmobileOtpsession(res.data.mobileOtpSession)
          // setsuccessmassge("OTP sent successfully to your mobile number")
           setdisplay(false);           
        }).catch((error)=>{
          // alert(error)
          seterror(error.response.data.message)
          setdisplay(false);
        })
      }
       
  }
  const showPass =()=>{
  
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }   

 const  handleclick=()=>{
  const ispassvaild=validatePassword(password)
        // alert(mobileOtp)
        // alert(mobileOtpsession)

  if ( ispassvaild) {

  var data={
    alternativeMobile: mobileNumber,
    email: email,
    firstName: firstName,
    gender: gender,
    lastName: lastName,
    middleName: "",
    mobileOtp: mobileOtp,
    otpSession: mobileOtpsession,
    mobileNumber:   mobileNumber,
    password: password,
    profileImage: "",
    proofNumber: "",
    proofPath: "",
    roleId: "784953ca-ee52-49ca-ad7d-3848c8b791fd"}
     
    axios({
      method:'post',
      url:BASE_URL+'/auth-service/auth/sign-up',
      data:data
    }).then((res)=>{
      // alert(res.data.message)
      setsuccessmassge(res.data.message)
      setShow(true)
      setsuccessmassge("successfully completing your registration! ")
      setTimeout(() => {
          history.push("/")
      }, 2000);
    }).catch((error)=>{
      // alert(error.response.data.message)
      setShow(true)
      seterror(error.response.data.message)
      
    })
  }

}
  return (
    <>
      <div className="mainbologin">
        <nav className="navbar navbar-expand-lg navbarrr">
          <div className="container-fluid grid-container  ">
            <img src={Logo} alt="imagelogo" className="imagelogo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse marginn"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    className="nav-link active  navbar-brand1"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link active  navbar-brand1"
                    aria-current="page"
                    href="#"
                  >
                    Institution
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link active  navbar-brand1"
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link active  navbar-brand1"
                    aria-current="page"
                    href="#"
                  >
                    Course Finder
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link active  navbar-brand1"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active navbar-brand1" href="#">
                    Course Finder
                  </a>
                </li>
                <li className="nav-item ">
                  {/* <a
        className="nav-link disabled"
        href="#"
        tabIndex={-1}
        aria-disabled="true"
      >
        Disabled
      </a> */}
                </li>
              </ul>
              <Link to="/">  <button className="btn btn-primary buttan1" type="submit">
                Login
              </button></Link>
            
            </div>
          </div>
        </nav>
        <div className="locontainer">
          <div className="locontex">
            <img src={images} alt="backgroungima" className="textalign" />
             
             <div className="imageunhe">
                    
                    <h3 className="hedundeimag">Create your StudentX account</h3>  
                    <p></p>
             </div>
            
          </div>
          <div className="locontex1">  
          <div className="card  col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
            {/* <div className="card  col-xl-10 col-lg-8 col-md-12 col-sm-12"> */}
              <div className="card-body">
                <h4 className="card-title"   style={{fontSize:'23px',width:'9rem'}}>Signup</h4>
                {/* <p></p> */}
                {/* <span>
                <select class="form-control   form-control11"  >
                <option value="1">As a Student</option>
                <option value="2">As a Recruiter</option>
                </select>   
                </span> */}  
              <select
      className="form-control form-control11"
      value={student.toString()} // Convert boolean to string for value comparison
      onChange={handleDropdownChange}
    >
      <option value="true">As a Student</option>
      <option value="false">As a Recruiter</option>
    </select>

{/*                 
                <p className="textpera">
                    Step 01 of 03
                </p> */}
              {student ? <>  <form>   
                  <>
                  {display ?  <>             
                  <div className="form-row   form-row11">
                <div class="form-group col-md-5 marlefor">
                      {/* <label for="inputEmail4">First Name *</label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="First Name *"
                        onChange={(e) => setfirstName(e.target.value)}
                      />  
                         {firstNameError && <div className="error">{firstNameError}</div>}
                    </div>
                    <div class="form-group col-md-5">
                      {/* <label for="inputEmail4">Last Name *</label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Last Name *"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                          {lasNameError && <div className="error">{lasNameError}</div>}
                    </div>
                    </div>
                  <div class="form-col">
                  <div class="form-group col-md-11">
                      {/* <label for="inputEmail4">Email  *</label> */}
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email *"     

                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-11  martopp">
                      {/* <label for="inputEmail4">Moblie Number  *</label> */}
                      <input
                        type="number"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Moblie Number "
                        onChange={(e) => setmobileNumber(e.target.value)}
                      />
                          {mobileNumbererror && <div className="error">{mobileNumbererror}</div>}
                    </div>
                 
                 

                    <div  style={{display:'flex',flexDirection:'row'  , gap:'10px' ,marginBottom: "6px",  marginLeft: "1rem",}}> Gender
                      <div className="form-check" >
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  value="Female" onChange={(e) => setgender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male"  onChange={(e) => setgender(e.target.value)} />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                      Male
                    </label>
                  </div></div>
                    <div class="form-group col-md-11">
                      <button
                        className=" form-group col-md-12 btn btn-primary  btn-outline-warni wanin"  
                        onClick={handlenextRe}
                      >
                        Next
                      </button>
                      <p className="paddfr">
                        Forgot your password?
                        {/* <a href="#" className="textcolort">
                          Reset here{" "}
                        </a> */}
                      </p>
                    </div>


                    <a href={GOOGLE_AUTH_URL} className="google"> <div className='googlesin' ><img src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="imageofgoogle"   className='imageofgoogle'  /> <span className='spansi'>Sign up with Google</span>   </div></a>
                    <div className="havregster">
                      <h6>Don’t have an account? Create Account</h6>
                    </div>
                    {/* <p className="textpera textpera11">Signup as a</p>     */}
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <a
                          onClick={hanlderecter}
                          className=" form-group col-md-12 btn btn-outline-warning "
                        >
                          Recruiter
                        </a>
                      </div>
                      <div class="form-group col-md-6">
                        <a
                          onClick={hanldestudent}
                          className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1"
                        >
                          Student
                        </a>
                      </div>
                    </div>
                  </div></> :<>   
                
                  <div class="form-group col-md-11">
                      {/* <label for="inputEmail4">OTP  *</label> */}
                      <input
                        type="number"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="otp.. *"
                        maxLength={6}
                        onChange={(e) => setmobileOtp(e.target.value)}
                      />      {otperror && <div  className="error" >{otperror}</div>}
                    </div> 
                  <div class="form-group col-md-11  martopp">
                      {/* <label for="inputEmail4">Moblie Number  *</label> */}
                      <input
                        type="password"
                        class="form-control"
                        
                        // id="inputEmail4"
                        
                        id="password-field1"
                        name="password"
                        placeholder="PassWord "
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                           <span toggle="#password-field1" class="fa fa-fw fa-eye field-icon toggle-password  passwordss" onClick={showPass}></span>
                    </div>      {PasswordError && <div  className="error" >{PasswordError}</div>}
                    <div class="form-group col-md-11">
                      {/* <label for="inputEmail4">OTP  *</label> */}
                      <input
                        type="password"
                        class="form-control"  
                       
                        name="password"

                        id="password-field"
                        placeholder="confirm password"
                        value={password}
                        onChange={(e) => setpassword1(e.target.value)}
                      />
                           <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password  passwordss" onClick={showPass}></span>
                    </div>         
                    <div class="form-group col-md-11">
                      {/* <label for="inputEmail4">Date of B  *</label> */}
                      <input
                        type="date"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Dob *"
                      />
                    </div>
                    <div class="form-group col-md-11">
                      <a
                        href="#"   onClick={handleclick}
                        className=" form-group col-md-12 btn btn btn-primary  btn-outline-warni wanin"
                      >
                        Submit
                      </a>
                      {/* <a href="#" className="textcolort"> <p>
                        Forgot your password?
                      </p></a> */}
                    </div>

                    <div className="havregster">
                      <h6>Don’t have an account? Create Account</h6>
                    </div>
                    <p className="textpera textpera11">Signup as a</p>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <a
                          onClick={hanlderecter}
                          className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1"
                        >
                          Recruiter
                        </a>
                      </div>
                      <div class="form-group col-md-6">
                        <a
                          onClick={hanldestudent}
                          className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1"
                        >
                          Student
                        </a>
                      </div>
                    </div>
                  
                    </>}  </>
                    </form></> : <> <RecuterSin /></>}    
                    
                   
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      <Button variant="primary" onClick={handleShow}>
      {show && "OOPS!!!"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
         {erorr && <Modal.Title>!opps</Modal.Title>} 
        </Modal.Header> */}
        <Modal.Body>
          {error  && <div className="error">{error}</div>}
          {successmassge && <div className="succees-message">{successmassge}</div>}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      </div>
    </>
  );
}
