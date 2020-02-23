import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const DeclarationPageTemplate = ({ title, content, contentComponent, a11y_url, a11y_data_publikacja, a11y_data_aktualizacja, statement, a11y_data_sporzadzenie, audit_method, a11y_osoba, a11y_email, a11y_telefon }) => {
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
                </div>
                <div className='section'>
                  <h2 className='title is-size-3' id='a11y-kontakt'>Informacje zwrotne i dane kontaktowe</h2>
                  <p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest <span id='a11y-osoba'>{a11y_osoba}</span>, <span id='a11y-email'>{a11y_email}</span>. Kontaktować można się także dzwoniąc na numer telefonu <span id='a11y-telefon'>{a11y_telefon}</span>. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
                  </p>
                  <div id='a11y-procedura'>
                    <p>Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu.
                    </p>
                    <p> Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną chodzi oraz sposób kontaktu.
                    </p>
                    <p>Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji.
                    </p>
                    <p>Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem. Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.
                    </p>
                    <p>W przypadku, gdy podmiot publiczny odmówi realizacji żądania zapewnienia dostępności lub alternatywnego sposobu dostępu do informacji, wnoszący żądanie możne złożyć skargę w sprawie zapewniana dostępności cyfrowej strony internetowej, aplikacji mobilnej lub elementu strony internetowej, lub aplikacji mobilnej.
                    </p>
                    <p>Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do <a href='https://www.rpo.gov.pl/' target='_blank' rel='noopener' aria-label='Łącze do strony Rzecznika Praw Obywatelskich'>Rzecznika Praw Obywatelskich</a></p>
               </div>
                </div>
                <div className='section'>
                <h2 className='title is-size-3'  id='a11y-architektura'>Dostępność architektoniczna</h2>
                <PageContent className='content' content={content} />
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
