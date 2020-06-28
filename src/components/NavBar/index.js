import React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <nav className='navbar is-fixed-top'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item logo'>
          <div className='preschool-logo' aria-hidden='true' />
          <p className='title custom-title preschool-logo-text'>
            Witamy na stronie Przedszkola nr 371 w Warszawie
          </p>
        </Link>
        <button
          className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
          data-target='navMenu'
          onClick={toggleNavbar}
          aria-expanded={`${isActive ? 'true' : 'false'}`} aria-label='przycisk rozwijający nawigację na urządzeniach mobilnych'
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu' >

        <div className='navbar-end'>
          <Link className='navbar-item' to='/grupy'>
            Grupy
          </Link>
          <Link className='navbar-item' to='/zajecia'>
            Zajęcia
          </Link>
          <Link className='navbar-item' to='/aktualnosci'>
            Aktualności
          </Link>
          <Link className='navbar-item' to='/galeria'>
            Galeria
          </Link>
          <Link className='navbar-item' to='/rodo'>
            RODO
          </Link>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button is-primary is-outlined'
                  to='/kontakt'>
                  Kontakt
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
