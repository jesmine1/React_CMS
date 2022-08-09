import React from 'react'

function Promenu(props) {


  return (
    <div className='Prodiv'>
      <f4>"{props.name}" 님 반갑습니다</f4>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.setfunction(1)}}>강의개설</button>
        </div>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.setfunction(2)}}>성적입력</button>
        </div>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.setfunction(3)}}>수강현황</button>
        </div>
    </div>
  )
}

export default Promenu