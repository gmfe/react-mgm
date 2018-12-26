import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

class Tabs extends React.Component {
  render () {
    const { tabIndex, list, onChange } = this.props

    return (
      <div className='tabs'>
        {_.map(list, (v, i) => (
          <div
            key={v}
            className={classNames('tabs-item', { active: tabIndex === i })}
            onClick={() => onChange(i)}
          >
            <div className='tabs-item-text'>{v}</div>
          </div>
        ))}
      </div>
    )
  }
}

Tabs.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func
}

export default Tabs
