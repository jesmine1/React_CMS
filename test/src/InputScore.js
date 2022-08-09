import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './login.css';




//여기코드 다시한번 읽어보고 알고리즘 정리하세요 까먹었습니다

const InputScore=(props)=>{

  const info=props.found;//자기 자신의 과목정보들
  const number=props.number;//pro number
  const [foundStudent,setfoundStudent] = useState([]);//학생정보를 받아올 변수
  const [tempAry,settempAry]=useState([]);//일단 여기에 받고 위에 배열과 합침
  const [temp,settemp]=useState('not null');
  const [index,setindex]=useState(0);


  const TestAwait=async()=>{//useEffect안에 들어가는 함수(async쓸라고 따로빼둠)
    for(let i=0;i<info.length;i++){
      await axios.get("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/scoreinput/?Method=GET&Code="+info[i].Code)
    .then(res=>settempAry(res.data.response))
    }
  }

    const pushscore=(i,e)=>{
      settemp(e.target.value);
      setindex(i);
    }

    useEffect(()=>{
      if(temp=='not null'){
        return;
      }
      foundStudent[index].Score=temp;
    },[temp]);

    useEffect(()=>{//여기가 제일 처음 걸림 이게 한번 실행됨
      if(tempAry==[]){
        return
      }
      setfoundStudent(foundStudent.concat(tempAry));
      ;
      console.log(foundStudent);
    },[tempAry])

    useEffect(()=>{
      TestAwait();
    },[]);

    const update=()=>{
      
      for(let i=0;i<foundStudent.length;i++){
      axios.post("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/scoreinput/?Method=POST&Code="
      +foundStudent[i].Code+"&SchoolNumber="+foundStudent[i].SchoolNumber+"&Name="+foundStudent[i].Name+"&Score="+foundStudent[i].Score)
      }//for

      alert("점수입력완료");
      
    }

  return(
      <>
    <div className='Prodiv'>
      {foundStudent.length===0 ? <div><h4>현재 수강중인 인원이 없습니다</h4></div>
      :
    <table className='scoretable'>
      <thead>
        <tr className='titlescoretr'>
          <th className='scoreth'>코드</th>
          <th className='scoreth'>이름</th>
          <th className='scoreth'>학 번</th>
          <th className='scoreth'>점수</th>
        </tr>
      </thead>
      <tbody>
      {foundStudent.map(({ Code,Name, SchoolNumber},i) => (
        <tr key={Code+Name + SchoolNumber } className="scoretr">
          <td className='scoretd' >{Code}</td>
          <td className='scoretd' >{Name}</td>
          <td className='scoretd'>{SchoolNumber}</td>
          <td className='scoretd'><input type='text' placeholder={foundStudent[i].Score} onChange={(e)=>(pushscore(i,e))}></input></td>{/*onChange={(e)=>(pushscore(i,e))} */}
        </tr>
      ))}
      </tbody>
    </table>
    }
    <button onClick={update}>저장</button>
  </div>
      </>
  )
}

export default InputScore;