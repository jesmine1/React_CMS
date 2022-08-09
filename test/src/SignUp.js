import React from 'react'

function SignUp(props) {
  return (
    <div className="wrap">
    <div className="login">
        <h2>Sign-Up</h2>
        <div className="sign">
            <h4>ID</h4>
              <input type="text" className='id' onChange={props.inputid} ></input>
        </div>
        <div className="sign">
            <h4>Password</h4>
            <input type="text" onChange={props.inputps}></input>
        </div>
        <div className="sign">
            <h4>Name</h4>
              <input type="text" className='id' onChange={props.inputname} ></input>
        </div>
        <div className="sign">
            <h4>Shcool Number</h4>
              <input type="text" className='id' onChange={props.inputnum} ></input>
        </div>
        <div className="sign">
            <h4>Select your position</h4>
            <select onChange={props.inputposition}>
                <option value='Student'>Student</option>
                <option value='Professor'>Professor</option>
            </select>
        </div>
        <div className="sign">  
          <input type="submit" className='sub' value=' Create Account' onClick={props.checkAccount}></input>
        </div>
    </div>
    </div>
  )
}

export default SignUp