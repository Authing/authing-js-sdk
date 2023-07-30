import { Component, PropsWithChildren } from 'react'
import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    console.log('this.props in App: ', this.props)
    return this.props.children
  }
}

export default App
