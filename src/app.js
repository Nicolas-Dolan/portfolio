import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Nicolas Dolan: Portfolio</h1>
        <p>Currently under construction</p>
        <img alt="construction site" src="https://www.nicepng.com/png/detail/152-1526179_website-under-construction-png-graphic-transparent-website-under.png"/>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)