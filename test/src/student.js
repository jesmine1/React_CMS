import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import './login.css';

const Enrolment=(props)=> {

  const info=props.info;
  const name=props.name;
  const number=props.number;

  const selsub=(i)=>{//신청하는함수@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    axios.post("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/scoreinput/?Method=NEW&Name="
    +name+"&Score=0&Code="+info[i].Code+"&SchoolNumber="+number)
    alert(info[i].SubName+"신청");
  }


  useEffect(()=>{
    console.log(info);
  },[]);

  return (
    <div className='login'>
      
      {info.length===0 ? <div><h4>신청이 가능한 과목이 없습니다.</h4></div> 
      :
      <table  className='enrolTable'>
        <thead>
          <tr className='titlescoretr'>
            <th className='enrolth'>과목명</th>
            <th className='enrolth'>교수명</th>
            <th className='enrolth'>전체인원</th>
            <th className='enrolth'>신청하기</th>
          </tr>
        </thead>
        {info.map(({ SubName, ProName, Total },i) => (
          <tr key={SubName + ProName + Total}>
            <td className='enroltd' >{SubName}</td>
            <td className='enroltd'>{ProName}</td>
            <td className='enroltd'>{Total}</td>
            <td className='enroltd'><input className='subBTN' type='submit' value='신청' onClick={function(){selsub(i)}}></input></td>
          </tr>
        ))}
      </table>
    }{/*조건문 닫는 중괄호 */}
    
    </div>
  )
}

export default Enrolment
