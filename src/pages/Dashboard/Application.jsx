import React from 'react'
import { ButtonToolbar, Card,Tooltip,  Col, OverlayTrigger, Row } from 'react-bootstrap'
import './appliction.css'
import './profile.css'

import './nav.css'
import person from '../../assets/img/pesimage.png';
import { Link } from 'react-router-dom'
import Slideline from './Slideline'

export default function Application() {         

    const tooltip = (
        <Tooltip id="tooltip">
          <strong>Started & Submitted for options</strong> 
          <br></br> No Remarks
        </Tooltip>
      );
  return (
    <div>

        <>
        <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Application</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Application</li>
                            </ul>
                        </Col>
                    </Row>   <div className='applicahederbutton'>
                         <Link to="/newapplication"><button type='submit'  className='btn btn-primary'>New Application</button> </Link>   
                        <button type='submit'  className='btn btn-primary idbutton11'> <i class="bi-funnel"></i>  -Filter</button>
                     </div>

                        {/* <hr className='hrtags'/>     */}
                    
                    <div  className='showitemsresult'>
                        <h6 className='dropdofant'>Show result</h6>
        
             {/* <label for='number-dd'><b>Number</b></label> */}
             <select id='number-dd' name='number' style={{marginLeft: "10px",}}>
                 {/* <option value=''></option> */}
                 <option value='one'>25</option>
                 <option value='two'>50</option>
                 <option value='three'>100</option>
                 
             </select>     
               <p className='spantexshofilter'>Showing Results 1 to 1 of 1</p>
         </div>     


         <div class="card w-100  cardd11"  style={{marginTop: "1rem"}}>
         <div className="row align-items-center">
                                <div className="col-auto profile-image ">
                                    <a href="#">
                                        <img className="rounded imagedata11 imagedata1" alt="User Image" src={person}  />
                                    </a>  
                                    <p className='fontw'>Student ID: 37422</p>    
                                    <p className='fontw'>Application ID: 56520</p>
                                    {/* <p  className='idbutton11'>Application ID: 56520</p> */}
                                </div>
                                <div className="col ml-md-n2 profile-user-info ">
                                    <div className='buttontag'>
                                   
                                    <h5 className="textmau   textmau1">Gopal  M</h5>
                                   
                                   
                                    </div>
                                    
                                    <div>
                                        <span className='spantex'>DOB: 22-Jan-2000 |</span>
                                        <span className='spantex'> Male |</span>
                                        <span className='spantex'> Unmarried </span>
                                    </div>
                                    <span className='spantex'>Hyderabad, Telangana, India</span>   
                                    <div style={{display:'flex', flexDirection:'column'}}>  

                                    <span className='spantex'><i class="fa fa-phone"  style={{marginRight: "7px"}}></i> +91 8885956556</span>     
                                    <span className='spantex'><i class="fa fa-envelope" style={{marginRight: "7px"}}></i>  gopalm@gmail.com</span>
                                    <span className='spantex'style={{marginBottom: "1rem",}}>bhargav Rana (Study Advisor)</span>

                                    
                                    <span  className='spandata' >Cancel Withdrawn </span>
                                    </div>
                                
                                    {/* <div className="user-Location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, United States</div> */}
                                    {/* <div className="about-text">Lorem ipsum dolor sit amet.</div> */}
                                </div>     
                                <hr className='hrtags'/>   

<div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<h5  className='unolor'>Adler University, Canada</h5>

{/* <h6>Intake: Dec 2022</h6>        */}
</div>
<h6 className='in'><b>Intake:</b> Dec 2022</h6> 
                                {/* <div className="col-auto profile-btn">                                    
                                    <Link to="/edit" className="btn btn-primary">
                                        Edit
                                    </Link>
                                </div> */}
                            </div>      
                            {/* <div class="card w-100"  style={{marginTop: "0rem",}}>
                           <div class="card-body"> */}
                           <Slideline />     
                          
                            <div  className='showidhide'  style={{marginTop: "1rem", }}>


                            <div><p>
                           <div >
                              <div class="menu">
                                <button class="toggle" data-toggle="collapse" href="#collapseExample"  className='dropsele' aria-expanded="false" aria-controls="collapseExample">Contact Us</button>
                                
                              </div>
                            </div>
                            
                            </p>
                            <div className="collapse" id="collapseExample">
                              <div className="card card-body">
                                <div className='maindaata'>
                               <div className='clagrid'>
                                <div className='legrid'>
                                    <p className='prferloa' >PREFFERED COURSE , TUITION FEE AND StudentX GUARANTEED GRANT</p>    
                                    <p className='prferloa   prferloa1' >Master of Public Policy & Administration</p>
                                    </div>   
                                    <div></div>   
                                <div className='rigrid'>
                                    <p   className='prferloa'  >APPLIED COURSE , TUITION FEE AND StudentX GUARANTEED GRANT</p> <p className='prferloa   prferloa1' > Not Applied Yet</p></div>
                                    
                               </div>
                                <div  className='carddaa'>
                                <>
                
                      <Col xl={4} sm={6} xs={12} className='leftdata'>
                        <Card className="flex-fill insta sm-box box11">
                           
                                 <div style={{display:'flex',flexDirection:'column'}}>
                           <img src='https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png' alt='avthr image' className='avthrimage' />
                           <span className='textboxa'>Available</span>   </div>   
                           <div className='realetion11'>
                           <h5>Bhargav sai</h5>
                           <span   className='spanda'>StudentX India</span>
                           <span className='fontmoblie'><i class="fa fa-phone"></i> +91 8885966556</span>  
                           </div>
                        </Card>
                    </Col>   
                    <>
                       
                      <Col xl={4} sm={6} xs={12} className='leftdata'>
                        <Card className="flex-fill insta sm-box box11">
                           
                            <div  style={{display:'flex',flexDirection:'column'}}>
                           <img src='https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg' alt='avthr image' className='avthrimage' />  <span className='textboxa textboxa1'>Away</span>  </div>   
                           <div className='realetion11'>
                           <h5>Jyoti </h5>
                           <span   className='spanda'>Client Executive</span>
                           <span className='fontmoblie'><i class="fa fa-phone"></i> +91 8885966556</span>  
                           </div>
                        </Card>
                    </Col>    
                    <Col xl={4} sm={6} xs={12} className='leftdata'>
                        <Card className="flex-fill insta sm-box box11">
                           
                <div  style={{display:'flex',flexDirection:'column'}}>
                           <img src='data:image/jpeg;base64,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' alt='avthr image' className='avthrimage'/> <span className='textboxa textboxa3'>Away</span>  </div>        
                           <div className='realetion11'>
                           <h5>Gopal krishna</h5>
                           <span   className='spanda'>Destination Manager</span>
                           <span className='fontmoblie'><i class="fa fa-phone"></i> +91 8885966556</span>  
                           </div>
                        </Card>
                    </Col>
      </> 

                    
      </>
                                </div>
                               </div>
                              </div>
                            </div>
                            
                            <div  className='round11'>
                                <div className='round'>
                                <ButtonToolbar>
                         <OverlayTrigger placement="top" overlay={tooltip}>
                                    <i class="bi-info-circle"></i>
                                    </OverlayTrigger>
                       </ButtonToolbar></div>
                                <div className='round1'><ButtonToolbar>
                         <OverlayTrigger placement="top" overlay={tooltip}>
                         <i class="bi bi-chat-dots"></i>
                                    </OverlayTrigger>
                       </ButtonToolbar></div></div> </div>
                            </div>
                          </div>
                          
                       {/* </div> 
                            </div> */}
                    </div>   




                    </>
    </div>
  )
}
