import "../app.css";

function Main() {
  const udemyCSS = `Udemy Courses HTML & CSS =>
  `;
  const inProgress = `JavaScript, React/Redux, Firebase,  Courses => In Progress...`;

  return (
    <div className="main">
      <div className="mainSection">
        <h1>Discover my Amazing Art Sace!</h1>
        <div className="myExpirience">
          I am currently dedicated to advancing my front-end development skills,
          with a particular focus on deepening my understanding of JavaScript,
          React/Redux, and Firebase. I have successfully completed an HTML & CSS
          course on Udemy, which helped me to better understand what is front
          end developing in the beginning. In addition to my studies, I have
          been actively working on personal projects that showcase my growing
          proficiency. You can explore these projects in the MY PROJECTS
          section, where I have implemented various technologies, including,
          Redux, and Firebase. While I am continuously expanding my knowledge
          and skills, I am also mindful of the importance of real-world
          experience. Therefore, I am actively seeking internships or
          opportunities to collaborate on real projects, where I can further
          enhance my abilities and gain practical insights into the industry. I
          am excited about the opportunities ahead to contribute to impactful
          projects and further develop my front-end development skills.
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="myUniverLesson">
          <p>Technical University of Moldova 2012 -2018</p>
          <p>{inProgress}</p>
          <p>
            {udemyCSS}{" "}
            <a
              className="udemyLink"
              href="https://www.udemy.com/certificate/UC-3a9c155a-5b05-4ab9-b253-66574f6a3e6b/"
              target="_blank"
            >
              'https://www.udemy.com/certificate/UC-3a9c155a-5b05-4ab9-b253-66574f6a3e6b/'
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
