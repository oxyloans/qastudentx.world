import React from 'react';
// Import Components
import { Row, Col, Button,Card,Breadcrumb,Modal } from "react-bootstrap";
import {Link} from "react-router-dom"  
import  '../Dashboard/loder.css'
class Applyuniversity extends React.Component {
	constructor(props) {
					super(props);
					this.state = {
						university:[],
						data:[],
						isShow:false,
					}
	}
	componentDidMount() {
		this.setState({university:this.props.location.state.universitycourse})
		this.setState({data:this.props.location.state.data})
		// alert(this.state.data)
		if(this.props.location.state.universitycourse==""){
			this.props.history.push({
				pathname: '/apply',
		});
		}
	}

	

	render() {
		const {university}=this.state;
		const {data}=this.state;
		console.log(university);
		console.log(data);
		
     return(
						<div>
						<Row>
							<Col sm={4}>
							<h3 className="page-title linertitle">Add Application</h3>
							<Row>
    <form>
       <label className="col-lg-3 col-form-label"></label>
							<div className="form-group row">
												<div className="col-lg-13" >
													<div className="form-check form-check-inline">
														<input className="form-check-input" 
														type="radio" 
														name="Preferred" 
														id="My Preferred" 
														value="My Preferred" 
														defaultChecked 
														/>
														<label className="form-check-label" htmlFor="My Preferred">
														My Preferred
														</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" 
														type="radio" 
														name="Preferred" 
														id="Expert to Advise" 
														value="Expert to Advise" 
														/>
														<label className="form-check-label" htmlFor="Expert to Advise">
														Expert to Advise
														</label>
													</div>
												</div>
									</div>
									<div className="row">
									<label className="col-lg-5 col-form-label">Prefer College</label>
									<div className="col-md-11 mb-11">
													<p className="form-control">{university.universityName}</p>
									</div>
									</div>
									<div className="col-md-11 mb-11">
           <label className="col-lg-5 col-form-label">Prefer Course</label>
											<div className="col-md-11 mb-11">
													<p>{data.courseName} </p>
									</div>
									</div>
										<label className="col-lg-6 col-form-label">Intake</label>
										<div className="col-md-11 mb-8">   
												<select className="form-select" required>
													<option defaultValue="">Select Intake</option>
													<option defaultValue="1">Jan</option>
													<option defaultValue="2">Feb</option>
													<option defaultValue="3">Mar</option>
													<option defaultValue="4">Apl</option>
													<option defaultValue="5">May</option>
													<option defaultValue="6">Jun</option>
													<option defaultValue="7">Jul</option>
													<option defaultValue="8">Aug</option>
													<option defaultValue="9">Sep</option>
													<option defaultValue="10">Oct</option>
													<option defaultValue="11">Nov</option>
													<option defaultValue="12">Dec</option>
												</select>
									</div>
										<div className="col-md-8 mb-8">
           <label className="col-lg-2 col-form-label">Year</label>
												<select className="form-select" required>
													<option defaultValue="">Year</option>
													<option defaultValue="1">2023</option>
													<option defaultValue="2">2024</option>
													<option defaultValue="3">2025</option>
													<option defaultValue="4">2026</option>
													<option defaultValue="5">2027</option>
													<option defaultValue="6">2028</option>
												</select>
									</div>
									<br/>
									<div className="row row-sm align-items-center">
									<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <Button variant="outline-secondary" onClick={()=>this.setState({isShow:true})}>Apply</Button>
         </div>
									</div>
									</form>
									</Row>
							</Col>
							<Col sm={8}>
							<div className="page-header">
								  <Row>
											<Col sm={2}></Col>
											<Col>
														<h3 className="page-title">{university.universityName}</h3>
														<br/>
														{/* <h6 className="breadcrumb-item active">College website</h6>
														<a href="">www.College.com</a>
														<br/><br/> */}
               {/* <h5 className="breadcrumb-item active">Course name</h5>
															<a href="">www.College.com/Course-details</a>
															<br/><br/> */}
															<Card>
                 <Card.Body>
                   <p>Tuition Fee : {data.cost}</p>
                   <p>Duration : {data.duration}</p>
																			<p>Exams : {data.typesOfExams}</p>
                   <p>Intake : Sep,Jan,Apr,Jul,Oct,May,Aug,Nov,Mar,Feb,Jun,Dec</p>
                 </Card.Body>
																	</Card>
														</Col>
											</Row>
						</div>				
							</Col>
						</Row>
						<br/><br/>
     
					{/* Modals */}
      <Modal show={this.state.isShow}>
        <Modal.Header closeButton onClick={()=>this.setState({isShow:false})}>
          <Modal.Title>Success!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully applied to the university of {university.universityName} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>this.setState({isShow:false})}>
            Close
          </Button>
										<a href="/dashboard" >
          <Button variant="success" onClick={()=>this.setState({isShow:false})}>
            Ok
          </Button>
										</a>
        </Modal.Footer>
      </Modal>

		</div>
					)
			}
	}
export { Applyuniversity };