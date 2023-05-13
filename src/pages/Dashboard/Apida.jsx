import React, { useState } from 'react';
import  './apidata.css';
import axios from 'axios';


export default function Apida() {
        const[borrowerId,setborrowerId]=useState("");
        const[dealId,setdealId]=useState("");
        const[dealNumber,setdealNumber]=useState("");
        const[emiInterest,setemiInterest]=useState(3);
        const[emiType,setemiType]=useState("");
        const[endDate,setendDate]=useState("");
        const[firstInterestpaidDate,setfirstInterestpaidDate]=useState("");
        const[lenderId,setlenderId]=useState("");
        const[interestRate,setinterestRate]=useState(3);
        const[participationDate,setparticipationDate]=useState("");
        const[principalAmount,setprincipalAmount]=useState(40000);
        const[tenure,settenure]=useState(2);
        const[userId,setuserId]=useState("");     
      

        
    
      const handleClick=()=>{
        alert(userId)
         var data={
          borrowerId: borrowerId ,
          dealId: dealId,
          dealNumber: dealNumber,
          emiInterest: emiInterest,
          emiType: emiType,
          endDate:endDate,
          firstInterestpaidDate: firstInterestpaidDate,
          interestRate: interestRate,
          lenderId: lenderId,
          participationDate: participationDate,
          principalAmount: principalAmount,
          tenure: tenure,
          userId: "6ff24dfc-0ace-450c-8d12-ec5f7e0f7b96"
        }  

        alert(data)
        axios({
          method:'post',
          url:'',
          data:data
        })
      }
    return (
    <div className='container'>   
        <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} >

          <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter borrowerId</label>
        <input type='text' placeholder='borrowerId' value={borrowerId} onChange={e=>setborrowerId(e.target.value)} />
        </div>
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter dealId</label>
        <input type='text' placeholder='dealId' value={dealId} onChange={e=>setdealId(e.target.value)} />
        </div>
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter dealNumber</label>
        <input type='text' placeholder='dealNumber' value={dealNumber} onChange={e=>setdealNumber(e.target.value)} />
        </div>


        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter emiInterest</label>
        <input type='text' placeholder='emiInterest' value={emiInterest} onChange={e=>setemiInterest(e.target.value)} />
        </div>
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter emiType</label>
        <input type='text' placeholder='emiType' value={emiType} onChange={e=>setemiType(e.target.value)} />
        </div>
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter endDate</label>
        <input type='text' placeholder='endDate' value={endDate} onChange={e=>setendDate(e.target.value)} />
        </div>

        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter firstInterestpaidDate</label>
        <input type='text' placeholder='firstInterestpaidDate' value={firstInterestpaidDate} onChange={e=>setfirstInterestpaidDate(e.target.value)} />
        </div>   

        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter interestRate</label>
        <input type='text' placeholder='interestRate' value={interestRate} onChange={e=>setinterestRate(e.target.value)} />
        </div>   



        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter lenderId</label>
        <input type='text' placeholder='lenderId' value={lenderId} onChange={e=>setlenderId(e.target.value)} />
        </div>  

        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter participationDate</label>
        <input type='text' placeholder='participationDate' value={participationDate} onChange={e=>setparticipationDate(e.target.value)} />
        </div>  
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter principalAmount</label>
        <input type='text' placeholder='principalAmount' value={principalAmount} onChange={e=>setprincipalAmount(e.target.value)} />
        </div>  
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter tenure</label>
        <input type='text' placeholder='tenure' value={tenure} onChange={e=>settenure(e.target.value)} />
        </div>  
        <div  style={{display:'flex',flexDirection:'row',margin: '10px',   gap:'6px'}}>   
                 <label>Enter userId</label>
        <input type='text' placeholder='userId' value={userId} onChange={e=>setuserId(e.target.value)} />
        </div>  

        <button type='submit' className='submit' onClick={handleClick}>Submit</button>
      
  
      
     
      
      
          

        </div>
    </div>
  )
}
