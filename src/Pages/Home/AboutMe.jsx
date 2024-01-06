export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">

      <div className="about--section--img">
        <img src="./img/profile-photo.png" alt="About Me" />
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          
          <p className="hero--section-description">
          Passionate React.js Developer with 2.5 years of hands-on experience in building dynamic and responsive web applications.
          I specialize in front-end development and have a strong command of modern web technologies, including HTML5, CSS3, JavaScript, and React.js
          <br/>
          </p>

          <p className="hero--section-description">
          My skills include component-based architecture, state management with Redux, RESTful API integration, and optimizing performance for seamless user experiences. I'm committed to staying up-to-date with the latest trends and best practices in web development to ensure that I'm always delivering cutting-edge solutions.
          <br/>
          </p>
        </div>
      </div>
    </section>
  );
}
