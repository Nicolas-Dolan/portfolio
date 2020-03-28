import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'



class App extends React.Component {
  state = {
    textIn: 0,
    textOut: 0,
    forwards: true,
    moveable: false,
    project: 0
  }


  


  componentDidMount() {
    window.onscroll = () => this.handleScroll()
    setTimeout(() => {
      this.setState({
        moveable: true
      })
    }, 1500)

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
    if (textInP === 5) {
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
        textIn: 5,
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

  handleClick0  = () => {
    this.inOut(0)
  }

  handleClick1  = () => {
    this.inOut(1)
  }
  handleClick2  = () => {
    this.inOut(2)
  }
  handleClick3  = () => {
    this.inOut(3)
  }
  handleClick4  = () => {
    this.inOut(4)
  }
  handleClick5  = () => {
    this.inOut(5)
  }

  projects(param) {
    this.setState({ 
      project: param
    })
  }

  stone4Click = () => {
    this.projects(4)
  }

  render() {
    const { textIn, textOut, forwards, project } = this.state
    return (
      <div id="animate-area" className="homePage">
        <div className="centerIt">
          <h1 onClick={this.handleClick0}>Nicolas Dolan: Portfolio</h1>
          <div className="navBar">
            <div onClick={this.handleClick1} style={{  textDecoration: textIn === 1 ? 'underline' : '' }}>About</div> | 
            <div onClick={this.handleClick2} style={{  textDecoration: textIn === 2 ? 'underline' : '' }}>Skills</div> | 
            <div onClick={this.handleClick3} style={{  textDecoration: textIn === 3 ? 'underline' : '' }}>Projects</div> | 
            <div onClick={this.handleClick4} style={{  textDecoration: textIn === 4 ? 'underline' : '' }}>Experience</div> | 
            <div onClick={this.handleClick5} style={{  textDecoration: textIn === 5 ? 'underline' : '' }}>Contact</div>
          </div>
          <div className="buttonBar">
            <div onClick={this.moveBackwards}><img className="arrow" alt="left arrow" src="./../assets/left-arrow.png"/></div>
            <div onClick={this.moveForwards}><img className="arrow" alt="right arrow" src="./../assets/right-arrow.png"/></div>
            
          </div>
          
        </div>
        <div className="content">
          <div className={ forwards ? textIn === 0 ? 'showF' : textOut === 0 ? 'hideF' : 'wait' : textIn === 0 ? 'showB' : textOut === 0 ? 'hideB' : 'wait'}>
            <div className="titlePage contentPage">
              <h1>Full Stack Web Developer</h1>
              <div onClick={this.moveForwards}>
                <h2>Scroll</h2>
                <img className="scrollArrow"  alt="down arrow" src="./../assets/down-arrow.png"/>
              </div>
              
            </div>
            
          </div>
          <div className={ forwards ? textIn === 1 ? 'showF' : textOut === 1 ? 'hideF' : 'wait' : textIn === 1 ? 'showB' : textOut === 1 ? 'hideB' : 'wait'}>
            <div className="aboutPage contentPage">
              <h2>About</h2>
              <p>I am an enthusiastic and dedicated professional who is transitioning to a career in software engineering following a successful career as a medical writer and editor.  </p>

              <p>I have recently completed a 3-month software engineering immersive at General Assembly where I learned technical skills in full-stack web development. Additionally, I can leverage excellent problem-solving and attention-to-detail skills developed while writing and analysing complicated scientific texts in my previous roles. </p>

              <p>I work well on my own initiative and as part of a team, and have experience managing multiple ongoing projects while working both in-house and for clients. I maintain a broad interest in science and technology, and I am keen to continue contributing in these areas through my work.</p>
            </div>
          </div>
          <div className={ forwards ? textIn === 2 ? 'showF' : textOut === 2 ? 'hideF' : 'wait' : textIn === 2 ? 'showB' : textOut === 2 ? 'hideB' : 'wait'}>
            <div className="skillsPage contentPage">
              <h2>Skills</h2>
              <h3>Technologies</h3>
              <h4>Front End </h4>
              <p>React, JavaScript, HTML, CSS, Sass, Bulma, AJAX</p>
              <h4>Back End</h4>
              <p>Node.js, Express.js, MongoDB, Python, Django, PostgreSQL, SQL, Insomnia, TablePlus, Robo 3T</p>
              <h3>Auxiliary</h3>
              <p>Heroku, Git, GitHub, Command line, Mocha, Chai, Trello, npm, Yarn, Pip, Computer science fundamentals</p>
              <h3>Soft Skills</h3>
              <p>Problem solving, Attention to detail, Team work, Test-driven development, Wireframing, Initiative, Communication, Agile development, Time management, Analysis</p>
            </div>
          </div>
          <div className={ forwards ? textIn === 3 ? 'showF' : textOut === 3 ? 'hideF' : 'wait' : textIn === 3 ? 'showB' : textOut === 3 ? 'hideB' : 'wait'}>
            <div className="projectsPage contentPage">
              <div className="stoneCircle">
                <img className="stone stone1" alt="purplestone" src="./../assets/purplestone.png" />
                <img className="stone stone2" alt="greenstone" src="./../assets/greenstone.png" />
                <img className="stone stone3" alt="bluestone" src="./../assets/bluestone.png" />
                <img className="stone stone4" alt="redstone" src="./../assets/redstone.png" onClick={this.stone4Click}/>
              </div>
              <div className="projectDescription">
                <div className={project === 0 ? '' : 'wait'}>
                  <h2>Projects</h2>
                  <p>Click a stone to view a project</p>
                </div>
                <div className={project === 4 ? '' : 'wait'}>
                  <h2>Project 4: Pokémon Unlimited</h2>
                  <h3>Project: http://bit.ly/pkmn-unlimited ReadMe: http://bit.ly/p4readme</h3>
                  <p>For my final project, I was allocated 1 week. 
I decided to work solo because I wanted to have a hand in every part of its development. Paying tribute to a franchise from my childhood, Pokémon, the project used a database to store user-created Pokémon that could then be implemented into a grid-based game. I wanted to create something that was both fun and complex, testing my abilities and drawing on everything I’d learned so far. I created the back-end database using a Python-based framework called Django and managed it with PostgreSQL. I then installed React, a JavaScript-based framework, for the front end and used Axios to make database requests. </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className={ forwards ? textIn === 4 ? 'showF' : textOut === 4 ? 'hideF' : 'wait' : textIn === 4 ? 'showB' : textOut === 4 ? 'hideB' : 'wait'} style={{ backgroundColor: 'gray' }}>
            <p >Experience</p>
          </div>
          <div className={ forwards ? textIn === 5 ? 'showF' : textOut === 5 ? 'hideF' : 'wait' : textIn === 5 ? 'showB' : textOut === 5 ? 'hideB' : 'wait'} style={{ backgroundColor: 'gray' }}>
            <p >Contact</p>
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