import "../css/About.css";

const About = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="hero-about">
        <h1>About Me</h1>
        <p>
          Hi! I'm <strong>Md Farhan Shekh</strong>, a passionate web developer. 
          I have completed my BCA and am currently pursuing MCA. I specialize in 
          building modern and responsive web applications using <strong>HTML, CSS, JavaScript, React, and Spring Boot</strong>.
        </p>
        <p>
          I enjoy creating user-friendly applications that solve real-world problems and continuously learning 
          new technologies to enhance my skills. My goal is to contribute to meaningful projects and grow as a full-stack developer.
        </p>
        <h5>Education:</h5>
        <ul>
          <li>BCA - Completed</li>
          <li>MCA - Pursuing</li>
        </ul>
        <h5>Skills:</h5>
        <ul>
          <li>Front-end: HTML, CSS, JavaScript, React</li>
          <li>Back-end: Java, Spring Boot</li>
          <li>Other: Git, Axios, API Integration</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
