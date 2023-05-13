import React,{useState} from 'react';
// Import Components
import { Row, Col, Card, Alert, Breadcrumb, Button, ButtonGroup, ListGroup, Nav, Dropdown, DropdownButton, Pagination, ProgressBar, Tabs, Tab } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import './edit.css'
import {Link} from "react-router-dom"



class SetPreferences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            isActive:false,
        }
    }
    
	handleOnchange(event)
    {
        this.setState({isActive: true});	
    }
    handleOnchange1(event)
    {
        this.setState({isActive: false});	
    }

    render() {
  
        return (
            
            <div>
                <div className="page-header">
                    <Row>
                        <div className="page-header">
                            <Row>
                                <Col sm={12}>
                                    <h3 className="page-title">Set Your Preferences</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Preferences</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>


                        <Col lg={9}>
                                        <Card>
                                            <Card.Body>
                                                {/* <Card.Title className="d-flex justify-content-between">
                                                    <span sty>Your Preferences</span> 
                                                </Card.Title> */}
                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">Country You are Interest in</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select Country</option>
                                                    <option defaultValue="1">United States</option>
                                                    <option defaultValue="2">United Kingdon</option>
                                                    <option defaultValue="3">Canada</option>
                                                    <option defaultValue="4">Australia</option>
                                                    <option defaultValue="5">Newzeland</option>
                                                </select>											
                                                </div>
                                            </div>
                                            

                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">University You are Interested to select</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select any one</option>
                                                    <option defaultValue="1">I am average at Score,I want to learn more about NO/IELTS,No GRE Colleges/Universities</option>
                                                    <option defaultValue="2">I an Particular about Premium Colleges,I wish to join a colleg that access 80-90% Range GMAT/IELTS Score</option>
                                                    <option defaultValue="3">Any College that really dont ask for Score</option>
                                                </select>											
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">My Budget Range</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select Budget Range</option>
                                                    <option defaultValue="1">4L-10L</option>
                                                    <option defaultValue="2">10L-15L</option>
                                                    <option defaultValue="3">15L-20L</option>
                                                </select>											
                                                </div>
                                            </div>
                            
                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">I want Scholarship Upto</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select Scholarship</option>
                                                    <option defaultValue="1">20%</option>
                                                    <option defaultValue="2">50%</option>
                                                    <option defaultValue="3">60%</option>
                                                </select>											
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">College which gives Campus Placement Guarentee</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault" 
                                                    id="flexRadioDefault1"
                                                    defaultChecked 
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
                                                    />
                                                    <label className="form-check-label" htmlFor="no">
                                                    No
                                                    </label>
                                                </div>	

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault" 
                                                    id="flexRadioDefault3"
                                                    />
                                                    <label className="form-check-label" htmlFor="yeno specifications">
                                                    No Specifications
                                                    </label>
                                                </div>									
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">Post Study Visa</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select any one</option>
                                                    <option defaultValue="1">I want a country that give highest post study visa</option>
                                                    <option defaultValue="2">Min 1 year</option>
                                                    <option defaultValue="3">Min 2 years</option>
                                                    <option defaultValue="4">Not Specified</option>
                                                </select>											
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">Are you Married ?</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault1" 
                                                    id="flexRadioDefault4" 
                                                    onChange={this.handleOnchange.bind(this)}
                                                    />
                                                    <label className="form-check-label" htmlFor="yes">
                                                    Yes
                                                    </label>
                                                </div>
                                    
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault1" 
                                                    id="flexRadioDefault5"
                                                    onChange={this.handleOnchange1.bind(this)}

                                                    />
                                                    <label className="form-check-label" htmlFor="no">
                                                    No
                                                    </label>
                                                </div>	
								
                                                </div>
                                            </div>


                                    {this.state.isActive ?
                                    <div>
                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">Do you have Kids</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault2" 
                                                    id="flexRadioDefault4"
                                                    />
                                                    <label className="form-check-label" htmlFor="yes">
                                                    Yes
                                                    </label>
                                                </div>
                                    
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault2" 
                                                    id="flexRadioDefault5"
                                                    />
                                                    <label className="form-check-label" htmlFor="no">
                                                    No
                                                    </label>
                                                </div>	

                                               									
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">I want to study in a country where i can take Spouse as dependent & Elgible to work</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault3" 
                                                    id="flexRadioDefault4"
                                                    />
                                                    <label className="form-check-label" htmlFor="yes">
                                                    Yes
                                                    </label>
                                                </div>
                                    
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault3" 
                                                    id="flexRadioDefault5"
                                                    />
                                                    <label className="form-check-label" htmlFor="no">
                                                    No
                                                    </label>
                                                </div>	

                                               							
                                                </div>
                                            </div>
                                    </div>
                                    :null}
                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <label htmlFor="validationDefault02">Cost of living(Annual)</label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                <select className="form-select" required>
                                                    <option defaultValue="">Select cost of living</option>
                                                    <option defaultValue="1">6.2 - 13.5lakhs</option>
                                                    <option defaultValue="2">8.3 - 15.8lakhs</option>
                                                    <option defaultValue="3">9.6 - 20.3lakhs</option>
                                                 
                                                </select>											
                                                </div>
                                            </div>
                                               
                                            <div>
											    <button className="btn btn-primary" type="submit">Submit</button>
										    </div>
                                               
                                            </Card.Body>
                                        </Card>
                                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export { SetPreferences };