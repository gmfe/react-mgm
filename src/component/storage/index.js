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

let storageStatics = {
  set (key, value) {
    window.localStorage.setItem(prefix + key, JSON.stringify(value))
  },
  get (key) {
    const v = window.localStorage.getItem(prefix + key)
    return v ? JSON.parse(v) : v
  },
  remove (key) {
    window.localStorage.removeItem(prefix + key)
  },
  clear () {
    window.localStorage.clear()
  },
  getAll () {
    const result = {}
    let key
    for (let i = 0; i < window.localStorage.length; i++) {
      key = window.localStorage.key(i)
      if (key.startsWith(prefix)) {
        key = key.slice(prefix.length)
        result[key] = Storage.get(key)
      }
    }
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
