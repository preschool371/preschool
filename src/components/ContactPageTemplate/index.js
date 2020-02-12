import React, { Component } from 'react'
import Content from '../Content'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faInfo, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

class ContactPageTemplate extends Component {
  render() {
    const { title, meta_description, e_mail_1, e_mail_2, phone, head, content, contentComponent } = this.props
    const PageContent = contentComponent || Content
    return (
      <div>
        <Helmet>
          <title>{title} | Przedszkole nr 371</title>
        </Helmet>
        <main role='main' id='main' tabIndex='-1'>
          <section className='hero is-primary is-bold is-medium'>
            <div className='hero-body'>
              <div className='container'>
                <div className='columns'>
                  <div className='column is-10 is-offset-1'>
                    <div className='section'>
                      <h1 className='title transparent-heading'>
                        {title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              <div className='box'>
                <article className='media'>
                  <div className='media-content'>
                    <div className='content'>
                      <p className='title is-4'>
                        <strong>Przedszkole nr 371</strong>
                      </p>
                      <div><span aria-hidden='true'><FontAwesomeIcon icon={faUser} className='custom-width' aria-hidden='true' focusable='false' title='dyrektor placówki' /></span>
                        <p className='is-inline-block'>Dyrektor placówki: <strong>{head}</strong></p></div>
                      <div><FontAwesomeIcon icon={faInfo} className='custom-width' aria-hidden='true' focusable='false' title='numer nip' />
                        <p className='is-inline-block'>NIP: 522 24 24 306</p></div>
                      <div><FontAwesomeIcon icon={faMapMarkerAlt} className='custom-width' aria-hidden='true' focusable='false' title='adres' />
                        <address className='is-inline-block'>ul. Lencewicza 5, 01-493 Warszawa</address></div>
                      <div><FontAwesomeIcon icon={faPhone} className='custom-width' aria-hidden='true' focusable='false' title='telefon' />
                        <a id='tel' href={'tel:' + phone}>{phone}</a></div>
                      <div><FontAwesomeIcon icon={faEnvelope} className='custom-width' aria-hidden='true' focusable='false' title='email 1' />
                        <p className='is-inline-block' id='email_1'>{e_mail_1}</p></div>
                      <div><FontAwesomeIcon icon={faEnvelope} className='custom-width' aria-hidden='true' focusable='false' title='email 2' />
                        <p className='is-inline-block' id='email_2'>{e_mail_2}</p></div>
                    </div>
                  </div>
                </article>
                <section className='section'>
                  <PageContent className='content' content={content} />
                </section>
                <article className='media'>
                  <div className='media-content'>
                    <div className='content'>
                      <p className='title is-4'>
                        <strong>Jak nas znaleźć?</strong>
                      </p>
                      <div className='resp-container'>
                        <iframe title='lokalizacja przedszkola na mapie' className='resp-iframe' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2442.4106502884097!2d20.915653!3d52.2540876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecaff9d6d3995%3A0x309a53a336983250!2sPrzedszkole%20nr%20371!5e0!3m2!1spl!2spl!4v1568210404088!5m2!1spl!2spl' width='600' height='450' frameBorder='0' style={{ border: 0 }} allowFullScreen='' />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_description: PropTypes.string,
  e_mail_1: PropTypes.string,
  e_mail_2: PropTypes.string,
  phone: PropTypes.string,
  head: PropTypes.string,
}

export default ContactPageTemplate
