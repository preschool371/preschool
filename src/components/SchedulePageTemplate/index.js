import React from 'react'
import Helmet from 'react-helmet'
import Group_classes from '../Group_classes'
import PropTypes from 'prop-types'

const SchedulePageTemplate = ({
  title,
  meta_description,
  schedule,
}) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <main role='main' id='main'>
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
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {schedule.heading}
                  </h2>
                  <p className='is-size-5'>{schedule.description}</p>
                  <Group_classes data={schedule.groups} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
)

SchedulePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_description: PropTypes.string,
  schedule: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    groups: PropTypes.array,
  }),
}

export default SchedulePageTemplate
