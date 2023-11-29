import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import  '/./src/styles/MainNavbar.scss';
import { TokenContext } from '../contexts/TokenContext';



const Nav = () => {
  //const {token, setToken} = useContext(TokenContext)
  
  return (
    <nav>
        <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
        <div> {/*Ternary = hvis den først er true tage den statement før : hvis false den efter - kortere else/if */}
          <button> <NavLink to="ssologin"><p>Login</p>   </NavLink>  </button>
          <button> <NavLink to="ssologin"><p>Sign Up</p>   </NavLink>  </button> 
        </div>
    </nav>
  )
}

export default Nav