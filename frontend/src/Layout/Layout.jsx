import React from 'react'

import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'


const Layout = () =>
{
    return (
        <div className='min-vh-100'>
            <Header />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}

export default Layout