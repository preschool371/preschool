import React from 'react'
import PropTypes from 'prop-types'
import ClassesPageTemplate from '../../components/ClassesPageTemplate'

const ClassesPagePreview = ({ entry, widgetFor }) => {
  return (
    <ClassesPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
    />
  )
}

ClassesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ClassesPagePreview
