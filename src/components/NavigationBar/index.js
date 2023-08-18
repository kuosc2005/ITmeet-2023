import React from 'react'
import "./Navigation.sass"
import logo from '../../assets/images/logo.png'

export default function NavigationBar() {
    return (
        <div className='NavigationBar'>
            <header className="main-header clearfix" role="header">
                <div className="logo">
                    <a href="/#">
                        <img className="logo-image" src={logo} />
                    </a>
                </div>
                <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li><a href="/#section1">Home</a></li>
                        <li><a href="/#section2">About</a></li>
                        <li><a href="/allEvents">Events</a></li>
                        <li><a href="/#preevents">Pre Events</a></li>
                        <li><a href="/#section4">Sponsors</a></li>
                        <li><a href='/#faq'>FAQ</a></li>
                        <li><a href="/#section5">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}
