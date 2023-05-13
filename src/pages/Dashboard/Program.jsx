import React, { useState } from 'react';
import './program1.css'
import './nav.css'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
function Program() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption, setSelectedOption] = useState('What do you want to Study...?');
  const [selectedOption1, setSelectedOption1] = useState('Wher do you want to Study...?');

  const options = [
    { value: 'option1', displayText: 'London School of Economic' },
    { value: 'option2', displayText: 'University College London' },
    { value: 'option3', displayText: 'Kings College London' },
    
  ];
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const selectOption = (value, displayText) => {
    setSelectedOption(displayText);
    setIsOpen(false);
  };
  const selectOption1 = (value, displayText) => {
    setSelectedOption1(displayText);
    setIsOpen(false);
  };


  const filterOptions = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const dropdownOptions = document.querySelectorAll('.dropdown-select ul li');
    dropdownOptions.forEach((option) => {
      const optionText = option.textContent.toLowerCase();
      if (optionText.includes(filterValue)) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    });
  };       const filterOptions1 = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const dropdownOptions = document.querySelectorAll('.dropdown-select ul li');
    dropdownOptions.forEach((option) => {
      const optionText = option.textContent.toLowerCase();
      if (optionText.includes(filterValue)) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    });
  };

  return (
    

    <>
     <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Program Finder</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Program Finder</li>
                            </ul>
                        </Col>
                    </Row>
                </div>      
                <h2 className='program1p'>Program Finder</h2>
                <p  className='program1pa'>Search 100,000+ from programs in 1100+ institutions from 32+ countries worldwide</p>  
                <div className='maincont'  style={{display:'flex',alignItems:'center'}}>
    <div   className='divsearc'> 
    
    <div className='maringsboxprogram'>
    <div className={`dropdown-select wide ${isOpen ? 'open' : ''}`}>
      <span className="current current11" onClick={toggleDropdown}>
        {selectedOption}
      </span>
      <div className="list">   
        <div className="dd-search">    


     
             <input
            type="text"
            className="dd-searchbox dd-searchb"
            onKeyUp={filterOptions}
            onClick={(event) => event.stopPropagation()}
            placeholder="    Search options"
          />

            <i class="bi-search" >  </i>
        </div>
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${selectedOption === option.displayText ? 'selected' : ''}`}
              onClick={() => selectOption(option.value, option.displayText)}
              tabIndex={0}
            >
              {option.displayText}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={`dropdown-select wide ${isOpen1 ? 'open' : ''}`}>
      <span className="current" onClick={toggleDropdown1}>
        {selectedOption1}
      </span>
      <div className="list">
        <div className="dd-search">
          <input
            type="text"
            className="dd-searchbox "
            onKeyUp={filterOptions1}
            onClick={(event) => event.stopPropagation()}
            placeholder="  Search options"
          />      <i class="bi-search  dd-searchb" >  </i>
        </div>
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${selectedOption1 === option.displayText ? 'selected' : ''}`}
              onClick={() => selectOption1(option.value, option.displayText)}
              tabIndex={0}
            >
              {option.displayText}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <button type='submit' className='btn btn-primary  btn-primary11 '>SEARCH</button>
    </div>
    </div>
   


       
    </div>
    <div className='containerbox'>


    <div className="col-sm-4">
    <div className="card">
      <div className="card-body">       
      <div   className='diconatiner'>
        {/* <div  className=''></div> */}
        <div className='iconport iconport3'>            <i class=" bi-zoom-in" style={{fontSize:'2rem',color:'white'}}></i>
        
        </div>    
        </div>
        <h4 className='heddata1'>Explore</h4>
        <p className="card-text  card-text11">You can browse more than 100,000+ programmes from all over the world.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>     

   <div className="col-sm-4">
    <div className="card">
      <div className="card-body">  
      <div   className='diconatiner'>
        {/* <div  className=''></div> */}
        <div className='iconport'> <i class="bi bi-arrow-down-up" style={{fontSize:'2rem',color:'white'}}></i>
       
        </div>    
        </div>
      <h4 className='heddata1'>Compare</h4>
        <p className="card-text card-text11">Shortlist favourite programmes and check that matches your credentials</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>     
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">       
      <div   className='diconatiner'>
        {/* <div  className=''></div> */}
        <div className='iconport iconport2'><i class="bi bi-window-plus"  style={{fontSize:'2rem',color:'white'}}></i>
        </div>    
        </div>
        <h4 className='heddata1'>Apply</h4>
        <p className="card-text  card-text11">Only few clicks and 3-4 minutes to apply your programme.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>  
    </div>
    </>
   
  
  );
}

export default Program;
