import React from 'react'

export default function NavigationBar() {
    return (
        <header className="main-header clearfix" role="header">
            <div className="logo">
                <a href="#">
                    <img className="logo-image" src="assets/images/brightlogoitmeet.png" />
                </a>
            </div>
            <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
            <nav id="menu" className="main-nav" role="navigation">
                <ul className="main-menu">
                    <li><a href="#section1">Home</a></li>
                    <li><a href="#section2">About</a></li>
                    <li><a href="#section3">Events</a></li>
                    <li><a href="#section4">Sponsors</a></li>
                    <li><a href="#section5">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
