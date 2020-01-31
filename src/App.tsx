import * as React from 'react'

import UserList from './container/UserList'
import './App.css'
import loader from './assets/loader.svg'

interface IState {
  isLoading: boolean;
}

interface IProps {}

class App extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    // Req: Loader should be visible for 3 sec.
    window.setTimeout(this.loaderTime, 3000)
  }

  loaderTime = () => this.setState({ isLoading: false })

  renderLoader = () => (
    <div className="Loader-div">
      <img src={loader} className="Loader" />
    </div>
  )

  render () {
    const { isLoading } = this.state
    return (
      <div className="App-div">
        {isLoading ? this.renderLoader() : <UserList />}
      </div>
    )
  }
}

export default App
