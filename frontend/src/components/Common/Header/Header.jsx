import React from 'react'
import { Link } from "react-router-dom"

const Header = () =>
{

    const navItems = [
        {
            name: 'Home',
            path: "/",

        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Services",
            path: "/services",

        },
        {
            name: "Skills",
            path: "/skills",

        },
        {
            name: "Portfolio",
            path: "/portfolio",

        },
        {
            name: "Testimonials",
            path: "/testimonials",

        },
        {
            name: "Contact",
            path: "/contact",
        },

    ]
    return (
        <>
            <nav className="navbar menu navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                navItems.map((item) => (
                                    <li className="nav-item" key={item.name}>
                                        <Link className="nav-link active" aria-current="page" to={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header