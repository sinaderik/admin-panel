import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ChangeLanguage from '../../components/ChangeLanguage'
import ChangeTheme from '../../components/ChangeTheme'
import { useAppContext } from "../../contexts/app/AppContext";
import { useTranslation } from "react-i18next";

import Sidebar from './sidebar';
import TopNav from './top-nav';

export default function MainLayout() {

  const [collapseSideBar, setCollapseSideBar] = useState(false)
  const { showSidebar } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className='wrapper' style={{ minHeight: "100vh" }}>
      
        <Sidebar />
      
      <div className='main'>
        <TopNav />
        <main className='content'>
          <div className='container-fluid p-0'>
            <Outlet />
          </div>
        </main>
        <footer className='footer'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  © 2023 -{" "}
                  <a href="index.html" className="text-muted">
                    {t('classbon')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
