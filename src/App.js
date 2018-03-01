import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { asyncComponent: null };
    this.loadChuck = this.loadChuck.bind(this);
    this.loadCSSChuck = this.loadCSSChuck.bind(this);
  }
  render() {
    if (this.state.asyncComponent != null) {
      return (
        <this.state.asyncComponent.default />
      )
    } else {
      return (
        <div>
          <button onClick={this.loadCSSChuck}> This button will load a chunk importing css modules </button>
          <button onClick={this.loadChuck}> This button will load normal chunk </button>
        </div>
      )
    }
  }
  loadCSSChuck() {
    console.log("yey loading css chunck");
    import(/* webpackChunkName: "withcss" */ './Modules.js').then((mod) => {
      this.setState({ asyncComponent: mod })
    })
  }
  loadChuck() {
    console.log("yey loading normal chunck");
    import(/* webpackChunkName: "nocss" */ './Normal.js').then((mod) => {
      this.setState({ asyncComponent: mod })
    })
  }
}
