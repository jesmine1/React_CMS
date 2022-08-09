import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function MakeSUB(props) {

    const [subname,setname]=useState("");
    const [code,setcode]=useState("");
    const [total,settotal]=useState("");


    const setContent=(i,e)=>{
        switch(i){
            case 1 :
                setname(e.target.value);
                break;
            case 2 :
                setcode(e.target.value);
                break;
            case 3 :
                settotal(e.target.value);
                break;
        }
    }

    const goPsst=()=>{
        
      if(subname==""||code==""||total==""){
        alert("정보를옳바르게입력해주세요");
      }else{
       axios.post("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/?Method=POST&Code="
       +code+"&ProName="+props.name+"&SubName="+subname+"&SchoolNumber="+props.number+"&Total="+total);
       alert("등록완료");
      }
      
    }

    const randomcode=()=>{
        const RDcode = parseInt((Math.random())*1000000);
        setcode(RDcode);
    }

  return (
    <div className='Prodiv'>
        <div className="make_sub">
            <h4>과목 이름</h4>
              <input type="text" className='sub_name' onChange={(e)=>{setContent(1,e)}}></input>
        </div>
        <div className="make_sub">
            <h4>과목 코드</h4>
              <input type="text" className='sub_name' onChange={(e)=>{setContent(2,e)}} value={code ||""}></input>
        </div>
        <div className="make_sub">
            <h4>전체 수강 인원</h4>
              <input type="text" className='sub_name' onChange={(e)=>{setContent(3,e)}}></input>
        </div>
        <button className='SUBSUB' onClick={goPsst}>등록하기</button>
        <button onClick={randomcode}>랜덤코드생성</button>
    </div>
  )
}

export default MakeSUB