import React from 'react';
// Import Components
import { Row, Col } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Button } from "react-bootstrap";
import axios from 'axios'
import {API_BASE_URL,ACCESS_TOKEN,BASE_URL,BASE_URLS} from '../../../SocialLink';
import {Link} from 'react-router-dom';



class Preference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
									userData:[],
								}
    }
				componentDidMount() {
					const token = localStorage.getItem(ACCESS_TOKEN);
		// alert(token)
      axios({
	       method: 'get',
	       url: BASE_URL+'/auth-service/user/me',
       	headers: {
		          "Authorization":`Bearer ${token}`
	          },
	        })
       .then((response)=>{
							const	userData = response.data
								this.setState({userData:userData})
					    // alert(userData.firstName)
		      })
       .catch((error)=> {
					     console.log(error.response.data.status);
		      })	
				  
				}

    render() {
					const {userData} = this.state;
        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
																								<h3 className="page-title">Welcome {userData.firstName}!</h3>
																								<h6>Now you can set your preference</h6>
                        </Col>
                    </Row>
                </div>

																<div style={{margin:10}}>
																<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2qT8HyMIA2_T3UdiLxe-Zz4wq1Lg2rrSlRtYmuvzxUbpQLQ/viewform?embedded=true" width="640" height="3112" frameborder="1" marginheight="10" marginwidth="10">Loading…</iframe>
																</div>
            </div>
        )
    }
}
export { Preference };