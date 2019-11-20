import React from 'react'
import PropTypes from 'prop-types'
import GroupsPageTemplate from '../../components/GroupsPageTemplate'

const GroupsPagePreview = ({ entry }) => {
  return (
    <GroupsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      groups={entry.getIn(['data', 'groups']).toJS()}
    />
  )
}

GroupsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default GroupsPagePreview
