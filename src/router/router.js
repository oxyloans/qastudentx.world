import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { history } from "../../src/_components/_helpers";
import { AdminLayoutRoute, LoginLayoutRoute } from "./routerLayout";


import {
    // Authentication Modules
    Login, 
    Register,
    ForgotPassword,
    Error,

    // Dashboard Module
    Dashboard,
    StudentDashboard,
    TeacherDashboard,
				SetPreferences,
				Preference,

    //Blank Page Module
    BlankPage,

    // Profile Module
    Profile,
    Edit,

				// Applications List
				Shortlisted,
				Approved,
				Rejected,
				OfferLetter,

				//  Find
				Apply,
				Courses,
				Applyuniversity,

				// Network
				Reffer,

				// Data
				Ukdata,

				TotalUsers
} from '../pages';
import { Sidebar, Header, Footer } from '../_components';

import config from 'config';
import Loder from "../pages/Dashboard/Loder";
import Apida from "../pages/Dashboard/Apida";
import Timeline from "../pages/Profile/Timeline";
import Tabnav from "../pages/Dashboard/Tabnav";
import Copyprofile from "../pages/Dashboard/Copyprofile";
import Regist from "../pages/Login/Regist";
import LoginStatic from "../pages/Login/LoginStatic";
import Program from "../pages/Dashboard/Program";
import Application from "../pages/Dashboard/Application";
import NewApplicatin from "../pages/Dashboard/NewApplicatin";
import Shortlist from "../pages/Dashboard/Shortlist";
import SelectProgram from "../pages/Dashboard/SelectProgram";
import Recuterregister from "../pages/Login/Recuterregister";

// CSS Files

class RouterComponent extends React.Component {
    render() {
        return (
            <Router basename={`${config.publicPath}`} >
                <Switch>
                
                    {/* Login Layout */}
                    {/* <Route exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/error" component={Error} />                    */}
                    
                </Switch>                                            
                <Route exact path="/" component={LoginStatic} /> 
																    {/* <Route exact path="/" component={Login} />    */}
                                                                    <Route path="/register" component={Regist} />
                                                                    <Route path="/recuterregister" component={Recuterregister} />
                    {/* <Route path="/register" component={Register} /> */}
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/error" component={Error} /> 
                <div className="main-wrapper">
                    {/* <Sidebar/> */}    
      
                    <Route render={(props) => <Sidebar {...props} />} />
                    <div>   
                        <Route render={(props) => <Header {...props} />} />

                        <div className="page-wrapper">
                            <div className="content container-fluid">
                                <Switch>
																																   

                                    <Route path="/dashboard" component={StudentDashboard} />
                                    <Route path="/student-dashboard" component={StudentDashboard} />        
                                    <Route path="/apidata" component={Apida} />  
                                    <Route  path="/tabnav" component={Tabnav} />       

                                    <Route  path="/selectprograms" component={SelectProgram} />  
                                    <Route  path="/application" component={Application} />  
                                    <Route  path="/shortlist" component={Shortlist} />   
                                    <Route path="/program" component={Program} />       
                                    <Route  path="/copyprofile" component={Copyprofile} />    
                                    <Route path="/newApplication" component={NewApplicatin} />      
                                    <Route path="/timeline" component={Timeline} />   
                                    <Route path="/loder" component={Loder} />
																																				<Route path="/setpreferences" component={SetPreferences}/>
																																				<Route path="/preference" component={Preference}/>

																																				{/* Application List */}
																																				<Route path="/shortlisted" component={Shortlisted} />
																																				<Route path="/approved" component={Approved}/>
																																				<Route path="/rejected" component={Rejected}/>
																																				<Route path="/offer" component={OfferLetter}/>

                                    {/* Profile Module */}
                                    <Route path="/profile" component={Copyprofile} />
																																				<Route path="/edit" component={Edit} />

																																				{/* Find */}
																																				<Route path="/apply" component={Apply}/>
																																				<Route path="/courses" component={Courses}/>
																																				<Route path="/applyuniversity" component={Applyuniversity}/>

																																				{/* My Network */}
																																				<Route path="/reffer" component={Reffer}/>

																																				{/* Excel Data */}
																																				<Route path="/ukdata" component={Ukdata}/>

																																				<Route path="/totalusers" component = {TotalUsers}/>
                                </Switch>
                            </div>
                            <Route render={(props) => <Footer {...props} />} />
                        </div>
                    </div>
                </div>
            
            </Router>         
        )
    }
}
export { RouterComponent };