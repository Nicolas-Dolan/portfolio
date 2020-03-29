import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'



class App extends React.Component {
  state = {
    textIn: 0,
    textOut: 0,
    forwards: true,
    moveable: false,
    project: 0,
    company: 0
  }


  


  componentDidMount() {
    window.onscroll = () => this.handleScroll()
    window.scroll(0, 1)
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
  stone1Click = () => {
    this.projects(1)
  }
  stone2Click = () => {
    this.projects(2)
  }
  stone3Click = () => {
    this.projects(3)
  }
  stone4Click = () => {
    this.projects(4)
  }

  companies(param) {
    this.setState({ 
      company: param
    })
  }

  company1Click = () => {
    this.companies(1)
  }
  company2Click = () => {
    this.companies(2)
  }
  company3Click = () => {
    this.companies(3)
  }
  company4Click = () => {
    this.companies(4)
  }
  company5Click = () => {
    this.companies(5)
  }

  render() {
    const { textIn, textOut, forwards, project, company } = this.state
    return (
      <div id="animate-area" className="homePage">
        <div className="centerIt sideBar">
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
              <h4>Auxiliary</h4>
              <p>Heroku, Git, GitHub, Command line, Mocha, Chai, Trello, npm, Yarn, Pip, Computer science fundamentals</p>
              <h3>Soft Skills</h3>
              <p>Problem solving, Attention to detail, Team work, Test-driven development, Wireframing, Initiative, Communication, Agile development, Time management, Analysis</p>
            </div>
          </div>
          <div className={ forwards ? textIn === 3 ? 'showF' : textOut === 3 ? 'hideF' : 'wait' : textIn === 3 ? 'showB' : textOut === 3 ? 'hideB' : 'wait'}>
            <div className="projectsPage contentPage">
              <div className="stoneCircle">
                <img className="stone stone1" alt="purplestone" src="./../assets/purplestone.png" onClick={this.stone1Click}/>
                <img className="stone stone2" alt="greenstone" src="./../assets/greenstone.png" onClick={this.stone2Click}/>
                <img className="stone stone3" alt="bluestone" src="./../assets/bluestone.png" onClick={this.stone3Click}/>
                <img className="stone stone4" alt="redstone" src="./../assets/redstone.png" onClick={this.stone4Click}/>
              </div>
              <div className="projectDescription">
                <div className={project === 0 ? '' : 'wait'}>
                  <h2>Projects</h2>
                  <p>Click a stone to view a project</p>
                </div>
                <div className={project === 4 ? '' : 'wait'}>
                  <h2>Project 4: Pokémon Unlimited</h2>
                  <p>For my final project, I was allocated 1 week. I decided to work solo because I wanted to have a hand in every part of its development. Paying tribute to a franchise from my childhood, Pokémon, the project used a database to store user-created Pokémon that could then be implemented into a grid-based game. I wanted to create something that was both fun and complex, testing my abilities and drawing on everything I’d learned so far. I created the back-end database using a Python-based framework called Django and managed it with PostgreSQL. I then installed React, a JavaScript-based framework, for the front end and used Axios to make database requests. </p>
                  <a href="http://bit.ly/pkmn-unlimited" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p4readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                </div>
                <div className={project === 3 ? '' : 'wait'}>
                  <h2>Project 3: BeeHive</h2>
                  <p>I worked in a team of four for a week to create this full-stack application. It was designed to help creatives from different specialties connect and collaborate on projects. We all contributed to the initial idea and design of the website, using wireframes to visualise it. We built the front end using React and Bulma and the back end with MongoDB, Express, and Node.js. I was involved in all parts of the website but took ownership of much of the back end and the messaging system. We used Agile methodology to distribute work, holding ‘scrums’ regularly and tracking our project on Trello.</p>
                  <a href="http://bit.ly/beehive-app" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p3readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                </div>
                <div className={project === 2 ? '' : 'wait'}>
                  <h2>Project 2: Geography Genius</h2>
                  <p>This was a quiz about country capitals and flags created after 2 days of pair coding with a course mate. We built it in React and used Axios requests to a third-party API called ‘Rest Countries’ to collect the quiz’s data. I wrote the majority of the logic using JavaScript while my partner focused on the visuals and animations.</p>
                  <a href="http://bit.ly/geo-genius" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p2readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                </div>
                <div className={project === 1 ? '' : 'wait'}>
                  <h2>Project 1: Goblin Gold</h2>
                  <p>This was a PacMan-inspired grid-based game, which I built solo in 8 days. I used vanilla JavaScript to implement complex features such as pathfinding and decision trees in addition to spending time using CSS to create a visually appealing experience.</p>
                  <a href="http://bit.ly/goblin-gold" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p1readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>              
                </div>
              </div>
            </div>
          </div>
          <div className={ forwards ? textIn === 4 ? 'showF' : textOut === 4 ? 'hideF' : 'wait' : textIn === 4 ? 'showB' : textOut === 4 ? 'hideB' : 'wait'}>
            <div className="experiencePage contentPage">
              <h2>Experience & Education</h2>
              <div className="companies">
                <div className="dnaContainer"><img className="dna" alt="dna" src="./../assets/dna7.png" /></div>
                
                <div className="companyList">
                  <img className="companyIcon" alt="ga" src="./../assets/ga.png" onClick={this.company1Click}/>
                  <img className="companyIcon" alt="syneos" src="./../assets/syneos.png" onClick={this.company2Click}/>
                  <img className="companyIcon" alt="ask" src="./../assets/ask.png" onClick={this.company3Click}/>
                  <img className="companyIcon" alt="lancet" src="./../assets/lancet.png" onClick={this.company4Click}/>
                  <img className="companyIcon" alt="kcl" src="./../assets/kcl2.png" onClick={this.company5Click}/>
                </div>
                <div className="experienceDesc">
                  <div className={company === 0 ? '' : 'wait'}>
                    <p>Click an icon to see details</p>
                  </div>
                  <div className={company === 1 ? '' : 'wait'}>
                    <h3>Software Engineering Immersive</h3>
                    <h4>General Assembly, London (Dec 2019 – March 2020)</h4>
                    <hr />
                    <p>During this full-time course, I immersed myself in the world of software engineering, exploring a wide range of technologies and development methodologies. Working solo and in teams, I produced four main projects and numerous side projects. The course focused on the MERN stack, but also covered Python with Django and best practices such as test-driven development and the Agile workflow.</p>
                  </div>
                  <div className={company === 2 ? '' : 'wait'}>
                    <h3>Medical Writer</h3>
                    <h4>Syneos Health, London (July 2019 – Nov 2019)</h4>
                    <hr />
                    <p>Wrote a wide range of scientific content for pharmaceutical and biotechnology companies, such as academic papers and educational materials.</p>
                    <p>Interpreted scientific data from a variety of sources and adapted this information according to the audience and client brief.</p>
                    <p>Cross checked, reviewed, and quality checked the work of other employees.</p>
                    <p>Maintained an in-depth understanding of several therapeutic areas, and actively applied knowledge of the client’s products (pharmaceutical drugs and medical devices), their competitors, and therapy area trends.</p>
                    <p>Participated in team projects, and adhered to delivery timelines, budgets, and client expectations.</p>
                  </div>
                  <div className={company === 3 ? '' : 'wait'}>
                    <h3>Medical Writer</h3>
                    <h4>AS&K, London (April 2018 – July 2019)</h4>
                    <hr />
                    <p>Similar role to that at Syneos Health (above).</p>
                  </div>
                  <div className={company === 4 ? '' : 'wait'}>
                    <h3>Assistant Editor & Senior Assistant Editor</h3>
                    <h4>The Lancet, London (Sept 2014 – March 2018)</h4>
                    <hr />
                    <p>Edited ‘fast-track’ primary research and review material in preparation for publication in the journal, checking scientific accuracy, use of English, clarity, readability, and application of house style.</p>
                    <p>Managed multiple ongoing projects and met tight deadlines.</p>
                    <p>Created Excel spreadsheets, which automated time-consuming routine copy editing tasks such as reformatting data tables. I then shared these spreadsheets with my colleagues, saving the company hundreds of hours in labour time.</p>
                  </div>
                  <div className={company === 5 ? '' : 'wait'}>
                    <h3>BSc in Biomedical Science</h3>
                    <h4>King’s College London (2008 - 2011)</h4>
                    <hr />
                    <p>During this degree, I selected modules mainly related to neuroscience, pharmacology, and physiology. I enjoyed the opportunity to deep-dive into the intricacies of the human body and found that the more I learned, the more my curiosity grew. I’ve maintained this interest throughout my career and, although I am not exclusively looking for health-care-related opportunities, I am very interested in continuing to work in the medical/health sector as a developer.</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          <div className={ forwards ? textIn === 5 ? 'showF' : textOut === 5 ? 'hideF' : 'wait' : textIn === 5 ? 'showB' : textOut === 5 ? 'hideB' : 'wait'}>
            <div className="contactPage contentPage">
              <h2>Contact</h2>
              <div className="contactDetails">
                <div>
                  <p>Email: nicolas.dolan@ymail.com</p>
                  <p>GitHub: github.com/Nicolas-Dolan</p>
                  <p>LinkedIn: linkedin.com/in/nicolas-dolan/</p>
                </div>
                <div>
                  <p>Location:</p>
                  <img className="earth" alt="earth" src="./../assets/earth2.png" />
                </div>
              </div>
            </div>
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