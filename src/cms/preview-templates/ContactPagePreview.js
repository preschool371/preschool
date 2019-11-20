import React from 'react'
import PropTypes from 'prop-types'
import ContactPageTemplate from '../../components/ContactPageTemplate'

const ContactPagePreview = ({ entry }) => {
  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      head={entry.getIn(['data', 'head'])}
      phone={entry.getIn(['data', 'phone'])}
      e_mail_2={entry.getIn(['data', 'e_mail_2'])}
      e_mail_1={entry.getIn(['data', 'e_mail_1'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
