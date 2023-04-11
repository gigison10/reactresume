import "../app.css";

function Main() {
  const udemyCSS = `Udemy Courses HTML & CSS =>
  `;
  const inProgress = `Uemy JavaScript & React Courses => In Progress...`;

  return (
    <div className="main">
      <div className="mainSection">
        <h1>Discover my Amazing Art Sace!</h1>
        <div className="myExpirience">
          Well, for now, it's about 6 months of expirience, after a break from
          learning I started again to study front-end development.Now I'm in the
          progress of learning deeper JavaScript and React, but i also finished
          HTML & CSS course on Udemy.So you can see my projects in the project
          section.At the moment I don't have a full-time job so i'm more focused
          of study, I'm also looking for internships to learn how to work in
          real world projects.
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="myUniverLesson">
          <p>Technical University of Moldova 2012 -2018</p>
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
          <p>{inProgress}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
