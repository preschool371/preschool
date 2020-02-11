import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ClassesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <main role='main'>
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
            <div className='section'>
              <PageContent className='content' content={content} />
              <div className='columns preschool_links'>
                <Link className='box' to='/roczny-plan-pracy' >Roczny plan pracy</Link>
                <Link className='box' to='/dzien-w-przedszkolu'>Dzień w przedszkolu</Link>
                <Link className='box' to='/harmonogram-imprez'>Harmonogram imprez</Link>
                <Link className='box' to='/zajecia-dodatkowe'>Zajęcia dodatkowe</Link>
                <Link className='box' to='/koncepcja-pracy-przedszkola'>Koncepcja pracy przedszkola</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

ClassesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default ClassesPageTemplate
