import React from 'react';
// Import Components
import { Row, Col } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const data = [
	{ 
					country: 'USA',
					university: 'Columbia University',
					course: '120',
					exam: 'IELTS,TOEFL',
					free:'20L-30L',
					intake: 'sep',
					apply: 'Rejected'
	},
];

const columns = [
	{
					name: 'Country',
					selector: row=>row.country,
					sortable: true,
	},
	{
					name: 'University',
					selector: row=>row.university,
					sortable: true,
	},
	{
					name: 'No of courses',
					selector: row=>row.course,
					sortable: true,
	},
	{
					name: 'Exam Accepted',
					selector: row=>row.exam,
					sortable: true,
	},
	{
					name: 'Fee Range',
					selector: row=>row.free,
					sortable: true,
	},
	{
					name: 'Intake',
					selector: row=>row.intake,
					sortable: true,
	},
	{
				name: 'Apply',
				selector: row=>row.apply,
				sortable: true,
},
];

class Rejected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const tableData = {
            columns,
            data,
        };
        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Rejected Application</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                <li className="breadcrumb-item active">Rejected</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                          
                            <div className="card-body">
                                <DataTableExtensions
                                    {...tableData}
                                >
                                    <DataTable
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { Rejected };