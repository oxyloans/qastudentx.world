import React from "react";
import { RouterComponent } from "./router";
import Apidataa from "./pages/Dashboard/Apida";
import Apida from "./pages/Dashboard/Apida";
import Mainbox from "./pages/Dashboard/Mainbox";
import LoginStatic from "./pages/Login/LoginStatic";
import Register from "./pages/Login/Regist";



function App() {
  return (
    <div>
      
      {/* <Apida /> */}     
      {/* <Mainbox /> */}

    	<RouterComponent />            
      
           
          {/* <LoginStatic   /> */}
      
    </div>
  );
}

export default App;
