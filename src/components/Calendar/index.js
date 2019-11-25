import React, { Component } from 'react'

class Calendar extends Component {
  state = {
    events: this.props.events,
  }

  render () {
    let eventsList = this.state.events.map(event => {
      return { name: event.node.summary, startDate: new Date(event.node.start), endDate: new Date(event.node.end) }
    })

    eventsList.sort((e1, e2) => e1.startDate > e2.startDate ? 1 : -1)
    let sortedEvents = eventsList.map((event, index) => {
      return (<tr key={index}>
        <td>
          <p className='has-text-centered'>{event.startDate.getDate()}</p>
          <p className='has-text-centered'>{event.startDate.toLocaleString('pl-PL', { month: 'long' })}</p>
          {(event.startDate.getHours() === event.endDate.getHours()) ? <p className='has-text-centered'>godz. {event.startDate.toLocaleString('pl-PL', { hour: 'numeric', minute: '2-digit' })}</p> : null }
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
