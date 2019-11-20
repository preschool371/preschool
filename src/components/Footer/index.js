import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns has-text-centered'>
          <Link className='column navbar-item' to='/'>
            Strona główna
          </Link>
          <Link className='column navbar-item' to='/grupy'>
            Grupy
          </Link>
          <Link className='column navbar-item' to='/zajecia'>
            Zajęcia
          </Link>
          <Link className='column navbar-item' to='/aktualnosci'>
            Aktualności
          </Link>
          <Link className='column navbar-item' to='/galeria'>
            Galeria
          </Link>
          <Link className='column navbar-item' to='/rodo'>
            RODO
          </Link>
          <Link
            className='column navbar-item'
            to='/kontakt'>
            Kontakt </Link>
          <div className='column navbar-item'><a href='http://przedszkole371.bip.um.warszawa.pl/default.htm' target='_blank' rel='noopener'><div role='button' className='bip-logo' aria-label='Łącze do Biuletynu Informacji Publicznej' /></a></div>
        </div>
        <div className='has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Powered by <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener'>Gatsby</a> and <a href='https://www.netlifycms.org' target='_blank' rel='noopener'>Netlify CMS</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
