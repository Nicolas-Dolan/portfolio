import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'



class App extends React.Component {
  state = {
    textIn: 0,
    textOut: 0,
    forwards: true,
    moveable: true
  }


  


  componentDidMount() {
    window.onscroll = () => this.handleScroll()
    // setInterval(() => {
    //   this.setState({
    //     moveable: true
    //   })
    //   console.log('offset reset', window.pageYOffset)
    // }, 3000)
  }
  
  componentWillUnmount() {
    window.onscroll = null
  }

  handleScroll(){
    const { moveable } = this.state
    if (window.pageYOffset === 0) {
      if (moveable) {
        this.moveForwards()
        console.log('moving forwards!')
        setTimeout(() => {
          this.setState({
            moveable: true
          })
          // console.log('timer', this.state.moveable)
        }, 1500)
      }
      this.setState({ forwards: true, moveable: false })
      // console.log('forwards=', this.state.forwards, window.pageYOffset)
      window.scroll(0, 1)
      
    }
    if (window.pageYOffset > 1) {
      if (moveable) {
        this.moveBackwards()
        console.log('moving backwards!')
        setTimeout(() => {
          this.setState({
            moveable: true
          })
          // console.log('timer', this.state.moveable)
        }, 1500)
      }
      this.setState({ forwards: false, moveable: false })
      // console.log('forwards=', this.state.forwards, window.pageYOffset)
      window.scroll(0, 1)
    }
  }

  moveForwards = () => {
    const textInP = this.state.textIn
    if (textInP === 2) {
      this.setState({ 
        textOut: this.state.textIn,
        textIn: 0,
        forwards: true
      })
    } else {
      this.setState({ 
        textOut: this.state.textIn,
        textIn: textInP + 1,
        forwards: true
      })
    }
    console.log(this.state)
  }

  moveBackwards = () => {
    const textInP = this.state.textIn
    if (textInP === 0) {
      this.setState({ 
        textOut: this.state.textIn,
        textIn: 2,
        forwards: false
      })
    } else {
      this.setState({ 
        textOut: this.state.textIn,
        textIn: textInP - 1,
        forwards: false
      })
    }
    console.log(this.state)
  }

  inOut(textInParam) {
    // if (this.state.textOut !== 0) {
    //   this.setState({ 
    //     textOut: this.state.textIn,
    //     direction: 'forward'
    //   })
    //   setTimeout(() => {
    //     this.setState({
    //       textIn: textInParam
    //     })
    //   }, 3000)
    // } else {
    this.setState({ 
      textOut: this.state.textIn,
      textIn: textInParam,
      forwards: true
    })
    // }
  }


  handleClick1  = () => {
    this.inOut(1)
  }
  handleClick2  = () => {
    this.inOut(2)
  }

  render() {
    const { textIn, textOut, forwards } = this.state
    return (
      <div id="animate-area" className="homePage">
        <div className="centerIt">
          <h1>Nicolas Dolan: Portfolio</h1>
          <button onClick={this.handleClick1}>Text 1</button>
          <button onClick={this.handleClick2}>Text 2</button>
          <button onClick={this.moveForwards}>Forwards</button>
          <button onClick={this.moveBackwards}>Backwards</button>
        </div>
        <div className="content">
          {/* <div className={ textIn === 1 ? 'showF' : textOut === 1 ? 'hideF' : 'wait' } style={{ backgroundColor: 'gray' }}> */}
          <div className={ forwards ? textIn === 1 ? 'showF' : textOut === 1 ? 'hideF' : 'wait' : textIn === 1 ? 'showB' : textOut === 1 ? 'hideB' : 'wait'} style={{ backgroundColor: 'gray' }}>
            <p >This is test text 1</p>
          </div>
          {/* <div className={ textIn === 2 ? 'showF' : textOut === 2 ? 'hideF' : 'wait' } style={{ backgroundColor: 'gray' }}> */}
          <div className={ forwards ? textIn === 2 ? 'showF' : textOut === 2 ? 'hideF' : 'wait' : textIn === 2 ? 'showB' : textOut === 2 ? 'hideB' : 'wait'} style={{ backgroundColor: 'gray' }}>
            <p >This is test text 2</p>
          </div>
          
        </div>
       
        {/* <img alt="construction site" src="https://www.nicepng.com/png/detail/152-1526179_website-under-construction-png-graphic-transparent-website-under.png"/> */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)