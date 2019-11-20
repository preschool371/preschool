import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Group from '../Group'

const GroupsPageTemplate = ({
  title,
  meta_description,
  groups,
}) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='section'>
              <h1 className='title transparent-heading'>
                {title}
              </h1>
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
              <div className='content'>
                <h2>
                  {groups.heading}
                </h2>
                <p className='section'>
                  <Group data={groups.groups} />
                </p>
              </div>
            </div></div></div></div></section>
  </div>
)

GroupsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_description: PropTypes.string,
  groups: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    groups: PropTypes.array,
  }),
}

export default GroupsPageTemplate
