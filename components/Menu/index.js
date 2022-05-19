import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom';

function Menu (){

    return(
      <div className='container'>
        <Link className='angora'  to={"/contato"} >Entrar</Link>
      </div>
    )
  }



export default Menu;
