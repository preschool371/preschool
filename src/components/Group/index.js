import React from 'react'
import PropTypes from 'prop-types'

const Group = ({ data }) => (
  <div className='columns'>
    {data.map(group => (
      <section className='group-name' key={group.group_name}>
        <div key={group.group_name} className='column' style={{ border: '1px solid #eaecee' }}>
          <h3 className='has-text-centered has-text-weight-semibold'>
            {group.group_name}
          </h3>
          <p className='has-text-centered'>{group.description}</p>
          <p className='has-text-centered'>wychowawca:</p>
          <p className='has-text-centered group-teacher'>{group.group_teacher}</p>
        </div>
      </section>
    ))}
  </div>
)

Group.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      group_name: PropTypes.string,
      description: PropTypes.string,
      group_teacher: PropTypes.string,
    })
  ),
}

export default Group
