import  './ringbell.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


export default function RingBell(props) {     

    const [smShow, setSmShow] = useState(false);
    
  return (
    <div>

<svg xmlns="http://www.w3.org/2000/svg"    className='imagesvg'  viewBox="0 0 19 19" onClick={() => setSmShow(true)} >
	<g className="too-big-actually">
		<g className="bell-whole colll">
			<path className="bell-part bell-part--ringer" d="M9.5,17.5a2,2,0,0,0,2-2h-4A2,2,0,0,0,9.5,17.5Z"/>
			<path className="bell-part bell-part--main" d="M16.23,12.82c-.6-.65-1.73-1.62-1.73-4.82a4.93,4.93,0,0,0-4-4.85V2.5a1,1,0,0,0-2,0v.65A4.94,4.94,0,0,0,4.5,8c0,3.2-1.13,4.17-1.73,4.82a1,1,0,0,0-.27.68,1,1,0,0,0,1,1h12a1,1,0,0,0,1-1A1,1,0,0,0,16.23,12.82Z"/>
		</g>
	</g>
</svg>     




<div className='imagesstr'>
<Modal 
        size="sm"
        show={smShow}    

          
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"  
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div  className='imageaa'> <p  className='pargar'>New Study Advisor (Anjali Rana) Assigned to Student ({props.name}) application for Adler University.</p>  

            <Link to="/profile" ><span className='spantes'>   View Application Profile</span></Link>
            <p  className='pargar'>03 Nov 2022 07:53:21 PM</p>  
            </div>
            {/* <p  className='pargar'>New Study Advisor (Anjali Rana) Assigned to Student (userdata.name) application for Adler University.</p>   */}
            <hr/>
            <div  className='imageaa'><p  className='pargar'>Application of Student ({props.name}) is Created by Anjan Kumar (Anjali Rana). </p>  
           
           <Link to="/profile" ><span className='spantes'>   View Application Profile</span></Link>  <p className='pargar'> 03 Nov 2022 07:53:21 PM</p>         

            </div> 
            <hr />
            <div className='seeall'>See All</div> </Modal.Body>
      </Modal>
</div>
    </div>
  )
}
