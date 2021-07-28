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
    company: 0,
    skill: 1
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
    // if (window.pageYOffset > 1) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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
    if (window.pageYOffset === 0) {
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
      console.log('forwards=', this.state.forwards, window.pageYOffset)
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
  company6Click = () => {
    this.companies(6)
  }
  company7Click = () => {
    this.companies(7)
  }
  company8Click = () => {
    this.companies(8)
  }

  skills(param) {
    this.setState({ 
      skill: param
    })
  }

  skill1Click = () => {
    this.skills(1)
  }
  skill2Click = () => {
    this.skills(2)
  }

  render() {
    const { textIn, textOut, forwards, project, company, skill } = this.state
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
              <h1 className="centerTitle">Full-Stack Web Developer</h1>
              <div onClick={this.moveForwards}>
                <h2 className="centerTitle">Scroll</h2>
                <img className="scrollArrow"  alt="down arrow" src="./../assets/down-arrow.png"/>
              </div>
              
            </div>
            
          </div>
          <div className={ forwards ? textIn === 1 ? 'showF' : textOut === 1 ? 'hideF' : 'wait' : textIn === 1 ? 'showB' : textOut === 1 ? 'hideB' : 'wait'}>
            <div className="aboutPage contentPage">
              <h2>About</h2>
              <div className="twoHalves">
                <div>
                  <p>I am an enthusiastic and dedicated research software engineer who transitioned into full-stack development following a successful career as a medical writer and editor.</p>

                  <p>Throughout my career, I have brought a deep passion for science and technology to all of the work I do. In my engineering role at Imperial College London, I work closely with research scientists to develop cutting-edge, open-source applications used in public health research.</p>

                  <p>I work well on my own initiative and as part of a team, and have experience managing multiple ongoing projects while working both in-house and for clients. Additionally, I can leverage excellent problem-solving and attention-to-detail skills developed while writing and analysing complicated scientific texts in my previous roles.</p>
                </div>
                <img className="profile" src="./../assets/profile.jpg" />
              </div>
              
            </div>
          </div>
          <div className={ forwards ? textIn === 2 ? 'showF' : textOut === 2 ? 'hideF' : 'wait' : textIn === 2 ? 'showB' : textOut === 2 ? 'hideB' : 'wait'}>
            <div className="skillsPage contentPage">
              <h2 >Skills & Interests</h2>
              <div className="mobileToggle2"><h3 onClick={this.skill1Click} style={{  textDecoration: skill === 1 ? 'underline' : '' }}>Skills</h3><h3> | </h3><h3 onClick={this.skill2Click} style={{  textDecoration: skill === 2 ? 'underline' : '' }}>Interests</h3></div>
              
              <div className="twoHalves">
                <div className={skill === 1 ? 'half' : 'mobileToggle half'}>
                  <h3 className="mobileToggle">Technologies</h3>
                  <div className="techList">
                    <div className="techBundle">
                      <i className="devicon-vuejs-plain skillIcon"></i>
                      <p>Vue.js</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-typescript-plain skillIcon"></i>
                      <p>TypeScript</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-python-plain skillIcon"></i>
                      <p>Python</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-django-plain skillIcon"></i>
                      <p>Django</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-postgresql-plain skillIcon"></i>
                      <p>PostgreSQL</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-react-original skillIcon"></i>
                      <p>React</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-javascript-plain skillIcon"></i>
                      <p>JavaScript</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-bootstrap-plain skillIcon"></i>
                      <p>Bootstrap</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-kotlin-plain skillIcon"></i>
                      <p>Kotlin</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-spring-plain skillIcon"></i>
                      <p>Spring Boot</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-docker-plain skillIcon"></i>
                      <p>Docker</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-nodejs-plain skillIcon"></i>
                      <p>Node.js</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-express-original skillIcon"></i>
                      <p>Express.js</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-mongodb-plain skillIcon"></i>
                      <p>MongoDB</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-html5-plain skillIcon"></i>
                      <p>HTML5</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-css3-plain skillIcon"></i>
                      <p> CSS3</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-git-plain skillIcon"></i>
                      <p>Git</p>
                    </div>
                    <div className="techBundle">
                      <i className="devicon-github-plain skillIcon"></i>
                      <p>GitHub</p>
                    </div>
                  </div>
              
                  <h3 className="mobileToggle softSkills">Soft Skills</h3>
                  <p className="softSkills">Problem solving | Attention to detail | Team work | Test-driven development | Wireframing | Initiative | Communication | Agile development | Time management | Analysis</p>
                </div>
                <div className={skill === 2 ? 'half' : 'mobileToggle half'}>
                  <h3 className="mobileToggle" onClick={this.skill2Click}>Interests</h3>
                  <h4>Artificial Intelligence</h4>
                  <p>I’ve become increasingly obsessed with AI, consuming every book, documentary, and seminar on the topic I can get my hands on. I’m very optimistic about the increasing benefit AI will provide to society and I would eventually like to get involved in its development directly.</p>
                  <h4>Spanish</h4>
                  <p>I’ve been learning Spanish for a couple of years now. The process has taught me a lot about self-directed learning – an invaluable skill when learning to code! I eventually want to travel around South America to immerse myself in the language.</p>
                </div>
              </div>
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
                  <h2 className="showHeader">Project 4: Pokémon Unlimited</h2>
                  <p>For my final project, I was allocated 1 week. I decided to work solo because I wanted to have a hand in every part of its development. Paying tribute to a franchise from my childhood, Pokémon, the project used a database to store user-created Pokémon that could then be implemented into a grid-based game. I wanted to create something that was both fun and complex, testing my abilities and drawing on everything I’d learned so far. I created the back-end database using a Python-based framework called Django and managed it with PostgreSQL. I then installed React, a JavaScript-based framework, for the front end and used Axios to make database requests. </p>
                  <a href="http://bit.ly/pkmn-unlimited" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p4readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                  <p><img className="projectImage" alt="pokemonunlimited" src="./../assets/pokemonunlimited.png" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>
                  
                </div>
                <div className={project === 3 ? '' : 'wait'}>
                  <h2 className="showHeader">Project 3: BeeHive</h2>
                  <p>I worked in a team of four for a week to create this full-stack application. It was designed to help creatives from different specialties connect and collaborate on projects. We all contributed to the initial idea and design of the website, using wireframes to visualise it. We built the front end using React and Bulma and the back end with MongoDB, Express, and Node.js. I was involved in all parts of the website but took ownership of much of the back end and the messaging system. We used Agile methodology to distribute work, holding ‘scrums’ regularly and tracking our project on Trello.</p>
                  <a href="http://bit.ly/beehive-app" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p3readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                  <p><img className="projectImage" alt="beehive" src="./../assets/search1.png" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>
                </div>
                <div className={project === 1 ? '' : 'wait'}>
                  <h2 className="showHeader">Project 2: Geography Genius</h2>
                  <p>This was a quiz about country capitals and flags created after 2 days of pair coding with a course mate. We built it in React and used Axios requests to a third-party API called ‘Rest Countries’ to collect the quiz’s data. I wrote the majority of the logic using JavaScript while my partner focused on the visuals and animations.</p>
                  <a href="http://bit.ly/geo-genius" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/p2readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>
                  <p><img className="projectImage" alt="geographygenius" src="./../assets/flag.png" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>
                </div>
                <div className={project === 2 ? '' : 'wait'}>
                  <h2 className="showHeader">Project 1: Goblin Gold</h2>
                  <p>This was a PacMan-inspired grid-based game, which I built solo in 8 days. I used vanilla JavaScript to implement complex features such as pathfinding and decision trees in addition to spending time using CSS to create a visually appealing experience.</p>
                  <a href="http://bit.ly/goblin-gold" target="_blank" rel="noopener noreferrer">See Project</a>
                  <p></p>
                  <a href="http://bit.ly/pr1readme" target="_blank" rel="noopener noreferrer">See GitHub ReadMe</a>    
                  <p><img className="projectImage" alt="goblingold" src="./../assets/goblin.png" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>          
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
                  <img className="companyIcon" alt="icl" src="./../assets/icl.png" onClick={this.company6Click}/>
                  <img className="companyIcon" alt="ga" src="./../assets/ga.png" onClick={this.company1Click}/>
                  <img className="companyIcon" alt="syneos" src="./../assets/syneos.png" onClick={this.company2Click}/>
                  <img className="companyIcon cIcon" alt="ask" src="./../assets/ask.png" onClick={this.company3Click}/>
                  <img className="companyIcon" alt="lancet" src="./../assets/lancet.png" onClick={this.company4Click}/>
                  <img className="companyIcon" alt="kcl" src="./../assets/kcl2.png" onClick={this.company5Click}/>
                </div>
                <div className="experienceDesc">
                  <div className={company === 0 ? '' : 'wait'}>
                    <p>Click an icon to see details</p>
                  </div>
                  <div className={company === 6 ? '' : 'wait'}>
                    <h3>Research Software Engineer</h3>
                    <h4>Imperial College London (June 2020 – Present)</h4>
                    <hr />
                    <p>Within the RESIDE group at ICL, I develop several open-source applications used in public health research. Typically, these applications contain statistical models used by ministries of health around the world to inform healthcare policy for diseases such as HIV, malaria, and COVID-19.</p>
                    <p>I primarily develop the web interfaces for these applications, contributing modular, maintainable code to both the front and back end via continuous integration. I also ensure all code is fully covered by unit, integration, and Selenium tests throughout development. My team works in an Agile manner and I regularly give and receive code reviews.</p>
                    <p>Click below to see some of the applications I contribute to:</p>
                    <p></p>
                    <p onClick={this.company7Click} className="underlineHere">Naomi</p>
                    <p></p>
                    <p onClick={this.company8Click} className="underlineHere">OrderlyWeb</p>
                  </div>
                  <div className={company === 7 ? '' : 'wait'}>
                    <h3>Naomi</h3>
                    <h4><a href="https://reside-ic.github.io/projects/naomi/" target="_blank" rel="noopener noreferrer">https://reside-ic.github.io/projects/naomi/</a></h4>
                    <hr />
                    <p>Developed on behalf of UNAIDS, Naomi is a web interface for a model estimating various HIV epidemic indicators at a regional level. The application is used by teams of health officials from sub-Saharan African countries to inform HIV programme targets. It is comprised of an HIV model wrapped by an R API, a Spring Boot/Kotlin web server, and Vue/TypeScript front end.</p>
                    <p><img className="projectImage" alt="naomi" src="./../assets/naomi.jpeg" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>
                    <p onClick={this.company6Click} className="underlineHere">Back</p>
                  </div>

                  <div className={company === 8 ? '' : 'wait'}>
                    <h3>OrderlyWeb</h3>
                    <h4><a href="https://github.com/vimc/OrderlyWeb" target="_blank" rel="noopener noreferrer">https://github.com/vimc/OrderlyWeb</a></h4>
                    <hr />
                    <p>A web interface that helps researchers who are running statistical models maintain reproducibility in their reporting. The application makes it straightforward to associate analyses with their inputs, version outputs, and organise and distribute everything with a user-friendly front end. It consists of a Spring Boot/Kotlin web server and Vue/TypeScript front end, and interacts with an R package called Orderly.</p>
                    <p><img className="projectImage" alt="orderlyweb" src="./../assets/orderlyweb.jpeg" style={{ height: '280px', borderRadius: '25px', border: 'white 5px solid' }}/></p>
                    <p onClick={this.company6Click} className="underlineHere">Back</p>
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
                  <p><a className="noUnderline" href="https://github.com/Nicolas-Dolan" target="_blank" rel="noopener noreferrer">GitHub: github.com/Nicolas-Dolan</a></p>
                  <p><a className="noUnderline" href="https://www.linkedin.com/in/nicolas-dolan/" target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/nicolas-dolan/</a></p>
                </div>
                <div>
                  <p className="mobileToggle">Location:</p>
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