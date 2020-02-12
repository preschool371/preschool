import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const DeclarationPageTemplate = ({ title, content, contentComponent }) => {
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
                  <p><span id='a11y-podmiot'>Przedszkole nr 371 w Warszawie</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej <a href='http://www.przedszkole371.nq.pl' id='a11y-url'>www.przedszkole371.nq.pl</a>.
                  </p>
                  <p>
                    Data publikacji strony internetowej: <span id='a11y-data-publikacja'>RRRR-MM-DD</span>.
                  </p>
                  <p>
                    Data ostatniej istotnej aktualizacji: <span id='a11y-data-aktualizacja'>2020-02-11</span>.
                  </p>
                  <p>Strona internetowa jest zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
                  </p>
                  <p>Oświadczenie sporządzono dnia: <span id='a11y-data-sporzadzenie'>RRRR-MM-DD</span></p>
                  <p>Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot publiczny.</p>
                  <p>Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki</p>
                  <PageContent className='content' content={content} />
                </div>
                <div className='section'>
                  <h2 className='title is-size-3' id='a11y-kontakt'>Informacje zwrotne i dane kontaktowe</h2>
                  <p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest <span id='a11y-osoba'>imię i nazwisko do osoby odpowiedzialnej</span>, <span id='a11y-email'>adres poczty elektronicznej</span>. Kontaktować można się także dzwoniąc na numer telefonu <span id='a11y-telefon'>numer telefonu</span>. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
                  </p>
                  <div id='a11y-procedura'>
                    <p>Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp.</p>
                    <p>Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji.</p>
                    <p>Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem.</p>
                    <p>Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.</p>
                    <p>W przypadku, gdy podmiot publiczny odmówi realizacji żądania zapewnienia dostępności lub alternatywnego sposobu dostępu do informacji, wnoszący żądanie możne złożyć skargę w sprawie zapewniana dostępności cyfrowej strony internetowej, aplikacji mobilnej lub elementu strony internetowej, lub aplikacji mobilnej. Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do <a href='https://www.rpo.gov.pl/'>Rzecznika Praw Obywatelskich</a>.</p>
                  </div>
                </div>
                <div className='section'>
                <h2 className='title is-size-3'  id='a11y-architektura'>Dostępność architektoniczna</h2>
                <p>
                  Opis dostępności wejścia do budynku i przechodzenia przez obszary kontroli
                  Opis dostępności korytarzy, schodów i wind
                  Opis dostosowań, na przykład pochylni, platform, informacji głosowych, pętlach indukcyjnych
                  Informacje o miejscu i sposobie korzystania z miejsc parkingowych wyznaczonych dla osób niepełnosprawnych
                  Informacja o prawie wstępu z psem asystującym i ewentualnych uzasadnionych ograniczeniach
                  Informacje o możliwości skorzystania z tłumacza języka migowego na miejscu lub online. W przypadku braku takiej możliwości, taką informację także należy zawrzeć


                  Ministerstwo Cyfryzacji, ul. Królewska 27, 00-060 Warszawa
                  Do budynku prowadzą 2 wejścia od ul. Królewskiej oznaczone literami A i B. Do obu wejść prowadzą schody. Przy schodach do wejścia A znajduje się podjazd dla wózków. Dla gości przeznaczone jest wejście A.

                  Nad wejściami A i B umieszczone są głośniki systemu Totupoint naprowadzające dźwiękowo osoby niewidome i słabowidzące.

                  Recepcja znajduje się po prawej stronie od wejścia A. Dalsze przejście zabezpieczone jest bramkami, przez które może przejechać osoba na wózku.

                  Dla osób na wózkach dostępny jest tylko korytarz i pomieszczenia na parterze. Do części korytarza prowadzą schody, które można pokonać za pomocą platformy przyschodowej. W budynku nie ma windy.

                  Toaleta dla osób niepełnosprawnych znajduje się na parterze, na wprost klatki schodowej.

                  Przed budynkiem wyznaczono 2 miejsca parkingowe dla osób niepełnosprawnych.

                  Do budynku i wszystkich jego pomieszczeń można wejść z psem asystującym i psem przewodnikiem.

                  W ministerstwie nie ma pętli indukcyjnych.

                  W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku powiększonym dla osób niewidomych i słabowidzących

                  W recepcji i w każdym innym miejscu można skorzystać z tłumacza polskiego języka migowego (PJM) online. Usługa jest dostępna w godzinach pracy urzędu. Usługa jest bezpłatna dla osób głuchych.
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
