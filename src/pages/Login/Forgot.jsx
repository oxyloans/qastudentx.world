import React from 'react'

export default function Forgot() {
  return (
    <div>
   <h4 className="card-title title11">Forgot Password</h4>

   <div class="form-col">
    <div class="form-group col-md-11">
      {/* <label for="inputEmail4">Email</label> */}
      <input type="number" class="form-control"  id="inputEmail4" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
     
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
 


    </div>
  )
}
