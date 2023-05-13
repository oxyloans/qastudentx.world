import React from 'react'
import { Col, Row } from 'react-bootstrap'   
import './shortlist.css'
import { Link } from 'react-router-dom'

export default function Shortlist() {
  return (
    <div>

        <>
        <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">ShortList</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">SELECTED PROGRAM</li>
                            </ul>
                        </Col>
                    </Row>
                       
                           <div className='listedmaindiv'>     
                           <i class="fa solid fa-file-import regular11"></i>
                           <h6 style={{color:'black',fontWeight:'390'}}>No courses shortlisted yet</h6>
                           <h6   className='shortlistmodel'>You have not shortlisted any course yet.</h6>
                           </div>
                        </div>
                      </>
    </div>
  )
}
