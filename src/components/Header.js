import React from 'react'
import Logo from '../assets/img/logo-autopistadelnorte.png'

const Header = (props) => {
    return (
        <header className="header py-5">
            <div className="container mx-auto text-center md:text-left">
                <img src={Logo} alt="" className="inline-block w-1/2 md:w-auto" onClick={() => props.onPage('Start')}/>
            </div>
        </header>
    )
}

export default Header
