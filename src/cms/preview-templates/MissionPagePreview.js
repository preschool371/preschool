import React from 'react'
import PropTypes from 'prop-types'
import MissionPageTemplate from '../../components/MissionPageTemplate'

const MissionPagePreview = ({ entry, widgetFor }) => {
  return (
    <MissionPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      content={widgetFor('body')}
    />
  )
}

MissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MissionPagePreview
