import React from 'react'
import PropTypes from 'prop-types'
import SchedulePageTemplate from '../../components/SchedulePageTemplate'

const SchedulePagePreview = ({ entry }) => {
  return (
    <SchedulePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      schedule={entry.getIn(['data', 'schedule']).toJS()}
    />
  )
}

SchedulePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SchedulePagePreview
