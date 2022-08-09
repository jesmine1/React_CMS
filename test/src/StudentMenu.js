import React from 'react'

function StudentMenu(props) {
  return (
    <div className='Prodiv'>
      <f4>"{props.name}" 님 반갑습니다</f4>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.menuSel(1)}}>수강신청</button>
        </div>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.menuSel(2)}}>성적확인</button>
        </div>
        <div className='div_PB'>
        <button className='Probutton' onClick={function(){props.menuSel(3)}}>개인정보</button>
        </div>
    </div>
  )
}

export default StudentMenu