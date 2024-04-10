import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, open, title, body, children }) {
    return (
        <>
            {isOpen && createPortal(
                <div onClick={() => open(false)} className='modal' style={{ display: "block" }}>
                    <div onClick={(e)=>e.stopPropagation()} className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title fw-bolder'>{title}</h5>
                                <button onClick={() => open(false)} type='button' className='btn-close m-0'></button>
                            </div>
                            <div className='modal-body m-3'>
                                <p className='mb-0'>{body}</p>
                            </div>
                            <div className='modal-footer'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>,
                document.getElementById("modal"))}
        </>
    )
}
