import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './sidebar';
import TopNav from './top-nav';
import Footer from './footer';
import { useEffect } from 'react';

export default function MainLayout() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

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
        <Footer />
      </div>
    </div>
  )
}
