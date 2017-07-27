import React from 'react'

export default props => (
    <nav role='navigation'>
        <div className='nav-wrapper container' >
            <a id='logo-container' href="#" class='brand-logo'><img src={ require('./images/logo.png') } width="200" /></a>
            
            <ul className="right hide-on-med-and-down">
                <li><a href='#/about'>Sobre</a></li>
                <li><a href='#/about'>Galeria</a></li>
                <li><a href='#/about'>Serviços</a></li>
                <li><a href='#/about'>Contato</a></li>
            </ul>

        </div>
    </nav>
)