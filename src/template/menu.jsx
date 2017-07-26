import React from 'react'

export default props => (
    <nav className='black' role='navigation'>
        <div className='nav-wrapper container' >
            <a id='logo-container' href="#" class='brand-logo'>Logo</a>
            
            <ul className="right hide-on-med-and-down">
                <li><a href='#/todos'>Tarefas</a></li>
                <li><a href='#/about'>Sobre</a></li>
            </ul>

            <ul id='nav-mobile' className='side-nav'>
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href='#' data-activates='nav-mobile' class='button-collapse'><i class='material-icons'>menu</i></a>
        </div>
    </nav>
)