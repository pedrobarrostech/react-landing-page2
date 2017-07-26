import 'modules/materialize-css/dist/css/materialize.min.css'
import '../template/custom.css'
import '../template/fonts.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)