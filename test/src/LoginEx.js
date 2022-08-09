import React from 'react'

function LoginExc(props) {
  return (
    <div className="wrap">
    <div className="login">
        <h2>Log-in</h2>
        <div className="login_id">
            <h4>ID</h4>
              <input type="text" className='id' onChange={props.inputid} onKeyDown={props.enter}></input>
        </div>
        <div class="login_pw">
            <h4>Password</h4>
            <input type="password" onChange={props.inputps} onKeyDown={props.enter}></input>
        </div>
        <div className="login_etc">
            <div className="checkbox">
           
            </div>
            <div class="forgot_pw">
            <a onClick={props.SelectMenu}>Sign Up</a>
        </div>
        </div>
        <div className="subdiv">
          {props.idSTR===''? <input type="submit" className='sub' value='JOIN' onClick={props.idcheck}></input> : 
          <input type="submit" className='sub' value='JOIN' onClick={props.idcheck}></input>}
        </div>
    </div>
    </div>
  )
}

export default LoginExc