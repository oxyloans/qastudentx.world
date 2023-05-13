import React, { useState,useEffect ,useRef} from 'react'
import { init } from "ityped";
import axios from 'axios';
import {BASE_URL} from "../../../SocialLink"
export default function Namesscroll() {       


    const textRef = useRef();
    const [usersinfirstName ,setusersinfirstName]=useState();
    const[userData,setuserData]=useState([])
    const[userfirstName,setuserfirstName]=useState("");
    const[name,setname]=useState();

    var full_name;
    var fullName;

  function getcall(){
    const token = localStorage.getItem("accessToken");
	const userId=localStorage.getItem("userId")
    axios({
        method:"get",
        url:BASE_URL+`/student-service/user/profile?id=${userId}`,
        headers:
        {
            Authorization:`Bearer ${token}`,
        }
        })
    .then((response)=>{
        // console.log(response.data)
        setuserData(response.data)
        full_name=response.data.firstName+" "+response.data.lastName;
        // console.log(full_name)
        let upperCaseText = full_name.toUpperCase();
        fullName=upperCaseText;
        // console.log(fullName)
        setuserfirstName(fullName)
        // console.log(userData);
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
}


function getSin(){
  const token = localStorage.getItem("accessToken");

  axios({
    method: 'get',
    url: BASE_URL+'/auth-service/user/me',
    headers: {
         "Authorization":`Bearer ${token}`
       },
      })
  .then((response)=>{
      // console.log(response.data)
      setuserData(response.data)
      full_name=response.data.firstName+" "+response.data.lastName;
      // alert(full_name);
      setname(full_name);

  })
  .catch((error)=>{
      console.log(error.response.data);
  })
}



    useEffect(() => {
      getcall()  
      getSin()
        // init(textRef.current, {
        //   showCursor: true,
        //   backDelay: 1500,
        //   backSpeed:60,
        //   strings: ["GOPALA KRISHNA"],
        // });
      }, []);    


  return (
    <div>
        <h3   className='page-title'>
        Welcome  {name ? <span>{name}</span> : <span>{userfirstName}</span>} 
          </h3>
    </div>
  )
}
