import React from 'react';
// Import Components
import { Row, Col } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { ACCESS_TOKEN, BASE_URL, Status, USERID } from '../../../SocialLink';
import axios from 'axios';

// const data = [
// 	{ 
// 					country: 'USA',
// 					university: 'Columbia University',
// 					course: '120',
// 					exam: 'IELTS,TOEFL',
// 					free:'20L-30L',
// 					intake: 'sep',
// 					apply: 'Rejected'
// 	},
// ];

const columns = [
	{
					name: 'Name',
					selector: row=>row.name,
					sortable: true,
	},
	{
					name: 'Email',
					selector: row=>row.email,
					sortable: true,
	},
	{
					name: 'Mobile number',
					selector: row=>row.mobileNumber,
					sortable: true,
	},
	{
					name: 'Amount',
					selector: row=>row.amount,
					sortable: true,
	},
];

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
									userDetails:[],
									propertyId:"6b629ab7-59fd-7220-e7d1-c0673164e9b3"
								}
    }

				componentDidMount(){
					this.GettingData();
				} 

				GettingData(){  
						const token = localStorage.getItem(ACCESS_TOKEN);
					axios({
									method: 'get',
									url: BASE_URL+`/oxybrick-service/interested-users/${this.state.propertyId}/interested-users`,
									headers: {
										"Authorization":`Bearer ${token}`
									},
													})
					.then((response)=>{
																// console.log(response.data.result.interestUsers);
																const userDetails = response.data;	
																this.setState({userDetails:userDetails})	
																console.log(userDetails[0]);			
									})
					.catch((error)=> {
																	console.log(error.response);
									})	
				}
    render() {
				const {userDetails} = this.state;
        // const tableData = {
        //     columns,
        //     userDetails,
        // };
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

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">   
																								<div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Firstname</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                            </tr>
                                        </thead>   
																																								{userDetails.map((userDetails,index) => (     
                                        <tbody>
                                            <tr>
                                                <td>{userDetails.name}</td>
                                                <td>{userDetails.email}</td>
                                                <td>{userDetails.mobileNumber}</td>
                                            </tr>
                                        </tbody>
																																												)
																																								)}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { UserDetails };