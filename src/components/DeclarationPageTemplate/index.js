import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const DeclarationPageTemplate = ({ title, content, contentComponent, a11y_url, a11y_data_publikacja, a11y_data_aktualizacja, statement, a11y_data_sporzadzenie, audit_method, a11y_osoba, a11y_email, a11y_telefon, procedure, physical_accessibility }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <main role='main' id='main' tabIndex='-1'>
        <section className='section' id='a11y-wstep'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title is-size-2'>
                 {title}
                  </h1>
                  <p><span id='a11y-podmiot'>Przedszkole nr 371 w Warszawie</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej <a href={`http://${a11y_url}`} id='a11y-url'>{a11y_url}</a>.
                  </p>
                  <p>
                    Data publikacji strony internetowej: <span id='a11y-data-publikacja'>{a11y_data_publikacja}</span>.
                  </p>
                  <p>
                    Data ostatniej istotnej aktualizacji: <span id='a11y-data-aktualizacja'>{a11y_data_aktualizacja}</span>.
                  </p>
                  <p>{statement}  </p>
                  <p>Oświadczenie sporządzono dnia: <span id='a11y-data-sporzadzenie'>{a11y_data_sporzadzenie}</span></p>
                  <p>{audit_method}</p>
                  <p>Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki</p>
                  <PageContent className='content' content={content} />
                </div>
                <div className='section'>
                  <h2 className='title is-size-3' id='a11y-kontakt'>Informacje zwrotne i dane kontaktowe</h2>
                  <p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest <span id='a11y-osoba'>{a11y_osoba}</span>, <span id='a11y-email'>{a11y_email}</span>. Kontaktować można się także dzwoniąc na numer telefonu <span id='a11y-telefon'>{a11y_telefon}</span>. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
                  </p>
                  <div id='a11y-procedura'>
                    <p>{procedure}</p>
               </div>
                </div>
                <div className='section'>
                <h2 className='title is-size-3'  id='a11y-architektura'>Dostępność architektoniczna</h2>
                <p>{physical_accessibility}
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

DeclarationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default DeclarationPageTemplate
