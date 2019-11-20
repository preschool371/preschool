import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

const yesterday = moment().subtract(1, 'days').toISOString()
let url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GATSBY_CALENDAR_ID}/events?timeMin=${yesterday}&key=${process.env.GATSBY_API_KEY}`

class Calendar extends Component {
  state = {
    loading: false,
    error: false,
    events: [],
    today: new Date(),
  }

  fetchEvents = () => {
    this.setState({ loading: true })
    axios
      .get(url)
      .then(resp => {
        this.setState({
          loading: false,
          events: resp.data.items,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount () {
    this.fetchEvents()
  }

  render () {
    let eventsList = this.state.events.map(event => {
      let start = event.start.dateTime || event.start.date
      let allDay = event.start.date
      let startDate = new Date(start)
      return { name: event.summary, startDate: startDate, id: event.id, allday: allDay }
    })

    eventsList.sort((e1, e2) => e1.startDate > e2.startDate ? 1 : -1)

    let sortedEvents = eventsList.map(event => {
      return (<tr key={event.id}>
        <td>
          <p className='has-text-centered'>{event.startDate.getDate()}</p>
          <p className='has-text-centered'>{event.startDate.toLocaleString('pl-PL', { month: 'long' })}</p>
          {!event.allday ? <p className='has-text-centered'>godz. {event.startDate.toLocaleString('pl-PL', { hour: 'numeric', minute: '2-digit' })}</p> : null }
        </td>
        <td>
          <p className='has-text-centered'>{event.name}</p>
        </td>
      </tr>)
    })
    return (
      <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th className='has-text-centered'>Dzień</th>
            <th className='has-text-centered'>Nazwa wydarzenia</th>
          </tr>
        </thead>
        <tbody>
          {sortedEvents}
        </tbody>
      </table>
    )
  }
}

export default Calendar
