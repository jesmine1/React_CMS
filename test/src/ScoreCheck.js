import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const ScoreCheck=(props)=> {

  const Subinfo = props.info;
  const number=props.number;
  const [data,setdata] = useState([]);
  const [info,setinfo]=useState([]);

  const setSubName=(code)=>{
    for(let i=0;i<Subinfo.length;i++){
      if(Subinfo[i].Code==code){
        return Subinfo[i].SubName;
      }
    }
  }

  const setAPIdata=async()=>{
    
    for(let i=0;i<Subinfo.length;i++){
      await axios.get("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/scoreinput/?Method=GET&Code="+Subinfo[i].Code)
          .then(res=>setdata(res.data.response))
    }
    
   console.log(info);
  }

  useEffect(()=>{
   
    for(let i=0;i<data.length;i++){
      if(data[i].SchoolNumber==number){
        console.log(data[i]);
        setinfo(info.concat(data[i]));
      }
    }
    
  },[data]);

  useEffect(()=>{
    setAPIdata();
  },[])

  return (
     <div className='Prodiv'>
        {info.length===0 ? <div>현재 수강중인 과목이 없습니다</div>:
        <table className='scoretable'>
       <thead>
         <tr className='titlescoretr'>
           <th className='scoreth'>과목명</th>
           <th className='scoreth'>점  수</th>
         </tr>
       </thead>
       <tbody>
       {info.map(({ Code, Score},i) => (
         <tr key={Code + Score } className="scoretr">
           <td className='scoretd' >{setSubName(Code)}</td>
           <td className='scoretd'>{Score}</td>
         </tr>
       ))}
       </tbody>
       </table>
       }
     </div>
   )
}

export default ScoreCheck