function SideInfo() {
  const langs = {
    english: "English => B1 ~ B2",
    russian: "Russian => Fluent",
    romanian: "Romanian => Native",
  };

  return (
    <div className="sideInfo">
      <div className="sideInfoPhotoSection">
        <img src={require("./1.jpg")} alt="ProfilePicture" />
        <p>IZMAN EUGEN</p>
        <h6>Front-end Developer</h6>
      </div>
      <div className="sideInfoContact">
        <h3>CONTACT INFO</h3>
        <p>Phone: +373 61006011</p>
        <p>email: eugen.izman@gmail.com</p>
        <a href="https://github.com/gigison10" target="_blank">
          https://github.com/gigison10
        </a>
        <a href="https://linkedin.com/in/eugenizman" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="sideInfoSkills">
        <h3>SKILLS</h3>
        <div>HTML & CSS</div>
        <div>JavaScript</div>
        <div>React</div>
        <div>Github</div>
      </div>
      <div className="sideInfoSkills">
        <h3>LANGUAGES</h3>
        <div>{langs.english}</div>
        <div>{langs.russian}</div>
        <div>{langs.romanian}</div>
      </div>
    </div>
  );
}

export default SideInfo;
