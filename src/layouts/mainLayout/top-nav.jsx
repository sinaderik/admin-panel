import React from 'react'
import ChangeLanguage from '../../components/ChangeLanguage'
import ChangeTheme from '../../components/ChangeTheme'
import { useAppContext } from '../../contexts/app/AppContext'
import { useNavigate } from 'react-router-dom';

export default function TopNav() {
    const { toggleSidebar } = useAppContext();
    const navigate = useNavigate()
    const { language } = useAppContext()

    function logOut() {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className='navbar'>
            <a className='sidebar-toggle ' onClick={toggleSidebar}>
                <i className='hamburger align-self-center'></i>
            </a>
            <div className='d-flex align-items-center gap-3 me-3'>
                <ChangeLanguage />
                <ChangeTheme />
            </div>
            <div className={`${language === 'fa' ? 'me-auto' : 'ms-auto'}`}>
                <button className='btn btn-outline-danger ms-2 fw-bolder' onClick={logOut}>
                    خروج
                </button>
            </div>
        </nav>
    )
}
