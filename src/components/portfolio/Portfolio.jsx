import React from 'react';
import IMG1 from '../../assets/portfolioSite.png';
import IMG2 from '../../assets/chatApp.png';

import IMG4 from '../../assets/quizApp.png';



import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      img: IMG1,
      description:
        "A professional-grade portfolio website using the powerful React framework. With a focus on showcasing my skills and achievements, I designed and implemented an innovative and visually-stunning interface that captivates visitors. By employing a variety of front-end technologies, including CSS, HTML, and JavaScript, I created an engaging user experience that seamlessly guides visitors through my portfolio. This portfolio website serves as a testament to my expertise in leveraging the React framework, creating visually appealing designs, and adhering to industry standards to establish a professional and impactful online presence.",
      technologies: 'React | Redux | Ruby on Rails',
      link: 'https://brian-smith-portfolio.vercel.app/',
      github: 'https://github.com/bcs1993/brian-smith-portfolio',
    },
    {
      id: 2,
      title: 'Quiz App',
      img: IMG4,
      description:
        "A feature-rich quiz application using JavaScript, React, Node.js, Redux, and MongoDB. The application provides a comprehensive quiz platform with a responsive interface. The scalable backend efficiently handles quiz data, user authentication, and database interactions. With Redux for state management and MongoDB for data storage, the application ensures smooth data flow and effective storage of quiz questions and user responses. Advanced features such as multiple choice questions, user authentication, and scoring mechanisms enhance the overall functionality, showcasing my expertise in designing and developing feature-rich applications.",
      technologies: 'React | Redux | MongoDB | Node.js | Express.js',
      link: 'https://quiz-app-alpha-ten.vercel.app/',
      github: 'https://github.com/bcs1993/Quiz-App',
    },
    {
      id: 3,
      title: 'Chat App',
      img: IMG2,
      description: "A user-friendly 2-user chat web application leveraging Socket.IO's event-driven architecture, I implemented real-time communication between users, enabling seamless and instantaneous messaging. To provide an intuitive and visually appealing experience, I designed and developed the front-end user interface using HTML, CSS, and JavaScript. Additionally, I utilized Socket.IO's library to establish a WebSocket connection, ensuring reliable real-time messaging between the server and clients. Through thorough testing and debugging, I ensured the application's robustness and eliminated any issues or bugs, delivering an error-free user experience.",
      technologies: 'JavaScript | Socket.io | CSS',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/bcs1993/ChatApp',
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
