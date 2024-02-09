import React, { useEffect, useRef, useState } from 'react'
import usFlag from '@assets/images/us.png'
import faFlag from '@assets/images/fa.png'


export default function ChangeLanguage() {

  const [show, setShow] = useState(false)
  const ref = useRef();
  
  useEffect(() => {

    function checkIfClickOutside(e){
      if(show && ref.current && !ref.current.contains(e.target)){
        setShow(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside)
    }
  }, [show])
 
  return (
    <div className='dropdown'>
      <a className='nav-flag dropdown-toggle' onClick={() => setShow(true)}>
        <img src={usFlag} alt="usFlag" />
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-end ${show ? "show" : undefined}`}>
        <a className='dropdown-item fw-bolder' style={{ textAlign: "right" }}>
          <img className='ms-2' src={faFlag} alt="faFlag" width="20" />
          <span className='align-middle'>فارسی</span>
        </a>
        <a className='dropdown-item fw-bolder' style={{ textAlign: "right" }}>
          <img className='ms-2' src={usFlag} alt="faFlag" width="20" />
          <span className='align-middle'>English</span>
        </a>
      </div>
    </div>
  )
}
