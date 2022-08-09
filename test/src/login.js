import React,{ useEffect, UseState } from 'react';
import './login.css';
import axios from 'axios';
import { useState } from 'react';
import LoginExc from './LoginEx';
import SignUp from './SignUp';

export default function LoginEx() {
    const [idSTR,setid] = useState('');
    const [pwSTR,setpw] = useState('');
    const [numSTR,setnum]=useState('');
    const [nameSTR,setname]=useState('');
    const [position,setposition]=useState('Student');
    const [menu,setmenu]=useState(0);//0일때 로그인 1일때 회원가입
    let URL = "https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/createuser/?";

    const [userdata,setuserdata]=useState({
        ID : "",
        Name : "",
        PW : "",
        Position : "",
        SchoolNumber : ""
    });

    useEffect(()=>{
        console.log(userdata);
        if(userdata==null){
            alert("ID또는PW를 확인해주세요");
        }else if(userdata.Position=="Professor"){
            window.location.href="/professor?name="+userdata.Name+"&number="+userdata.SchoolNumber;
            console.log("ads");
        }else if(userdata.Position=="Student"){
            window.location.href="/student?name="+userdata.Name+"&number="+userdata.SchoolNumber;
            console.log("ads");
        }
    },[userdata])



    const SelectMenu=()=>{
        if(menu==0){
            setmenu(1);
        }else{
            setmenu(0);
        }
    }
    const enter=(e)=>{
        if(e.key=='Enter'){
            idcheck();
        }
    }
    const idcheck=()=>{//로그인확인
    if(idSTR=='' || pwSTR==''){
        alert("정보를 올바르게 입력해주세요");
    }else{
        alert(idSTR+pwSTR);
        //https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/login?Method=Login&ID=test1&PW=ync1
        axios.get('https://zf9ytx1xo4.execute-api.ap-northeast-2.amazonaws.com/Student_API/login?Method=Login&ID='+idSTR+'&PW='+pwSTR)
        .then(res=>{
           setuserdata(res.data.userdata);
        })
        
    }
    }



const inputid=(e)=>{
  setid(e.target.value);
};

const inputps=(e)=>{
  setpw(e.target.value);
}

const inputnum=(e)=>{
    setnum(e.target.value);
}

const inputname=(e)=>{
    setname(e.target.value);
}

const inputposition = (e) => {
    setposition(e.target.value);
  };

const checkAccount=()=>{
    if(idSTR=='' || nameSTR==''||pwSTR==''||numSTR==''||position==''){
        alert("정보를 다시 입력해주세요");
    }else{
        
        URL+="Number="+numSTR+"&position="+position+"&Method=POST&name="+nameSTR+"&pw="+pwSTR+"&id="+idSTR;
        console.log(URL);
        axios.post(URL);
        //window.location.href=URL;
        window.location.href="/";
        
    }
}
   
  return (  
    <>
  {menu ===0 ? <LoginExc idcheck={idcheck} inputid={inputid} inputps={inputps} SelectMenu={SelectMenu} idSTR={idSTR} enter={enter}/> : 
               <SignUp inputid={inputid} inputps={inputps} SelectMenu={SelectMenu} inputnum={inputnum} inputname={inputname} inputposition={inputposition}
               checkAccount={checkAccount}/>}
    </>
  );
  }


