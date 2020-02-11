import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const DeclarationPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <main role='main'>
        <h1 className='title transparent-heading'>
          {title}
        </h1>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <PageContent className='content' content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

DeclarationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default DeclarationPageTemplate
