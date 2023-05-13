import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './newapplication.css'
import { Link } from 'react-router-dom'

export default function NewApplicatin() {           
    
    
    const [isOpen, setIsOpen] = useState(false);        
    const [isOpen1, setIsOpen1] = useState(false);   
      
    const [selectedOption, setSelectedOption] = useState('What do you want to Study...?');
      
    const [selectedOption1, setSelectedOption1] = useState('What do you want to Study...?');
    const options = [
      { value: 'option1', displayText: 'London School of Economic' },
      { value: 'option2', displayText: 'University College London' },
      { value: 'option3', displayText: 'Kings College London' },
      ];
      const options1 = [
        { value: 'option1', displayText: 'Option 1asddsdasda' },
        { value: 'option2', displayText: 'Option 2asdasd' },
        { value: 'option3', displayText: 'Option 3asdasd' },
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
        setIsOpen1(false);
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
      };    

      const filterOptions1 = (event) => {
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
    <div>
        <>
        <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">ADD Application</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Add Application</li>
                            </ul>
                        </Col>
                    </Row>  
                    <div className="card w-100" style={{marginTop: "2rem",}}>
                    <div className="card-body">
                  
                      <h4   style={{marginBottom: "1rem",}}>Add Application </h4>    
                      <div className="col "> 
                      <div className='mainradio'>
                      <div className="form-check form-check1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label form-check-l" for="flexRadioDefault1">
                         My Preferred
                        </label>   
                        </div>        
                        <div className="form-check form-check1">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          Expert to Advise
                        </label>
                     </div>      
    
                     </div>
                     </div> 

                     <div className="col-md-4 mb-6 col-md-6  col-lg-6 col-xl-4 invatestude" style={{display:"flex",flexDirection:'column'}}>   
                          <label htmlFor="validationDefault03"  className='labeldata'>Prefer College</label>
     
                    <div className={`form-control1  dropdown-select wide ${isOpen ? 'open' : ''}`}>
      <span className="current" onClick={toggleDropdown}>
        {selectedOption}
      </span>
      <div className="list">   
        <div className="dd-search  bi-search1">    


     
             <input
            type="text"
            className="dd-searchbox dd-searchb form-control"
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
                </div>         

                <div className="col-md-4 mb-6 col-md-6 col-lg-6 col-xl-4 invatestude  invatestude1" style={{   display:'flex',flexDirection:"column"}}>   
                          <label htmlFor="validationDefault03"  className='labeldata'>Prefer College</label>
     
                    <div className={`form-control1 dropdown-select wide ${isOpen1 ? 'open' : ''}`}>
      <span className="current" onClick={toggleDropdown1}>
        {selectedOption1}
      </span>
      <div className="list">   
        <div className="dd-search  bi-search1">    


     
             <input
            type="text"
            className="dd-searchbox dd-searchb form-control"
            onKeyUp={filterOptions1}
            onClick={(event) => event.stopPropagation()}
            placeholder="    Search options"
          />

            <i class="bi-search" >  </i>
        </div>
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${selectedOption1 === option.displayText ? 'selected' : ''}`}
              onClick={() => selectOptio1(option.value, option.displayText)}
              tabIndex={0}
            >
              {option.displayText}
            </li>
          ))}
        </ul>
      </div>
    </div>
                </div>      

                      
                      <div  className='divone'>
                <div className="col-md-2 mb-2  invatestude  invatestude1">   
                          <label htmlFor="validationDefault03"  className='labeldata'>Intake</label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select  Intake</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>      
                <option value="1">Mar</option>
                <option value="2">Jan</option>
                <option value="3">Apr</option>
                <option value="1">Sep</option>
                <option value="2">Jan</option>
                <option value="3">Apr</option>
              </select>     
              </div>

              
              <div className="col-md-2 mb-2  invatestude  invatestude1">   
                          <label htmlFor="validationDefault03"  className='labeldata'>Year</label>
                <select className="form-select" aria-label="Default select example">
              
                <option value="1">2025</option>
                <option value="2">2026</option>
                <option value="3">2027</option>      
                <option value="1">2028</option>
                <option value="2">2029</option>
                
              </select>     
              </div>

             

              </div>
                <div className="col-md-4 mb-4 col-lg-6 col-xl-4">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>   
                <div className="col-md-4 mb-4 ">
                <button type='submit'  className='btn btn-primary'>New Application</button></div>
                    </div>
                  </div>
                    </div></>
    </div>
  )
}
