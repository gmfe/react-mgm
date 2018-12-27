import React from 'react'
import Page from '../../src/component/page'

class DemoWrap extends React.Component {
  render () {
    return (
      <Page
        infiniteLoader
        ptrOnRefresh={resolve => setTimeout(() => resolve(), 50000)}
      >
        <div>
          asdfaf
        </div>
      </Page>
    )
  }
}

export default DemoWrap
