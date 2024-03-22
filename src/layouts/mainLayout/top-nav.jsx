import React from 'react'
import ChangeLanguage from '../../components/ChangeLanguage'
import ChangeTheme from '../../components/ChangeTheme'
import { useAppContext } from '../../contexts/app/AppContext'

export default function TopNav() {
    const { toggleSidebar } = useAppContext();
    return (
        <nav className='navbar'>
            <a className='sidebar-toggle ' onClick={toggleSidebar}>
                <i className='hamburger align-self-center'></i>
            </a>
            <div className='d-flex align-items-center gap-3 ms-auto me-3'>
                <ChangeLanguage />
                <ChangeTheme />
            </div>
        </nav>
    )
}
