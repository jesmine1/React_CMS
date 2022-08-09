import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TOP_SECRET(props) {

  const number = props.number;
  let check='';
  const [info,setinfo] = useState({});
  const [pw,setpw]=useState('****');

  useEffect(()=>{//정보를 전부 받아와서 학번으로 필터링하고 출력
    axios.get("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/createuser/?Method=SEARCH&Number="+number)
    .then(res=>setinfo(res.data.message[0]))
  },[])

  const setpwvalue=()=>{
    check=window.prompt('비밀번호를 입력해주세요','');
    console.log(check);
    console.log(info.PW);
    if(check==info.PW){
      setpw(info.PW);
    }else{
      alert("틀림ㅋ");
    }
  }

  return (
    <div className='login'>
      <table className='infoTable'>
        <tr className="infotr">
          <td className="infotd">
            이름
          </td>
          <td className="infotd">
            {info.Name}
          </td>
        </tr>
        <tr className="infotr">
          <td className="infotd">
            학번
          </td>
          <td className="infotd">
            {info.SchoolNumber}
          </td>
        </tr>
        <tr className="infotr">
          <td className="infotd">
            ID
          </td>
          <td className="infotd">
            {info.ID}
          </td>
        </tr>
        <tr className="infotr">
          <td className="infotd">
            PW
          </td>
          <td className="infotd">
            {pw}
          </td>
        </tr>
        <tr className="infotr">
          <td className="infotd">
            Position
          </td>
          <td className="infotd">
            {info.Position}
          </td>
        </tr>
      </table>
      <button onClick={setpwvalue}>비밀번호</button>
    </div>
  )
}

export default TOP_SECRET