import React from 'react';
// Import Components
import { Row, Col, Button } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { ACCESS_TOKEN, BASE_URL, Status, USERID } from '../../../SocialLink';
import axios from 'axios';
import {Link,withRouter } from 'react-router-dom';import  '../Dashboard/loder.css'

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import Loder from '../Dashboard/Loder';

const customStyles = {
	rows: {
					style: {
									minHeight: '65px', // override the row height
					},
	},
	headCells: {
					style: {
									paddingLeft: '6px', // override the cell padding for head cells
									paddingRight: '6px',
					},
	},
	cells: {
					style: {
									paddingLeft: '6px', // override the cell padding for data cells
									paddingRight: '6px',
					},
	},
};


class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
									currentPage: 1,
         itemsPerPage: 20,
         data: [],
									universitycourse:[],
									totalRows:0,    
									loder:true,
									selectedRow: null,
									buttonRow:null,
								 columns : [
										{
												name: 'Course Name',
												selector: row=>row.courseName,
												sortable: true
										},
										{
												name: 'Duration',
												selector: row=>row.duration,
												sortable: true
										},
										{
											name: 'Cost',
											selector: row=>row.cost,
											sortable: true
									},
									{
										name: 'Exam',
										selector: row=>row.typesOfExams,
										sortable: true
								},
										{
											button: true,
											cell: (row) => (
													<a href="#" className="btn btn-sm button bg-success-light me-2">
												<button className="btn primary bt" onClick={() => this.handleButtonClick(row)}>Apply</button> 
											 </a>
											)
									}
								],
    };
				this.handleRowClick = this.handleRowClick.bind(this);
				this.handleButtonClick = this.handleButtonClick.bind(this);
			}

			nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

		prevPage = () => {
			this.setState({
					currentPage: this.state.currentPage - 1
			});
	}

	handleRowClick(rowData) {
		this.setState({ selectedRow: rowData });
		// console.log(rowData);
}
handleButtonClick(rowData) {
	// console.log("Course",rowData);  
	    this.setState({loder:false})     
	setTimeout(() => {
		// Do something after 2 seconds    
		const data = rowData
		const {universitycourse} = this.state 
		this.props.history.push({
			pathname: '/applyuniversity',  
			state: { data,universitycourse },
	});   this.setState({loder:true})
	  }, 2000);

}

	componentDidMount() {
		const token = localStorage.getItem(ACCESS_TOKEN);
		const { data }  = this.props.location.state;
		// console.log("unviersity",data);
		
		this.setState({universitycourse:data})
		// console.log(this.university);
		if(this.state.universitycourse==""){
		axios({
			method: 'post',
			url: BASE_URL+`/student-service/student/courses-mapped-to-university?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
			headers: {
				"Authorization":`Bearer ${token}`
			},
			data:{
				"countryName": data.country,
				"university": data.universityName
		},
							})
				.then(response => {
					 const data = response.data.data
						this.setState({ data : data });
						console.log(data);
						const totalRows=response.data.count
						this.setState({totalRows:totalRows})
				})
				.catch(error => console.log(error));
			}else{
				this.props.history.push({
					pathname: '/apply',
			});
			}
}

componentDidUpdate(prevProps, prevState) {
	const token = localStorage.getItem(ACCESS_TOKEN);
	if (this.state.currentPage !== prevState.currentPage) {
		axios({
			method: 'post',
			url: BASE_URL+`/student-service/student/courses-mapped-to-university?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
			headers: {
				"Authorization":`Bearer ${token}`
			},
							})
					.then(response => {
       const data = response.data.data
							this.setState({ data : data });
							console.log(data);
					})
					.catch(error => console.log(error));
	}
}

		GettingData(){  
					const token = localStorage.getItem(ACCESS_TOKEN);
						axios({
								method: 'post',
								url: BASE_URL+`/student-service/student/courses-mapped-to-university?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
								headers: {
									"Authorization":`Bearer ${token}`
								},
												})
						.then((response)=>{
															 // console.log(response.data);
																const userDetails=response.data.data
																this.setState({userDetails:userDetails})
																const totalRows=response.data.count
																this.setState({totalRows:totalRows})
															// console.log(userDetails);
															// console.log(columns);
								})
						.catch((error)=> {
															console.log(error.response);
								})	
				}

				

    render() {  
			
				const tableData = {
					columns: this.state.columns,
					data: this.state.data
			};

			const tableExtensions = (
					<DataTableExtensions {...tableData}>
							<DataTable
									pagination
									highlightOnHover
									paginationPerPage={this.state.itemsPerPage}
									paginationTotalRows={this.state.data.length}
									paginationComponentOptions={{
											noRowsPerPage: true
									}}
									paginationServer
									paginationTotalRows={this.state.totalRows}
									onChangeRowsPerPage={this.prevPage}
									onChangePage={this.nextPage}
									customStyles={customStyles}
									center={true}
									onRowClicked={this.handleRowClick}
							/>
					</DataTableExtensions>
			);

        return (
            <div>
             
			 
			 {this.state.loder ?  <>   <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">University Courses Details</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                <li className="breadcrumb-item active">University Courses Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
																<div>
																		{tableExtensions}
																		{/* <nav>
																				<ul className="pagination">
																						<li className={`page-item ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
																								<a href="#" className="page-link" onClick={this.prevPage}>Previous</a>
																						</li>
																						<li className={`page-item ${this.state.currentPage === this.totalPages ? 'disabled' : ''}`}>
																								<a href="#" className="page-link" onClick={this.nextPage}>Next</a>
																						</li>
																				</ul>
																		</nav> */}
																</div></>  :  <>  <Loder /></>}  
            </div>
        )
    }
}
export { Courses };


// {
//   "agentName": "string",
//   "location": "string",
//   "university": "string"
// }

{/* <div className="App">
<div className="btn text-center">
		<button
				type="button"
				className="btn btn-primary"
				// data-bs-toggle="modal"
				// data-bs-target="#myModal"
		>
				Apply
		</button>
		<div className="modal" tabindex="-1" id="myModal">
				<div className="modal-dialog">
						<div className="modal-content">
								<div className="modal-header">
										<h5 className="modal-title">Modal title</h5>
										<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
										></button>
								</div>
								<div className="modal-body">
										<p>Modal body text goes here.</p>
								</div>
								<div className="modal-footer">
										<button
												type="button"
												className="btn btn-secondary"
												data-bs-dismiss="modal"
										>
												Close
										</button>
										<button type="button" className="btn btn-primary">
												Save changes
										</button>
								</div>
						</div>
				</div>
		</div>
</div>
</div> */}