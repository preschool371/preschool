import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/index.scss'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    return (
      <><nav className='quick-access-nav' aria-label='Skróty'>
          <ul>
            <li><a className='skip-link' href='#main'>Przejdź do zawartości</a></li>
            <li><Link className='skip-link' to='/kontakt'>Przejdź do strony Kontakt</Link></li>
            {/* <li><Link className='skip-link' to='/deklaracja-dostepnosci'>Przejdź do Deklaracji dostępności</Link></li> */}
            <li><a className='skip-link' href='#footer'>Przejdź do stopki</a></li>
            <li><Link className='skip-link' to='/'>Przejdź do strony głównej</Link></li>
          </ul>
      </nav>
      <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} /><>{this.props.children}</><CookieConsent buttonText='Zamknij'>Strona korzysta z plików cookies w celu realizacji usług i zgodnie z <Link className='policy-link' to='/polityka-prywatności'>Polityką Prywatności</Link>. Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce.
      </CookieConsent><Footer /></>
    )
  }
}

export default Layout
