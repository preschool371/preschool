import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const PlanPageTemplate = ({ title, content, contentComponent, tasks, finalNote }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title transparent-heading'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          {tasks.map(tasks => (
            <div key={tasks.task_name}>
              <h4 className='has-text-centered title is-4'>
                {tasks.task_name}
              </h4>
              <p>{tasks.task_aims}</p>
              <p>{tasks.task_aims_detailed}</p>
              <table className='table is-striped'>
                <thead>
                  <tr>
                    <th>rodzaj zadania</th>
                    <th>terminy</th>
                    <th>osoba odpowiedzialna</th>
                    <th>uwagi</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.activities.map(activity => (
                    <tr key={activity}>
                      <td>{activity.activity_name}</td>
                      <td>{activity.activity_due}</td>
                      <td>{activity.person_in_charge}</td>
                      <td>{activity.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
          ))}
          <p><em>{finalNote}</em></p>
        </div>
      </section>
    </div>
  )
}

PlanPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tasks: PropTypes.array,
}

export default PlanPageTemplate
