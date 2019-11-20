import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const PreschoolDayPagePreview = ({ entry, widgetFor }) => {
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      content={widgetFor('body')}
    />
  )
}

PreschoolDayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PreschoolDayPagePreview
