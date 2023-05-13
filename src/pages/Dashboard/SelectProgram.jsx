import React from 'react'
import { Col, Row } from 'react-bootstrap'        
import './selectprograms.css'
import { Link } from 'react-router-dom'

export default function SelectProgram() {   


  return (
    <div>


<div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Program</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">program</li>
                            </ul>
                        </Col>
                    </Row>   


                    <>
                    <div className="card cardpa w-100 mb-3 maiconte11">
                                
                                <div className='grid-container1'>
                       <div className='clacolorpersent'>
                        <span  className='centerastrali'>Australian College of Applied Psychology</span></div>
                       <div   className='colocombi'>    
                       <div  className='divbadyy'>
                        <h4>Bachelor of Counselling</h4>  
                        <div  className='divbad11'> 
                        <span className='box box1'><i class="bi bi-heart"></i></span>
                        <span  className='box box11'><i class="bi bi-file-earmark-fill"></i></span>
                        <span className='box box2'>Apply Now</span>
                        </div> 
                        </div>
                          <div className='loctcall'>
                        <h6> <i class="bi bi-building-check"></i>Australian College of Applied Psychology </h6>
                        
                        <h6><i class="bi bi-geo-alt"></i>   Australia</h6>
                        </div>
                        <div  className='spantex11'>
                        <span className='spanntex1'>Feb 2023 (Open)</span>
                        <span className='spanntex2'>Jul 2023 (Open Soon)</span>
                       </div>
                       <>       
                       <div className='boxbuttom11'>
                       <div className="card ">     
                       <div  className='card111'>
                       <div className="card-body  card-body11">
                       TUITION FEE <i class="bi bi-info-circle-fill"></i>
                       <span className='caposs'> $ 21536 AUD</span>
                       </div>
                       <div className="card-body  card-body11">
                       APPLICATION FEE <i class="bi bi-info-circle-fill"></i>
                       <span className='caposs'>$ 0 AUD</span>
                       </div>  
                       <div className="card-body  card-body11">
                       INTAKE <i class="bi bi-info-circle-fill"></i>    
                       <span className='caposs'>Sep May</span>
                       </div>
                       <div className="card-body  card-body11">
                       DURATION
                       <span className='caposs'>36 Months</span>
                       </div>
                       <div className="card-body  card-body11">
                       ETS    
                       <span className='caposs'>IELTS-6(5.5),PTE-50(42),TOEFL-60(19)</span>
                       </div>
                       </div>
                     </div>    
                     </div>
                       </></div>
                       </div>

                      
</div></>
                </div>     
    </div>
  )
}
