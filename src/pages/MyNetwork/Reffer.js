import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";

class Reffer extends React.Component {
		
	constructor(props) {
		super(props);
		this.state = {}
}

render() {
		return (
						<div>
										<div className="page-header">
														<Row>
																		<Col sm={12}>
																						<h3 className="page-title">Invite Friend</h3>
																						<ul className="breadcrumb">
																										<li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
																										<li className="breadcrumb-item active">Reffer</li>
																						</ul>
																		</Col>
														</Row>
										</div>
									<form>
									<div className="card">	
							<div className="card-body">
								<div className="row">
									<div className="col-sm">
											<div className="row">
												<div className="col-md-4 mb-3">
													<label htmlFor="validationDefault01">Name</label>
													<input type="text" className="form-control" id="validationDefault01" placeholder="Name"  required />
												</div>
												<div className="col-md-4 mb-3">
													<label htmlFor="validationDefault02">Mobile Number</label>
													<input type="text" className="form-control" id="validationDefault02" placeholder="Mobile Number"  required />
												</div>
												<div className="col-md-4 mb-3">
													<label htmlFor="validationDefaultUsername">Email</label>
														<input type="email" className="form-control" id="validationDefault03" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
												</div>
												<div className="col-md-4 mb-4">
												<label htmlFor="validationDefaultUsername"></label>
            <a href=""><Button variant="primary">Send</Button></a>
         </div>
											</div>
      </div>
						</div>
						</div>
						</div>
						</form>
						</div>
     )
     }
		}

export { Reffer }