import React from 'react'
import PropTypes from 'prop-types'
import EventsPageTemplate from '../../components/EventsPageTemplate'

const EventsPagePreview = ({ entry, widgetFor }) => {
  return (
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      content={widgetFor('body')}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventsPagePreview
