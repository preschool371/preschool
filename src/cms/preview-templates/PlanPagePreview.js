import React from 'react'
import PropTypes from 'prop-types'
import PlanPageTemplate from '../../components/PlanPageTemplate'

const PlanPagePreview = ({ entry, widgetFor }) => {
  return (
    <PlanPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      content={widgetFor('body')}
      tasks={entry.getIn(['data', 'tasks']).toJS()}
    />
  )
}

PlanPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlanPagePreview
