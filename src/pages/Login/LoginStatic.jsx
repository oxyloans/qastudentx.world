import React, { useEffect, useState } from 'react'


import './logsati.css'
import Logo from '../../assets/img/removewhite.png';
import images from '../../assets/img/websitehome.png'
import { Link,  useHistory,  useLocation,  } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, GOOGLE_AUTH_URL } from '../../../SocialLink';
import Forgot from './Forgot';

export default function LoginStatic() {
     
     const [mobileNumber,setmobileNumber]=useState(email);
     const [email,setemail]=useState("");
     const [password,setpassword]=useState("");
     const [successmassge,setsuceessmassge]=useState("")
    
     const [loading,setLoding]=useState(false);
     const[emailerror,setEmailError]=useState("")
     const [login ,setlogin]=useState(true);
     const [error,seterror]=useState("")
     const[mobileNumbererror,setmobileNumbererror]=useState("")
     const[passworderror,setPasswordError]=useState("")
     const location = useLocation();
     const history=useHistory();


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



  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get('token');
    // Do something with the accessToken parameter
    console.log(accessToken);
    localStorage.setItem("accessToken", accessToken)

    if(accessToken== null){
  //  alert("nu")
    }else{
      // alert("notnull")
      history.push("/dashboard")
    }
  }, [location]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoding(true)

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

    
    const validateMobileNumber = (mobileNumber) => {

      const regex = /^\d{10}$/;
      if (!regex.test(mobileNumber)) {
        setmobileNumbererror("Enter  moblie number");
        setLoding(false)
        return false;
      } else {
        setmobileNumbererror("");
        return true;
      }
    };     
    
  //   if(email.length == 10){
  //     alert("moblie")
  //   if(validateMobileNumber(mobileNumber) && validatePassword(password)){
  //     alert("moblie")
  //     var data={
  //       "moblieNumber":email,
  //       "password": password
  //     }
  //   }
  // } 
  //   if (validateEmail(email)  && validatePassword(password)) {
  //     // code to execute if email or mobile number is valid and password is valid

  //        alert("email")   
  //     var data={
  //       "email":email,
  //       "password": password
  //     }
  //   }


  if (email.length === 10) {
    // Mobile login
    if (validateMobileNumber(email) && validatePassword(password)) {
      // Code for mobile login
      // alert("valid mobile number or password.");
      var data = {
        "mobileNumber": email,
        "password": password
      };
      // Additional code here
    } else {
      // Invalid mobile number or password
      seterror("Invalid mobile number or password.");
    }
  } else {
    // Email login
    if (validateEmail(email) && validatePassword(password)) {
      // Code for email login
      var data = {
        "email": email,
        "password": password
      };
      // Additional code here
    } else {
      // Invalid email or password
        // alert("Invalid email or password.");
    }
  }
  
    axios({
      method:"post",
      url:BASE_URL+'/auth-service/auth/sign-in',
      data:data

    }).then((response)=>{  
      // alert(response.data.userId) 
      setsuceessmassge("Congratulations! Login Successful!")
      console.log(response.data)
      localStorage.setItem("accessToken", response.data.accessToken)
      localStorage.setItem("userId", response.data.userId)
      localStorage.setItem("Roles",response.data.roles[0].name)
      setTimeout(() => {
      history.push("/dashboard");
      }, 2000);
      
    
        })
                 .catch((error)=>{
                  seterror(error.response.data.message)
                  // alert({passworderror})
                  // alert(error)
                  setLoding(false)
                 })
                }



  
 
  return (
    <>
        <div  className='mainbologin'>
    
  {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark  navbarrr"> */}
  <nav className="navbar navbar-expand-lg  navbarrr">
  <div className="container-fluid grid-container  ">      


  <img  src={Logo}  alt='imagelogo'    className='imagelogo' />
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
    <div className="collapse navbar-collapse marginn" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
      <li className="nav-item">
          <a className="nav-link active  navbar-brand1" aria-current="page" href="https://studentx.world/">
          Home
          </a>
        </li>   
        <li className="nav-item">
          <a className="nav-link active  navbar-brand1" aria-current="page" href="https://studentx.world/index.html#popular">
          Institution
          </a>
        </li>  
        <li className="nav-item">
          <a className="nav-link active  navbar-brand1" aria-current="page" href="#">
          Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  navbar-brand1" aria-current="page" href="#">
          Course Finder
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  navbar-brand1" aria-current="page" href="#">
          Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active navbar-brand1" href="#">
          Course Finder
          </a>
        </li>
        <li className="nav-item">
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
      <Link to="register"> <button   className='btn btn-primary  btn-outline-warni wanin' type='submit'>Signup</button> </Link>
     
    </div>

  </div>
</nav>      
    <div  className='locontainer'>
        <div className='locontex'>

          <img src={images}   alt='backgroungima' className='textalign'   />
        </div>
        <div  className='locontex1'>

        <div className="card  col-xl-9 col-lg-9col-md-12 col-sm-12 boxbutt">
  <div className="card-body">
  {login ? <>   <h4 className="card-title title11">LOGIN</h4>
  
  <form>
  <div class="form-col">
    <div class="form-group col-md-11">
      {/* <label for="inputEmail4">Email</label> */}
      <input type="text" class="form-control"  id="inputEmail4" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
      {emailerror && <div className="error-message">{emailerror}</div>}   {mobileNumbererror && <div className="error-message">{mobileNumbererror}</div>}
    </div>
    <div class="form-group col-md-11">
      {/* <label for="inputPassword4">Password</label> */}
      <input id="password-field" type="password" class="form-control" name="password"  placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password  passwordss" onClick={showPass}></span>
  </div>
  {passworderror && <div className="error-message">{passworderror}</div>}
  <div class="form-group col-md-11">    
  {successmassge  && <div className="succees-message">{successmassge}</div>}
  {error  && <div className="error-message">{error}</div>}
  
  <Link onClick={handleSubmit} className=" form-group col-md-12 btn btn-primary  btn-outline-warni"> {loading ? <><span className="spinner-border spinner-border-sm me-2" role="status"></span>  </> :<>Login</>}	</Link>  
      {/* <a href="#" className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1">Button</a>          */}
     <div className='googlemain'><a  href="#" className="textcolort" ><p onClick={()=>setlogin(false)}>Forgot your password?</p></a>  
      </div> 
    </div>
    <a href={GOOGLE_AUTH_URL} className="google"> <div className='googlesin' ><img src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="imageofgoogle"   className='imageofgoogle'  /> <span className='spansi'>Sign up with Google</span>   </div></a>
    <div className='havregster' >
      <h6>Don’t have an account? Create Account</h6>
    </div>
    {/* <p className='textpera textpera11' >Signup as a</p>     */}
    <div class="form-row">
    <div class="form-group col-md-6">
     
     <Link to="/register" className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1">Recruiter</Link>         
     
   </div>
   <div class="form-group col-md-6">
     
     <Link to="/"  className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1">Student</Link>         
     
   </div>



    </div>
  </div>
  </form>
                              </> :  <><Forgot /></>}
    </div>

</div>
        </div>
      </div>   
</div>
<div> 
      </div>


    </>
   
  )
}
