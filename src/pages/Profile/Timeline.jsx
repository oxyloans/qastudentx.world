import React from 'react'

// import  './bootstap.css'
import './timeline.css';  
 import per from '../../../src/assets/img/gopal m.png';
import en from '../../../src/assets/img/finish.png'
import start from '../../../src/assets/img/start.png'

export default function Timeline() {
  return (
    <div><>
    
    <div className="container bootstrap snippets bootdey">
      <section id="news" className="white-bg padding-top-bottom">
        <div className="container bootstrap snippets bootdey">
          <div className="timeline">
            <div className="date-title">
            <img src={start}   alt='startflag'   className='startflag'/>
              <span>March 2014</span>
            </div>
            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <div className="date">
                    <p>28</p>
                    <small>Fri</small>
                  </div>
                  <h2 className="news-title">STEP-1</h2>
                  <div className="news-media">
                    <a className="colorbox cboxElement" href="#">
                      <img
                        className="img-responsive"
                        src="https://www.bootdey.com/image/400x400/FFB6C1/000000"
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                  Student sign-up and receives user account details in an e-mail…
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 news-item right">
                <div className="news-content">
                  <div className="date">
                    <p>27</p>
                    <small>Thu</small>
                  </div>
                  <h2 className="news-title">STEP-2</h2>
                  <div className="news-media gallery">
                    <a className="colorbox cboxElement" href="#">
                      <img
                        className="img-responsive"
                        src="https://www.bootdey.com/image/400x400/87CEFA/000000"
                        alt=""
                      />
                    </a>
                    <a className="colorbox cboxElement" href="#" />
                  </div>
                  <p>
                  Initial Call

Student receives initial call from Dfavo client executive within 24hrs to know more about interest and qualifications to set up a meeting with resepective country study advisor…
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>


            <div className="date-title  date-title1">
                <img src={per} alt='personimage' className='personima'/>
            </div>    


            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <div className="date">
                    <p>26</p>
                    <small>Wen</small>
                  </div>
                  <h2 className="news-title">STEP-3</h2>
                  <div className="news-media video">
                    <a className="colorbox-video cboxElement" href="#">
                      <img
                        className="img-responsive"
                        src="https://www.bootdey.com/image/400x400/7B68EE/000000"
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                  Course Finalization Video call with a study advisor, and student to advise and finalize study options and to support in application on the portal…
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 news-item right">
                <div className="news-content">
                  <div className="date">
                    <p>25</p>
                    <small>Tue</small>
                  </div>
                  <h2 className="news-title">STEP-4</h2>
                  <div className="news-media gallery">
                    <a className="colorbox cboxElement" href="#">
                      <img
                        className="img-responsive"
                        src="https://www.bootdey.com/image/400x400/BA55D3/000000"
                        alt=""
                      />
                    </a>
                    <a className="colorbox cboxElement" href="#" />
                  </div>
                  <p>
                  Application in Process Student.x processes application,receives offer letter,admission confirmation and help to secure study visa…
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
           
            <div className="date-title">
                
              <span>February 2014</span>
            </div>
            <div className="row">
              <div className="col-sm-6 news-item">
                <div className="news-content">
                  <div className="date">
                    <p>27</p>
                    <small>Thu</small>
                  </div>
                  <h2 className="news-title">STEP-5</h2>
                  <div className="news-media video">
                    <a className="colorbox-video cboxElement" href="#">
                      <img
                        className="img-responsive"
                        src="https://www.bootdey.com/image/400x400/DA70D6/000000"
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                  Course Started & Guaranteed Grant Start your classes and receive Studentx guaranteed grant of USD $300…
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
           
              <div className="col-sm-6 news-item right">
                {/* <div className="news-content">
                  <div className="date">
                    <p>24</p>
                    <small>Mon</small>
                  </div>
                  <h2 className="news-title">Title 6</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div> */}
                   <div className="date-title">
                
                <img src={en}   alt='startflag'   className='enflag'/>
                  </div>
              </div>
              
            </div>
    
           
          </div>
        </div>
      </section>
    </div>
  </>
  </div>
  )
}
