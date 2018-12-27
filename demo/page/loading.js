import React from 'react'
import Page from '../../src/component/page'
import Loading from '../../src/component/loading'

class LoadingWrap extends React.Component {
  render () {
    return (
      <Page>
        <h2>loading</h2>
        <Loading>loading...</Loading>
        <Loading line>loading...</Loading>
      </Page>
    )
  }
}

export default LoadingWrap
