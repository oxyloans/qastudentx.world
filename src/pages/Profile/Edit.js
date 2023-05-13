import React,{useState}from 'react';
// Import Components
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell ,faPlus} from '@fortawesome/fontawesome-free-solid'
import { Row, Col, Card, Alert, Breadcrumb, Button, ButtonGroup, ListGroup, Nav, Dropdown, DropdownButton, Pagination, ProgressBar, Tabs, Tab } from "react-bootstrap";
//Import Data Table
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {API_BASE_URL,ACCESS_TOKEN,BASE_URL, USERID, ROLES} from '../../../SocialLink';


import 'react-data-table-component-extensions/dist/index.css';
import axios from 'axios'
import { useEffect } from 'react';


function Edit(){
const[key,setkey]=useState(1)
  const [fname, setfname] = useState("");
  const[lname,setlname]=useState("");
  const[email,setemail]=useState("");
  const[mobile_number,setmobile_number]=useState("");
const[dob,setdob]=useState("");
const[pincode,setpincode]=useState("");
const[gender,setgender]=useState("");
const[city,setcity]=useState("");
const[address,setaddress]=useState("");
const[country,setcountry]=useState("");
const[state,setstate]=useState("");
const[organization,setorganization]=useState("");
const[designation,setdesignation]=useState("");
const[show,setShow]=useState(false);
const[Experience,setexperience]=useState("");
const[errormsg,seterrormsg]=useState();
const[ferror,setferror]=useState();
const[lerror,setlerror]=useState();
const[doberror,setdoberror]=useState();
const[pinerror,setpinerror]=useState();
const[gendererror,setgendererror]=useState(); 
const[cityerror,setcityerror]=useState();
const[addresserror,setaddresserror]=useState();
const[countryerror,setcountryerror]=useState();
const[stateerror,setstateerror]=useState();
const[organizationerror,setorganizationerror]=useState();
const[designationerror,setdesignationerror]=useState();
const[Experienceerror,setexperienceerror]=useState();

  const [educationdetails,seteducationdetails]=useState([{
    graduationType:"",
			qualification:"",
			college:"",
			specification:"",
			marks:"" ,
			yearOfPassing:"",
  }])
  
  const handleAddClick=()=> {
    seteducationdetails([...educationdetails,{graduationType:"",qualification:"",college:"",specification:"",marks:"",yearOfPassing:""}])
    // console.log(educationdetails);
  }

  const handleChange=(e,i)=>{
    const {name,value}=e.target
    const onChangeVal=[...educationdetails]
    onChangeVal[i][name]=value
    seteducationdetails(onChangeVal)
    // console.log(educationdetails)
  }
  const handlerChange=(e)=>{
    setexperience(e.target.value);	
    // console.log("Experience : ",e.target.value)
  }

	function handleOnchangefname(e)
    {
        setfname(e.target.value);	
								setferror();
				// console.log("first name : ",e.target.value)
    }
		function handleOnchangelname(e)
    {
        setlname(e.target.value);	
								setlerror();
				// console.log("Last name : ",e.target.value)
    }
    function handleOnchangeemail(e)
    {
        setemail(e.target.value);	
				// console.log("Email : ",e.target.value)
    }
		function handleOnchangenumber(e)
    {
        setmobile_number(e.target.value);	
				// console.log("Mobile Number : ",e.target.value)
    }
	  function handleOnchangecity(e)
    {
        setcity(e.target.value);	
								setcityerror();
				// console.log("City : ",e.target.value)
    }
		function handleOnchangestate(e)
    {
        setstate(e.target.value);	
								setstateerror();
				// console.log("State : ",e.target.value)
    }
		function handleOnchangecountry(e)
    {
        setcountry(e.target.value);	
								setcountryerror();
				// console.log("Country : ",e.target.value)
    }
    function handleOnchangeaddress(e)
    {
        setaddress(e.target.value);	
								setaddresserror();
				// console.log("Address : ",e.target.value)
    }
		function handleOnchangepincode(e)
    {
        setpincode(e.target.value);
								setpinerror();	
				// console.log("Pincode : ",e.target.value)
    }
		function handleOnchangedob(e)
    {
        setdob(e.target.value);	
								setdoberror();
        console.log("DOB : ",e.target.value)

//         let tempDate = new Date(e.target.value);
//         let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
// 				console.log("fDate : ",e.target.value)
// console.log(fDate)
// setdob(fDate);
    }
		function handleOnchangegender(e)
    {
        setgender(e.target.value);	
								setgendererror();
				// console.log("Gender : ",e.target.value)
    }
    function handleOnchangeorganization(e)
    {
        setorganization(e.target.value);
								setorganizationerror();	
				// console.log("Organization : ",e.target.value)
    }
		function handleOnchangedesignation(e)
    {
        setdesignation(e.target.value);	
								setdesignationerror();
				// console.log("Designation : ",e.target.value)
    }

				function handleOnchangeKey(e)
    {	
								if(key==1){
									if(fname==""){
										setferror("Please enter first name")
										return false;
									}
									if(lname==""){
										setlerror("Please enter last name")
										return false;
									}
									if(dob==""){
										setdoberror("Please enter DOB")
										return false;
									}
									if(address==""){
										setaddresserror("Please enter address")
										return false;
									}
									if(gender==""){
										setgendererror("Please enter gender")
										return false;
									}
									if(city==""){
										setcityerror("Please enter city")
										return false;
									}
									if(state==""){
										setstateerror("Please enter state")
										return false;
									}
									if(pincode==""||pincode==null){
										setpinerror("Please enter pincode")
										return false;
									}
									if(country==""||country==null){
										setcountryerror("Please enter country")
										return false;
									}
									setkey(e);
								}
				// console.log("Designation : ",e.target.value)
    }

				function handleChangeEducation(e){
					  if(key==2){
        if(educationdetails==""){
             setexperienceerror("please enter education details")
													return false;
								}
							}
				}




    // const getcall=()=>{
    //   const token=localStorage.getItem(ACCESS_TOKEN)
    //   const userId=localStorage.getItem(USERID)
    //   axios({
    //     method:"get",
    //     url:`https://meta.oxyloans.com/api/auth-service/user/me`,
    //       headers:{
    //         Authorization:`Bearer ${token}`,
    //       }
    //   })
    //   .then((response)=>{
    //     console.log(response.data);
        
    //     setemail(response.data.email)
    //     setmobile_number(response.data.mobileNumber)
       
    //     }
    //   )
    // .catch((error)=> {
    //   console.log(error.response);
    // })	

    // }


    const profilegetcall=()=>{
      const token=localStorage.getItem(ACCESS_TOKEN)
      const userId=localStorage.getItem(USERID)
      console.log(userId)
      axios({
        method:"get",
        url:`https://meta.oxyloans.com/api/student-service/user/profile?id=${userId}`,
          headers:{
            Authorization:`Bearer ${token}`,
          }
      })
      .then((response)=>{
        console.log(response.data);
        setfname(response.data.firstName)
        setlname(response.data.lastName)
        setemail(response.data.email)
        setmobile_number(response.data.mobileNumber)
        setdob(response.data.dob)
        setaddress(response.data.address)
        setgender(response.data.gender)
        setpincode(response.data.pincode)
        setcity(response.data.city)
        setorganization(response.data.organization)
        setdesignation(response.data.designation)
        seteducationdetails(response.data.educationDetailsModelList)
        setstate(response.data.state)
        setcountry(response.data.country)
        }
      )
    .catch((error)=> {
      console.log(error.response);
    })	

    }

    useEffect(()=>{
      profilegetcall();
      // getcall();
    },[])

 const profilesave=()=>{
	const token=localStorage.getItem(ACCESS_TOKEN)
	const userId=localStorage.getItem(USERID)
  console.log("================")
  console.log(userId)
  console.log(address,city,country,designation,dob,educationdetails,email,fname,gender,lname,mobile_number,organization,pincode,state)
  axios({
    method: 'patch',
    url: BASE_URL+'/student-service/user/profile/update',
    data:{
      
        address: address,
        city: city,
        consent: true,
        country: country,
        designation: designation,
        dob: dob,
        educationDetailsModelList:educationdetails,
        email:email,
        firstName: fname,
        gender: gender,
        lastName: lname,
        message: "",
        mobileNumber: mobile_number,
        organization: organization,
        pinCode: pincode,
        state:state,
        userId: userId
      },
    
      headers:{
        Authorization:`Bearer ${token}`,
      }
    
     })
     .then((response)=>{
      console.log(response.data);
      toast.success(`You have successfully submitted your details !`, {
        position: toast.POSITION.TOP_CENTER,
      })
      // this.setState({loading:!this.state.loading})

               }
     )
.catch((error)=> {
     console.log(error.response.data.error);
     errormsg=error.response.data.error;
     toast.error(errormsg, {
      position: toast.POSITION.TOP_CENTER,
    })
    //  this.setState({loading:!this.state.loading})

 })	
}

  return (
    <div>
        <div>
        <section className="comp-section comp-dropdowns">
        <div className="page-header"></div>
        <Row>
            <Col md={12}>
                <Card>
                    <Row>
                        <Col >
                            <h6 className="page-title" style={{margin:20}}>Your Profile</h6>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Tabs activeKey={key} >
                <Tab eventKey={1} title="Personal Details">
                <div className="card">	
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault01">First name</label> 	
                  <input type="text" className="form-control" id="validationDefault01" placeholder="First name"  onChange={handleOnchangefname} name="fname" value={fname} required/>
																		<span style={{fontSize:12,color:"red"}}>{ferror}</span>
                </div>
                
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault02">Last name</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Last name"   onChange={handleOnchangelname}  name="lname" value={lname} required/>
																		<span style={{fontSize:12,color:"red"}}>{lerror}</span>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault03">Email</label>
                    <input type="email" className="form-control" id="validationDefault03" placeholder="Email" onChange={handleOnchangeemail}  name="email" value={email} disabled required/>
                </div>
              </div>


               <div className="row">
                 <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">Mobile Number</label>
                  <input type="number" className="form-control" id="validationDefault04" placeholder="Mobile Number"  onChange={handleOnchangenumber}  name="mobile_number" disabled value={mobile_number} required />
                 </div>
                                        
               <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">Date Of Birth</label>
                  <input type="date" className="form-control" pattern="\d{1,2}/\d{1,2}/\d{4}" id="validationDefault05" placeholder="date"  onChange={handleOnchangedob}  name="dob" value={dob} required/>
																		<span style={{fontSize:12,color:"red"}}>{doberror}</span>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault06">Permenant Address</label>
                  <input type="text" className="form-control" id="validationDefault06" placeholder="Permenant Address"  onChange={handleOnchangeaddress} name="address" value={address} required/>
																		<span style={{fontSize:12,color:"red"}}>{addresserror}</span>
                </div>
              </div> 

               <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault07">Gender</label>
                  <div className="row" onChange={handleOnchangegender} value={gender} required>
                  <div class="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                    <label className="form-check-label" >Male</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" />
                    <label class="form-check-label" >Female</label>
                  </div>
																		<span style={{fontSize:12,color:"red"}}>{gendererror}</span>
                  </div>										
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault08">City</label>
                    <input type="text" className="form-control" id="validationDefault08" placeholder="City"  onChange={handleOnchangecity} name="city" value={city} required/>
																				<span style={{fontSize:12,color:"red"}}>{cityerror}</span>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault04">State</label>
                    <input type="text" className="form-control" id="validationDefault06" placeholder="State" onChange={handleOnchangestate} name="state" value={state} required />
																				<span style={{fontSize:12,color:"red"}}>{stateerror}</span>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault09">Zip</label>
                    <input type="number" className="form-control" id="validationDefault09" placeholder="Zip" min="0" max="6"  onChange={handleOnchangepincode} name="pincode" value={pincode} required/>
																				<span style={{fontSize:12,color:"red"}}>{pinerror}</span>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault10">Country</label>
                    <input type="text" className="form-control" id="validationDefault10" placeholder="country"  onChange={handleOnchangecountry}  name="country" value={country} required/>
																				<span style={{fontSize:12,color:"red"}}>{countryerror}</span>
                  </div>
              </div>

              {/* <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                  <label className="form-check-label" htmlFor="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div> */}
              {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
                <button className="btn btn-primary" type="submit" onClick={()=>handleOnchangeKey(2)}>Continue</button>
            
          </div>
        </div>
      </div>
    </div>
   </Tab>


   <Tab eventKey={2} title="Education Details">  
     <div className="card">	 
                {
           educationdetails.map((val,i)=>{
            return(
      <div className="card-body">
    
        <div className="row">
          <div className="col-sm">
           <div>
          <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Graduation Type</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Eg:UG" name='graduationType' onChange={e=>handleChange(e,i)}  value={val.graduationType} required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Qualification</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Eg:BTech" name='qualification' onChange={(e)=>handleChange(e,i)} value={val.qualification}  required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">College Name</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Eg:College name" name='college' onChange={(e)=>handleChange(e,i)} value={val.college} required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Specification</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Eg:CSE" name="specification" onChange={(e)=>handleChange(e,i)} value={val.specification}  required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefaultUsername">Year of Passing</label>
                    <input type="number" className="form-control" id="validationDefault03" placeholder="2023" name="yearOfPassing"  onChange={(e)=>handleChange(e,i)} value={val.yearOfPassing} required />
                </div>

                <div className="col-md-3 mb-3">
                 <label htmlFor="validationDefault03">Percentage/CGPA</label>
                <select className="form-select" required >
                  <option defaultValue="">Select Percentage/CGPA</option>
                  <option defaultValue="1">Percentage</option>
                  <option defaultValue="2">CGPA</option>

                </select>
                  </div>
                      <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Percentage/CGPA</label>
                  <input type="number" className="form-control" id="validationDefault02" placeholder="Enter Percentage/CGPA" name="marks" onChange={(e)=>handleChange(e,i)} value={val.marks} required />
                </div>
              </div>
              </div>                                                        
          </div>
        </div>
      </div>
            )
           }
         )} 
      <div style={{margin:30}} >						
          <a href="#" onClick={handleAddClick}>
            <FontAwesomeIcon icon={faPlus} /> <span>Add Education Details</span> 
          </a>
      </div>
    </div>
     <button className="btn btn-primary" type="submit" onClick={()=>setkey(1)} style={{marginRight:20}}>Previous</button>
    <button className="btn btn-primary" type="submit" onClick={()=>setkey(3)}>Save and Next</button>
</Tab>


  <Tab eventKey={3} title="Professional Experience">
      <div className="card">	
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            
            <div className="form-group row">
  
                <div className="row"  onChange={handlerChange}>
                  <div className="col-md-5 mb-3">
                    <label htmlFor="validationDefault02">Do you have Experience ?</label>
                  </div>
                  <div className="col-lg-6" >
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault1"
                      value="Yes"
                      />
                      <label className="form-check-label" htmlFor="yes">
                      Yes
                      </label>
                    </div>
                    
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault2"
                      value="No"
                      />
                      <label className="form-check-label" htmlFor="no">
                      No
                      </label>
                    </div>
                  </div>
              </div>


          {/* {this.state.isActive ? */}
          {Experience === "Yes"?(

            <div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="validationDefault02">Organization Name</label>
                </div>
                <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="validationDefault02" placeholder="Organization name"  onChange={handleOnchangeorganization} name="organization" value={organization} required/>											
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="validationDefault02">Job Position</label>
                </div>
                                        <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="validationDefault02" placeholder="Job Position" onChange={handleOnchangedesignation} name="designation" value={designation} required/>											
                </div>
              </div>

              </div>
          ):
          null}

          {/* :null} */}
            </div>
          
            <div>
              <button className="btn btn-primary" type="submit" onClick={()=>setkey(2)} style={{marginRight:20}}>Previous</button>
              <button className="btn btn-primary" type="submit" onClick={()=>profilesave()}>Save and Submit</button>
              <ToastContainer />
            </div>          
          </div>
        </div>
      </div>
    </div>	
  </Tab>

        </Tabs>                                
                    </Card.Body>
                </Card>
            </Col>
        </Row>                        
        </section>
        </div>

    </div>
)
}

export {Edit} 