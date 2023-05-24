function Projects(props) {
  return (
    <div className="project">
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Go Task</h1>
          {props.gotask}
        </div>
        <a
          className="img gotask"
          href="https://gigison10.github.io/GoTask/"
          target="_blank"
        ></a>
      </div>{" "}
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Monster Rolodex</h1>
          {props.monster}
        </div>
        <a
          className="img monster"
          href="https://gigison10.github.io/monster-rolodex/"
          target="_blank"
        ></a>
      </div>
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Mapty</h1>
          {props.mapty}
        </div>
        <a
          className="img mapty"
          href="https://maptyjsudemy.netlify.app/"
          target="_blank"
        ></a>
      </div>
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Dice Rolling JavaScript</h1>
          {props.pigGame}
        </div>
        <a
          className="img pigGame"
          href="https://pigamejsproject.netlify.app/"
          target="_blank"
        ></a>
      </div>
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Guess My Number JS</h1>
          {props.guessMyNumber}
        </div>
        <a
          className="img guessMyNumber"
          href="https://guessmynrjsproject.netlify.app/"
          target="_blank"
        ></a>
      </div>
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Omnyfood HTML & CSS Responsive Design</h1>
          {props.projectDescription}
        </div>
        <a
          className="img omnifood"
          href="https://myhtmlcssproject.netlify.app/"
          target="_blank"
        ></a>
      </div>
      <div className="projectInfo">
        <div className="projectDescription">
          <h1>Chair Store HTML & CSS</h1>
          {props.chairDescription}
        </div>
        <a
          className="img chairStore"
          href="https://chairstorecssprojject.netlify.app/"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default Projects;
