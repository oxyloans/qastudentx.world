import React from 'react';
// Import Components
import { Row, Col, Button } from "react-bootstrap";
import '../Dashboard/loder.css'
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { ACCESS_TOKEN, BASE_URL, Status, USERID } from '../../../SocialLink';
import axios from 'axios';
import {Link,withRouter } from 'react-router-dom';

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


class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
									currentPage: 0,
         itemsPerPage: 10,
         data: [],
									totalRows:0,
									selectedRow: null,
									loder:true,
									buttonRow:null,
									pending:true,
								 columns : [
										{
												name: 'University Name',
												selector: row=>row.universityName,
												sortable: true
										},
										{
												name: 'Country',
												selector: row=>row.country,
												sortable: true
										},
										{
											button: true,
											cell: (row) => (
													<a href="#" className="btn btn-sm  button bg-success-light me-2">
												<button className="btn primary bt " onClick={() => this.handleButtonClick(row)}>View</button> 
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
	// this.setState({ buttonRow: rowData });
	// console.log("Apply",rowData);   
	this.setState({loder:false})
	setTimeout(() => {
		// Do something after 2 seconds
		const data = rowData
		this.props.history.push({
			pathname: '/courses',
			state: { data },
	});
	  }, 2000);

}

	componentDidMount() {
		
		const token = localStorage.getItem(ACCESS_TOKEN);
		this.setState({loder:false});
		this.setState({pending:true})
          
		setTimeout(() => {
			// Do something after 2 seconds     
			axios({
				method: 'post',
				url: BASE_URL+`/student-service/student/universities?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
				headers: {
					"Authorization":`Bearer ${token}`
				},
								})
					.then(response => {
						 const data = response.data.data
							this.setState({ data : data });
							this.setState({pending:false});
							console.log(data);
							const totalRows=response.data.count
							this.setState({loder:true});
							this.setState({totalRows:totalRows})
					})
					.catch(error => console.log(error));
					this.setState({pending:false});
		  }, 2000);
		
}

componentDidUpdate(prevProps, prevState) {
	const token = localStorage.getItem(ACCESS_TOKEN);        
	if (this.state.currentPage !== prevState.currentPage) {
		this.setState({pending:true})
		axios({
			method: 'post',
			url: BASE_URL+`/student-service/student/universities?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
			headers: {
				"Authorization":`Bearer ${token}`
			},
							})
					.then(response => {
       const data = response.data.data
							this.setState({ data : data });
							this.setState({pending:false});
							console.log(data);
					})
					.catch(error => console.log(error));
					this.setState({pending:false})
	}
}

		GettingData(){  
			  this.setState({pending:true});
					const token = localStorage.getItem(ACCESS_TOKEN);
						axios({
								method: 'post',
								url: BASE_URL+`/student-service/student/universities?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}`,
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
															this.setState({pending:false});
								})
						.catch((error)=> {
															console.log(error.response);
															this.setState({pending:false});
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
									progressPending={this.state.pending}
							/>
					</DataTableExtensions>
			);

        return (
            <div>   {this.state.loder ? <>  <div className="page-header">
			<Row>
				<Col sm={12}>
					<h3 className="page-title">University Details</h3>
					<ul className="breadcrumb">
						<li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
						<li className="breadcrumb-item active">University Details</li>
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
														</div></> :  <><Loder /></>}
              
            </div>
        )
    }
}
export { Apply };


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