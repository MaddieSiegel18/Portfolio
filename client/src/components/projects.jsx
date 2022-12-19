import React, { useState, useEffect } from 'react'
import '../App.css'
import '../styles/projects.css'

function Projects() {
  /*Later add images, descriptions to this... */

  
  const [githubData, setGithubData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/MaddieSiegel18/repos', {
      /*Github recommendation to use this line for headers before using its API */
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
    })
      .then((res) => res.json())
      .then((data) => setGithubData(data))
  }, [])

  return (
    <div id="projects">

      <p className="projectTitle">Projects (contents will change...these are placeholders.)</p>
      {/* Div holding the various project repos */}
      <div className="projectList">
        {/* Loop through githubData array. Index is used in order to give each repo a picture with the corresponding index in the image array.  */}
        {githubData.map((repo, index) => (
          <div className="repo">
            <p key={repo.name} className="repoName">
              {/* .name is a property in githubs API */}
              {repo.name}
            </p>

            {/* .full_name is a property in githubs API */}

            <a
              key={repo.full_name} href={'https://github.com/' + repo.full_name}
              target="_blank"
              rel="noopener noreferrer"
              className="repoLink"
            >
              GitHub Link
            </a>

            {/* Use the index variable to get the corresponding image in the images array for each repo */}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
