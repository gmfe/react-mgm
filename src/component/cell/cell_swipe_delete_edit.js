import React from 'react'
import PropTypes from 'prop-types'
import CellSwipe from './cell_swipe'
import Toast from '../toast'
import Dialog from '../dialog'
import { getLocale } from '../../locales'

const Confirm = Dialog.confirm

class CellSwipeDeleteEdit extends React.Component {
  handleEdit (bodyText, list, onClose) {
    const { onEdit } = this.props

    let name = ''
    Confirm({
      title: getLocale('cell', 'rename'),
      children: (
        <div className='border' style={{ padding: '2px 4px' }}>
          <input
            id='nameInput'
            className='weui-input'
            type='text'
            placeholder={getLocale('cell', 'placeholder')}
            defaultValue={bodyText}
          />
        </div>
      ),
      onConfirm: () => {
        name = window.document.getElementById('nameInput').value

        if (!name) {
          Toast.info(getLocale('cell', 'info1'))
          return Promise.reject(new Error())
        }
        if (name.length > 5) {
          Toast.info(getLocale('cell', 'info2'))
          return Promise.reject(new Error())
        }

        return onEdit(list, name)
      }
    }).then(() => { onClose() })
  }

  handleDelete (bodyText, list, onClose) {
    const { onDelete } = this.props

    Confirm({
      title: getLocale('cell', 'warning'),
      children: `${getLocale('cell', 'warningConfirm')}${bodyText}?`
    }).then(() => {
      onDelete(list)
    }).then(onClose)
  }

  render () {
    const { list, onPress, bodyText, footerText } = this.props
    return (
      <CellSwipe
        key={list.id}
        bodyText={bodyText}
        footerText={footerText}
        onPress={onPress}
        right={[{
          text: getLocale('cell', 'rename'),
          onPress: this.handleEdit.bind(this, bodyText, list),
          style: {
            background: '#C7C7CC',
            width: '90px'
          }
        }, {
          text: getLocale('cell', 'delete'),
          onPress: this.handleDelete.bind(this, bodyText, list),
          style: {
            background: '#E64340',
            width: '60px'
          }
        }]}
      />
    )
  }
}

CellSwipeDeleteEdit.propTypes = {
  list: PropTypes.object.isRequired,
  bodyText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPress: PropTypes.func
}

export default CellSwipeDeleteEdit
