import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Calendar from '../Calendar'

const EventsPageTemplate = ({ title, content, contentComponent, events }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
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
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
                <a href='https://calendar.google.com/calendar/b/3?cid=cXBwZXBzamV0N25sNmloNnZraHVnbWdmcWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'><FontAwesomeIcon icon={faCalendarAlt} className='custom-width' />
                  <p className='is-inline-block'>dadaj kalendarz</p>
                </a>
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

EventsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default EventsPageTemplate
