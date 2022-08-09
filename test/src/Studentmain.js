import React, { useState } from 'react'
import Enrolment from './student';
import ScoreCheck from './ScoreCheck';
import './login.css';
import StudentMenu from './StudentMenu';
import { useEffect } from 'react';
import axios from 'axios';
import TOP_SECRET from './TOP_SECRET';
import { CodepenOutlined } from '@ant-design/icons';

function Studentmain() {
    const [selnum,setselnum]=useState(0);
    const [title,settitle]=useState('선택해봐');
    
    let data = window.location.search;//?뒤에 전체 문자열 읽어오기
    let GetObject = data.split('=');//=를 기준으로 문자열 나누기
    let GetObjectOnly = GetObject[2];//자른건 배열로 저장됨 마지막 배열 받아오기
    let GetName = GetObject[1].split('&');
    let GetNameOnly = GetName[0];
    let decodeName = decodeURI(GetNameOnly); 
    let decodeObject = decodeURI(GetObjectOnly);//학번?

    const reload=()=>{
      window.location.reload();
    }

    const [inputData, setInputData] = useState([{
        code: '',
        ProName: '',
        Total: '',
        SubName: '',
        SchoolNumber: ''
      }])
    const [info,setinfo]=useState([{}]);

    useEffect(async() => {
      console.log(decodeName);
      console.log(decodeObject);

        try{
          const res = await axios.get('https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/?Method=GET')
         setinfo(res.data.value);
         console.log(info);
        } catch(e){
          console.error(e.message)
        }
      },[])

    const menuSel=(num)=>{
        //1=수강신청
        //2=성적확인
        //3=개인정보
        switch(num){
            case 1 :
                setselnum(1);
                settitle('수강신청');
                break;
            case 2:
                setselnum(2);
                settitle('성적확인');
                break;
            case 3:
                setselnum(3);
                settitle('개인정보');
                break;

        }
    }
    useEffect(()=>{
        
      },[]);

  return (
    <>
    <header className='StudentHeader'>
           <h4 className='StuSub' onClick={reload}>INILINE</h4>
           <div>{title}</div>
    </header>

    <body className='wrap'>
        {selnum===0 ? <StudentMenu menuSel={menuSel} name={decodeName}/> : 
         selnum===1 ? <Enrolment info={info} name={decodeName} number={decodeObject}/>  : 
         selnum===2 ? <ScoreCheck info={info} number={decodeObject}/> :
                      <TOP_SECRET number={decodeObject}/>}
    </body>
    </>
  )
}

export default Studentmain