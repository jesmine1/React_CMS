import React from 'react'
import { useState } from 'react'
import InputScore from './InputScore';
import axios from 'axios';
import { useEffect } from 'react';
import Promenu from './Promenu';
import MakeSUB from './makeSUB';
import SubjectCheck from './SubjectCheck';
import './login.css';


function Professer() {
    const [info,setinfo]=useState([]);
    const [menu,setmenu]=useState('0');//1 : 강의개설 2 : 성적입력 3 : 수강현황
    const [title,settitle]=useState('여기는 헤더 입니다');

    let data = window.location.search;//?뒤에 전체 문자열 읽어오기
    let GetObject = data.split('=');//=를 기준으로 문자열 나누기
    let GetObjectOnly = GetObject[2];//자른건 배열로 저장됨 마지막 배열 받아오기 이게교번
    let GetName = GetObject[1].split('&');
    let GetNameOnly = GetName[0];
    let decodeName = decodeURI(GetNameOnly); 


    const selmenu=(num)=>{
        setinfo(info.filter(info=>info.SchoolNumber==GetObjectOnly));//여기서 자기 과목만 걸러짐
        console.log(info.length);
        switch(num){
            case 1 :
                settitle("강의개설");
                setmenu(num);
                break;
            case 2 :
                settitle("성적입력");
                setmenu(num);
                break;
            case 3 :
                settitle("수강현황");
                setmenu(num);
                break;
        }
       
    }

    
    useEffect(()=>{
        axios.get("https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API")
        .then(res=>setinfo(res.data.value))
        .then(setinfo(info.filter((info)=>info.SchoolNumber==GetObjectOnly)))
        .catch(err=>console.log(err));

        console.log(info);
        
      },[]);

   return(
    <>
    <header className='proHead'>
        <h4 className='StuSub'>INILINE</h4>
        <div>{title}</div>
    </header>
    <body className='Probody'>
        {menu==='0' ? <Promenu setfunction={selmenu} name={decodeName}/> : 
        menu===1 ? <MakeSUB name={decodeName} number={GetObjectOnly}/> : 
        menu===2 ? <InputScore found={info} number={GetObjectOnly}/> : 
                   <SubjectCheck info={info} number={GetObjectOnly}/>}
    </body>
    </>
   )
}

export default Professer