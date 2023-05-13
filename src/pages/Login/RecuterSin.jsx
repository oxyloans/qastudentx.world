import React, { useState } from 'react'
import "./logsati.css";


import "./logsati.css";
import { GOOGLE_AUTH_URL } from '../../../SocialLink';
export default function RecuterSin() {
  const[recuter,setrecuter]= useState(true)
    const [state,setState]=useState("");
    const [countryerror,setcountryerror]=useState("");
    const [noofemp,setnoofemp]=useState("");
    const [stateerror,setStateerror]=useState("");
    const [country,setCountry]=useState("");


   const  handlenextRe=()=>{
    
  alert("")
  

    setrecuter(true)
    }

    const handlerecuter=()=>{
      // window.location.reload();  
  }
    const handlestudent=()=>{
      window.location.reload()
    }

    const handlenextSubmit=()=>{

    }
    
  return (
    <div>

<div>
                
            {recuter ?     <>             
                               <div className="form-row   form-row11">
                                
                             <div class="form-group col-md-5 marlefor">
                                   {/* <label for="inputEmail4">First Name *</label> */}
                                   <select
                                     type="text"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="No. of Employees  *"
                                     onChange={(e) => setNoOfEmp(e.target.value)}
                                   >
                                  <option defaultValue="">No of Emps *</option>
                                   <option value="10">10</option>
                                   <option value="20">20</option>
                                   <option value="100">100</option>
                                
                                   </select>
                                      {noofemp && <div className="error">{noofemp}</div>}
                                 </div>
                                 <div class="form-group col-md-5">
                                   {/* <label for="inputEmail4">Last Name *</label> */}
                                   <select
                                     type="text"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="Country **"
                                     onChange={(e) => setCountry(e.target.value)}
                                     >
                                  <option defaultValue="">Country *</option>
                                   <option value="india">india</option>
                                   <option value="USA">USA</option>
                                   <option value="UK">UK</option>
                                
                                   </select>
                                       {countryerror && <div className="error">{countryerror}</div>}
                                 </div>   
                                 <div class="form-group col-md-5 marlefor">
                                   {/* <label for="inputEmail4">First Name *</label> */}
                                   <select
                                     type="text"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="No. of Employees  *"
                                     onChange={(e) => setNoOfEmp(e.target.value)}
                                   >
                                  <option defaultValue="">State * </option>
                                   <option value="10">10</option>
                                   <option value="20">20</option>
                                   <option value="100">100</option>
                                
                                   </select>
                                      {noofemp && <div className="error">{noofemp}</div>}
                                 </div>

                                   <div class="form-group col-md-5">
                                   {/* <label for="inputEmail4">First Name *</label> */}
                                   <select
                                     type="text"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="No. of Employees  *"
                                     onChange={(e) => setNoOfEmp(e.target.value)}
                                   >
                                  <option defaultValue="">City *</option>
                                   <option value="10">Dehil</option>
                                   <option value="20">Mub</option>
                                   <option value="100"></option>
                                
                                   </select>
                                      {noofemp && <div className="error">{noofemp}</div>}
                                 </div> 
                                 </div>
                                 <div class="form-col">
                               <div class="form-group col-md-11">
                                   {/* <label for="inputEmail4">Email  *</label> */}
                                   <input
                                     type="email"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="Company Name  *" 
                                         
             
                                     onChange={(e) => setAddress(e.target.value)}
                                   />
                                 </div>
                              
                              
                                </div>
                               <div class="form-col">
                               <div class="form-group col-md-11">
                                   {/* <label for="inputEmail4">Email  *</label> */}
                                   <input
                                     type="email"
                                     class="form-control"
                                     id="inputEmail4"
                                     placeholder="Address *" 
                                         
             
                                     onChange={(e) => setAddress(e.target.value)}
                                   />
                                 </div>
                              
                              
                                </div>
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
                                       href="#"
                                       className=" form-group col-md-12 btn btn-outline-warning "
                                     >
                                       Recruiter
                                     </a>
                                   </div>
                                   <div class="form-group col-md-6">
                                     <a
                                       onClick={()=>window.location.reload()}
                                       className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1"
                                     >
                                       Student
                                     </a>
                                   </div>
                                 </div>
                               </>    :<>  <div className="form-row   form-row11">
                                
                                <div class="form-group col-md-5 marlefor">
                                      {/* <label for="inputEmail4">First Name *</label> */}
                                    
                                         {noofemp && <div className="error">{noofemp}</div>}
                                    </div>
                                
                                  
   
                                 
                                    </div> 
                                    <div className='impor1 '>
                              
                                  <div class="form-group col-md-6 col-xl-5 col-lg-5">
                                      {/* <label for="inputEmail4">Email  *</label> */}
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder="Contact Person *" 
                                            
                
                                        onChange={(e) => setcontactPerson(e.target.value)}
                                      />
                                    </div>
                               
                                  <div class="form-group  col-md-6  col-md-6 col-lg-6">
                                      {/* <label for="inputEmail4">Email  *</label> */}
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder="Designation  *" 
                                            
                
                                        onChange={(e) => setdesignation(e.target.value)}
                                      />
                                    </div>
                                 
                                
                                   </div>
                                   <div class="form-col">
                                  <div class="form-group col-md-11">
                                      {/* <label for="inputEmail4">Email  *</label> */}
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder="Email  *" 
                                            
                
                                        onChange={(e) => setemail(e.target.value)}
                                      />
                                    </div>
                                 
                                 
                                   </div>
                                   <div class="form-col">
                                  <div class="form-group col-md-11">
                                      {/* <label for="inputEmail4">Email  *</label> */}
                                      <input
                                        type="number"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder="Moblie  *" 
                                            
                
                                        onChange={(e) => setmoblie(e.target.value)}
                                      />
                                    </div>
                                 
                                 
                                   </div>
                                  <div class="form-col">
                                  <div class="form-group col-md-11">
                                      {/* <label for="inputEmail4">Email  *</label> */}
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder="Address *" 
                                            
                
                                        onChange={(e) => setAddress(e.target.value)}
                                      />
                                    </div>
                                 
                                 
                                   </div>
                                    <div class="form-group col-md-11">
                                      <button
                                        className=" form-group col-md-12 btn btn-primary  btn-outline-warni wanin"  
                                        onClick={handlenextSubmit}
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
                                          onClick={handlerecuter}
                                          className=" form-group col-md-12 btn btn-outline-warning "
                                        >
                                          Recruiter
                                        </a>
                                      </div>
                                      <div class="form-group col-md-6">
                                        <a
                                          // href="#"   
                                          onClick={()=>window.location.reload()}
                                          className=" form-group col-md-12 btn btn-outline-warning btn-outline-warning1"
                                        >
                                          Student
                                        </a>
                                      </div>
                                    </div></> }
                 </div>
    </div>
  )
}
