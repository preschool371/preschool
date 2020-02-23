import React from 'react'
import PropTypes from 'prop-types'
import DeclarationPageTemplate from '../../components/DeclarationPageTemplate'

const DeclarationPagePreview = ({ entry, widgetFor }) => {
  return (
    <DeclarationPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      a11y_data_publikacja={entry.getIn(['data', 'a11y_data_publikacja'])}
      a11y_data_aktualizacja={entry.getIn(['data', 'a11y_data_aktualizacja'])}
      statement={entry.getIn(['data', 'statement'])}
      a11y_url={entry.getIn(['data', 'a11y_url'])}
      a11y_data_sporzadzenie={entry.getIn(['data', 'a11y_data_sporzadzenie'])}
      audit_method={entry.getIn(['data', 'audit_method'])}
      a11y_osoba={entry.getIn(['data', 'a11y_osoba'])}
      a11y_email={entry.getIn(['data', 'a11y_email'])}
      a11y_telefon={entry.getIn(['data', 'a11y_telefon'])}
      content={widgetFor('body')}
    />
  )
}

DeclarationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DeclarationPagePreview
