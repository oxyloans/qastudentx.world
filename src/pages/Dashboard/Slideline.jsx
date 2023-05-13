import React, { useEffect } from 'react'

import './animation.css'
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap'


export default function Slideline() {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Started & Submitted for options</strong> 
      <br></br> No Remarks
    </Tooltip>
  );

  const tooltip1 = (
    <Tooltip id="tooltip">
    <strong>Review and Course finalization </strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipOL = (
    <Tooltip id="tooltip">
    <strong>LOA/OL</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipSI = (
    <Tooltip id="tooltip">
    <strong>Review</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipAF = (
    <Tooltip id="tooltip">
    <strong>Application fee Paid</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipTF = (
    <Tooltip id="tooltip">
    <strong>Tuition Fee Paid</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipVP = (
    <Tooltip id="tooltip">
    <strong>RVisa Applied</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipCW = (
    <Tooltip id="tooltip">
    <strong>Withdrawn</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  const tooltipVA = (
    <Tooltip id="tooltip">
    <strong>R Visa Approved</strong> 
    <br></br> No Remarks
  </Tooltip>
  );
  

  return (
    <div>
  
  <div className='mmainslide'>
 
<section className="time-line-box">
            <div className="swiper-container text-center"> 

             <div className="swiper-wrapper">
                    <div className="swiper-slide"> 
                      <div className="timestamp"><span className="date"><b>Est. Date </b>  12.01.2022</span></div>
                      <div className="status">
                      <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltip}>
                         <p className='textinrou'>AR</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar>
                        <span><b style={{marginLeft: "1rem", fontSize:'14px'}}> Actual Date </b>12.01.2022</span></div>
                      {/* <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" onClick={handleclick} data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button> */}
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"> 
                      <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltip1}>
                         <p className='textinrou'>CF</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"> <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipAF}>
                         <p className='textinrou'>AF</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"> <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipSI}>
                         <p className='textinrou'>SI</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"> <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipOL}>
                         <p className='textinrou'>OL</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status">
                      <ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipTF}>
                         <p className='textinrou'>TF</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"><ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipVP}>
                         <p className='textinrou'>VP</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"><ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipVA}>
                         <p className='textinrou'>VA</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="timestamp"><span className="date">12.01.2022</span></div>
                      <div className="status"><ButtonToolbar>
                         <OverlayTrigger placement="right" overlay={tooltipCW}>
                         <p className='textinrou'>CW</p>
                        {/* <p className='textinrou' bsStyle="default">AR</p> */}
                        </OverlayTrigger>
                       </ButtonToolbar><span>12.01.2022</span></div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
       </section>
    </div>    
    </div>
  )
}
