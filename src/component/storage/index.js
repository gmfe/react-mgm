import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const prefix = '_react-gmm_'

class Storage extends React.Component {
  constructor (props) {
    super(props)

    this.save()
  }

  save () {
    Storage.set(this.props.name, this.props.value)
  }

  componentWillUpdate () {
    if (this.props.autoSave) {
      this.save()
    }
  }

  render () {
    return null
  }
}

const { localStorage } = window
let storageStatics = {
  set (key, value) {
    localStorage.setItem(prefix + key, JSON.stringify(value))
  },
  get (key) {
    const v = localStorage.getItem(prefix + key)
    return v ? JSON.parse(v) : v
  },
  remove (key) {
    localStorage.removeItem(prefix + key)
  },
  clear () {
    localStorage.clear()
  },
  getAll () {
    const result = {}
    _.each(_.range(localStorage.length), i => {
      let key = localStorage.key(i)
      if (key.startsWith(prefix)) {
        key = key.slice(prefix.length)
        result[key] = Storage.get(key)
      }
    })
    return _.keys(result) ? result : null
  }
}

Object.assign(Storage, storageStatics)

Storage.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  autoSave: PropTypes.bool
}
Storage.defaultProps = {
  autoSave: true
}

export default Storage
