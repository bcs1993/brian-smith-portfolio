import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
          </div>
          <p>Hi there! My name is Brian Smith, and I'm a full stack developer based in Nashville, TN. With a strong background in JavaScript, React, CSS, HTML, Bootstrap, SQL, Mongoose, and Java, I'm passionate about creating web applications that deliver seamless user experiences and meet business objectives.

I have a keen eye for detail and a strong problem-solving mindset, which I apply to every project I work on. My experience includes attending two bootcamps, one for JavaFX, SQL, and AWS, and another for MERN stack development, where I honed my skills in building end-to-end web applications. I'm constantly learning and staying up-to-date with the latest industry trends and technologies to improve my skills and deliver high-quality solutions.

Apart from coding, I'm a sports enthusiast and love staying active by working out regularly. I'm also fascinated by the intersection of sports and technology, and I'm always exploring innovative ways to leverage technology in the sports industry. I believe that teamwork, collaboration, and continuous learning are key to success in the fast-paced world of software development.

I'm currently a junior developer and eager to contribute my skills and knowledge to create meaningful and impactful web applications. If you're looking for a motivated and enthusiastic full stack developer with a strong foundation in various technologies, I'd love to connect and discuss how I can add value to your team or project.

Thank you for visiting my portfolio, and I'm excited to embark on new challenges and opportunities in the world of software development! Feel free to reach out to me to discuss potential collaborations or to learn more about my experience and projects. Let's build amazing things together!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro