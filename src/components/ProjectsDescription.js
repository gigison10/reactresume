import Projects from "./Projects";

function ProjectsDescription() {
  const gotask = `The Task Manager is a work-in-progress web application designed for crop managers or companies. It incorporates Firebase authentication, allowing users to sign up and log in with email or Google. Users can create, save, and delete projects in real-time using Firebase's database. The project utilizes React hooks for efficient state management. This application aims to enhance task organization and workflow efficiency for crop managers and companies.`;

  const monster = `Monster Rolodex is a React web app demonstrating my skills in building interactive interfaces. It fetches monster profiles from an API and allows users to search and filter them. Key features include real-time search, reusable components, state management with React hooks, and API integration.`;

  const mapty = `Mapty is an application designed to help users track their workouts by marking training places on a map and keeping a record of their fitness achievements. This project was developed as a part of a JavaScript course and served as an introduction to asynchronous functions, working with APIs, and local    storage.
  To use Mapty, users can click on the map to mark a location where they have completed a workout. They can then choose the type of workout, such as running or cycling and enter additional details such as the distance traveled, time taken.The app also allows users to view their workout history and track their progress over time`;

  const pigGame =
    "This is a rolling dice game designed for two players, created as a project to further my understanding of JavaScript programming. Creating this rolling dice game has provided me with a deeper understanding of JavaScript programming concepts, including the use of functions, conditional statements, and DOM manipulation. Additionally, it has allowed me to practice my problem-solving skills and gain valuable experience in developing interactive web applications.";

  const guessMyNumber =
    "Guess My Number is a simple mini-game that I started applying my basic knowledge of JavaScript programming. In this game, the program generates a random number between 1 and 20, and the player is tasked with guessing that number. The game is played entirely in the browser, using HTML, CSS, and JavaScript.";

  const projectDescription =
    "The project I recently completed was the final undertaking in my HTML & CSS course, which allowed me to gain a deeper understanding of various design patterns, CSS and HTML basics, responsive design, and other related concepts. Throughout the course, I was able to improve my skills in designing and building functional websites from scratch, also learning to optimize them for different devices and screen sizes. This project represents all the knowledge and skills I had acquired throughout the course.";

  const chairDescription =
    "The begining of my CSS & HTML learning journey, the ChairStore project was one of my initial projects into web development. Despite the challenges I faced along the way, I was able to build a functional and visually appealing website that remains a source of pride and accomplishment for me.";

  return (
    <Projects
      gotask={gotask}
      monster={monster}
      mapty={mapty}
      pigGame={pigGame}
      guessMyNumber={guessMyNumber}
      projectDescription={projectDescription}
      chairDescription={chairDescription}
    />
  );
}

export default ProjectsDescription;
