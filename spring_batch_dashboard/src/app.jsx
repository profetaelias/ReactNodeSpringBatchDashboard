import React from 'react';
import Menu from './template/menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes'

export default props => (
    <div className='container'>
       <Menu/>
       <Routes/>
    </div>
)