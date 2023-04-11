import "./app.css";
import SideInfo from "./components/SideInfo";
import Main from "./components/Main";
import ProjectsDescription from "./components/ProjectsDescription";
import React, { useState } from "react";

function App() {
  let [mainSection, setMainSection] = useState(<Main />);
  let [divBlock, setDivBlock] = useState(<div className="block"></div>);
  let [mainProjects, setMainProjects] = useState("");

  function btnAbout() {
    setMainSection(<Main />);
    setDivBlock(<div></div>);
    setMainProjects("");
  }

  function btnProjects() {
    setMainSection("");
    setDivBlock("");
    setMainProjects(<ProjectsDescription />);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="btnAbout" onClick={btnAbout}>
          ABOUT ME
        </div>
        <div className="btnMyProjects" onClick={btnProjects}>
          MY PROJECTS
        </div>
      </div>
      <div className="bodySection">
        <SideInfo />
        {mainSection}
        {divBlock}
        {mainProjects}
      </div>
    </div>
  );
}

export default App;
