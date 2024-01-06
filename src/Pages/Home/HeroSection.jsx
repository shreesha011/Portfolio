export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shreesha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A Seasoned front-end developer with 2.5 years of hands-on experience. 
          Proficient in HTML, CSS, JavaScript, React.js, and Git, I specialize in crafting engaging and responsive web applications. 
          From translating design concepts into code to ensuring seamless user experiences, I am dedicated to delivering innovative solutions with a strong foundation in web technologies
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>

      <div className="hero--section--img">
        <img src="./img/profile-photo.png" alt="Hero Section" />
      </div>
      
    </section>
  );
}
