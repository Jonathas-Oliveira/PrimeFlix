import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLinks';
function Menu (){
    return(
        
           <nav className='Menu'>
               <a href='/'>
                    <img src={Logo} className='Logo' alt='logo'></img>
               </a>

           <ButtonLink as='a' className='ButtonLink' href='/'>
                New vídeo
           </ButtonLink>
           </nav>
          
        
    );
}

export default  Menu;