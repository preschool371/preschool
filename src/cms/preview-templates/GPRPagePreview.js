import React from 'react'
import PropTypes from 'prop-types'
import GPRPageTemplate from '../../components/GprPageTemplate'

const GPRPagePreview = ({ entry, widgetFor }) => {
  return (
    <GPRPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
    />
  )
}

GPRPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GPRPagePreview
