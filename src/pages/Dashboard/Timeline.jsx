import React from 'react'

import './cardss.css';
import fi from '../../assets/img/finish.png'
import start from '../../assets/img/start.png'
import  './file.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Timeline() {         

 
  return (
    <div>
        <div className="card w-100 mb-3">

         
<h3 className='linestyle'>Student Timeline</h3> 

  <div className="card-body cardrow ">
  <div className='startima1'>
      <img src={start} alt='start image' className='startim' />
    </div>
     <div className='cardrow2'>
        <div className="card text-white  mb-3 xl-2 cardrow1" >
          <div className='centeri'>
        <div className='boxsh'><i class="fa fa-location-arrow" aria-hidden="true"></i></div>
        </div>
  <div className="card-body">
    <h5 className="card-title">Step: 1</h5>
    <p className="card-text">Signup</p>   
    <OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props} >
																																																Student sign-up and receives user account details in an e-mail
																																														</Tooltip>
																																												)}
																																											>
																																													<span className="text-end spantext11" style={{marginTop:-20,marginRight:10,color:'gray'}}>View More..</span>
																																											</OverlayTrigger>

  </div>
  </div>
  </div>

  <div  className='cardrow2'>
        <div className="card text-white  mb-3 cardrow1" >
        <div className='centeri'>
        <div className='boxsh boxsh2'><i class="fa fa-phone" aria-hidden="true"></i></div>
        </div>
  <div className="card-body">
    <h5 className="card-title">Step: 2</h5>
    <p className="card-text">Initial Call</p>
    <OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props} >
																																																Student receives initial call from StudentX client executive within 24hrs to know more about interest and qualifications to set up a meeting with resepective country study advisor
																																														</Tooltip>
																																												)}
																																											>
																																													<span className="text-end spantext11" style={{marginTop:-20,marginRight:10,color:'gray'}}>View More..</span>
																																											</OverlayTrigger> 
  </div>
  </div>
  </div>    
  <div  className='cardrow2'>
        <div className="card text-white  mb-3 cardrow1" >    
        <div className='centeri'>
        <div className='boxsh boxsh3'><i class='fa fa-book'></i></div>    
        </div>
  <div className="card-body">
    <h5 className="card-title" >Step: 3 </h5>
    <p className="card-text">Course Finalization</p>  
     
    <OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props} >
																																		   		Video call with a study advisor, and student to advise and finalize study options and to support in application on the portal
																																														</Tooltip>
																																												)}
																																											>
																																													<span className="text-end spantext11" style={{marginTop:-20,marginRight:10,color:'gray'}}>View More..</span>
																																											</OverlayTrigger>
  </div>
  </div>
  </div>


  <div  className='cardrow2'>
        <div className="card text-white  mb-3 cardrow1" >    
        <div className='centeri'>
        <div className='boxsh boxsh33'><i class='fa fa-clipboard'></i></div>
        </div>
  <div className="card-body">

   <h5 className="card-title">Step: 4</h5>
    <p className="card-text">Application Process</p>
    <OverlayTrigger
																																													placement="bottom"
																																													delay={{ show: 250, hide: 400 }}
																																													overlay={(props) => (
																																														<Tooltip {...props} >
																														  StudentX processes application,receives offer letter,admission confirmation and help to secure study visa
																																														</Tooltip>
																																												)}
																																											>
																																													<span className="text-end spantext11" style={{marginTop:-20,marginRight:10,color:'gray'}}>View More..</span>
																																											</OverlayTrigger>
     </div>
  </div>
  </div>
  
  <div className='startima1'>
      <img src={fi} alt='start image' className='startim' />
    </div>
  </div>  
</div>
    </div>
  )
}
