import React from 'react'
import PropTypes from 'prop-types'
import AlbumTemplate from '../../components/AlbumTemplate'

const AlbumPreview = ({ entry, widgetFor }) => (
  <AlbumTemplate
    title={entry.getIn(['data', 'title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
    images={entry.getIn(['data', 'album'])}
  />
)

AlbumPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AlbumPreview
