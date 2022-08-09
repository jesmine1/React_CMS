import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CodepenOutlined } from '@ant-design/icons';

function SubjectCheck(props) {

  const [info,setinfo] = useState(props.info);
  const [found,setfoundStudent] = useState({});//배열을받아온다
  let StudentLength= new Array();//그 배열의 길이를 여기에 저장한다
  const number = props.number;
  
  const [newdata,setnewdata] = useState({});
  const [newinfo,setnewinfo] = useState([]);

  useEffect(()=>{
    
    setinfo(info.filter((info)=>info.SchoolNumber==number))
    for(let i=0;i<info.length;i++){
      axios.get("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/scoreinput/?Method=GET&Code="+info[i].Code)
     .then(res=>setnewdata(res.data.count))
     console.log(newdata)
     }

     console.log(newinfo);
    
  },[])

  return (
    <div className='login'>
        <table className='scoretable'>
      <thead>
        <tr className='titlescoretr'>
          <th className='scoreth'>과목명</th>
          <th className='scoreth'>과목코드</th>
          <th className='scoreth'>인원</th>
        </tr>
      </thead>
      <tbody>
      {info.map(({SubName, Code,Total,CurrentList},i) => (
        <tr key={SubName + Code } className="scoretr">
          <td className='scoretd' >{SubName}</td>
          <td className='scoretd'>{Code}</td>
          <td className='scoretd'>{CurrentList}/{Total}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
  )
}

export default SubjectCheck