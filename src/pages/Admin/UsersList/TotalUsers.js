import React from 'react';
// Import Components
import { Row, Col } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { ACCESS_TOKEN, BASE_URL, Status, USERID } from '../../../../SocialLink';
import axios from 'axios';



class TotalUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
									currentPage: 0,
         itemsPerPage: 10,
         data: [],
									totalRows:0,
								 columns : [
										{
												name: 'Name',
												selector: row=>row.name,
												sortable: true
										},
										{
												name: 'Email',
												selector: row=>row.email,
												sortable: true
										},
										{
												name: 'Mobile number',
												selector: row=>row.mobileNumber,
												sortable: true
										},
										{
											button: true,
											cell: () => (
													<div className="App">
															<div class="openbtn text-center">
																	<button
																			type="button"
																			class="btn btn-primary"
																			data-bs-toggle="modal"
																			data-bs-target="#myModal"
																	>
																			Open modal
																	</button>
																	<div class="modal" tabindex="-1" id="myModal">
																			<div class="modal-dialog">
																					<div class="modal-content">
																							<div class="modal-header">
																									<h5 class="modal-title">Modal title</h5>
																									<button
																											type="button"
																											class="btn-close"
																											data-bs-dismiss="modal"
																											aria-label="Close"
																									></button>
																							</div>
																							<div class="modal-body">
																									<p>Modal body text goes here.</p>
																							</div>
																							<div class="modal-footer">
																									<button
																											type="button"
																											class="btn btn-secondary"
																											data-bs-dismiss="modal"
																									>
																											Close
																									</button>
																									<button type="button" class="btn btn-primary">
																											Save changes
																									</button>
																							</div>
																					</div>
																			</div>
																	</div>
															</div>
													</div>
											)
									}
								],
    }
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

	componentDidMount() {
		const token = localStorage.getItem(ACCESS_TOKEN);
		axios({
			method: 'get',
			url: BASE_URL+`/auth-service/user/users?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}&sortBy=id&sortOrder=DESC`,
			headers: {
				"Authorization":`Bearer ${token}`
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
}

componentDidUpdate(prevProps, prevState) {
	const token = localStorage.getItem(ACCESS_TOKEN);
	if (this.state.currentPage !== prevState.currentPage) {
		axios({
			method: 'get',
			url: 'http://ec2-65-0-147-157.ap-south-1.compute.amazonaws.com:9000/api'+`/auth-service/user/registered-users?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}&sortBy=id&sortOrder=DESC`,
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
								method: 'get',
								url: 'http://ec2-65-0-147-157.ap-south-1.compute.amazonaws.com:9000/api'+`/auth-service/user/registered-users?pageIndex=${this.state.currentPage}&pageSize=${this.state.itemsPerPage}&sortBy=id&sortOrder=DESC`,
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
									paginationIconFirstPage={false}
									paginationIconLastPage={false}
							/>
					</DataTableExtensions>
			);

        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Interested Details</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                <li className="breadcrumb-item active">Interested Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
																<div>
																		{tableExtensions}
																		<nav>
																				<ul className="pagination">
																						<li className={`page-item ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
																								<a href="#" className="page-link" onClick={this.prevPage}>Previous</a>
																						</li>
																						<li className={`page-item ${this.state.currentPage === this.totalPages ? 'disabled' : ''}`}>
																								<a href="#" className="page-link" onClick={this.nextPage}>Next</a>
																						</li>
																				</ul>
																		</nav>
																</div>
            </div>
        )
    }
}
export { TotalUsers };


// {
//   "agentName": "string",
//   "location": "string",
//   "university": "string"
// }