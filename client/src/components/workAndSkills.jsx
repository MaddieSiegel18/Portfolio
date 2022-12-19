import React from 'react'
import '../App.css'
import '../styles/workAndSkills.css'

function WorkAndSkills() {
 

  return (
   
    <div id="workAndSkillsdiv">
      <p className="resumeTitle">My Resume</p>
      <div className="innerFlex">
        <div>
          <p className="resumeHeading">
            Education
          </p>
          <div id="education" className="bulletFlex">
            <ul>
              <li className="bullet">
                B.S. in Mathematics from University of Pittsburgh
              </li>
              <li className="bullet">
                B.A. in Philosophy from University of Pittsburgh
              </li>
              <li className="bullet">
                Full Stack Web Development Program, Upright Education
                (expected) Dec 2022
              </li>
            </ul>
          </div>

          <p className="resumeHeading">
            Work Experience
          </p>

          
          <div id="experience" className="bulletFlex">
            <ul>
              <li className="bullet">
                Founded Schmilk Chocolate, developed an innovative system for the production of a new food category- milk chocolate without milk. 
                Steered company into doing business with national retailers. 
                Managed multiple categories of responsibilities including product development, sales, team management, investor relations, financial reporting.

              </li>
              <li className="bullet">
                Caregiver | Home Base 
                Worked within a wonderful team of people at a local nonprofit to help provide in-home care for a man who requires assistance with all aspects of daily life.
                </li>
            </ul>
          </div>

          <p className="resumeHeading">
            Technical Skills
          </p>

          <div id="skills" className="bulletFlex">
            <ul>
              <li className="bullet">
                Languages: JavaScript | HTML | CSS 
              </li>
              <li className="bullet">Frameworks: Node.js | React </li>
              <li className="bullet">
                Database Management:  MongoDB 
              </li>
              <li className="bullet">Source Control: Git | GitHub</li>
              <li className="bullet">Development: Visual Studio Code</li>
            </ul>
          </div>

          <div className="resumeCenter">
            <p className="resumeHeading">
              {/* Download my resume: */}
            </p>
            {/* <a className="downloadButton" href="./public/Maddie Siegel- resume.pdf" download>
              Download Document
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkAndSkills
