import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img8.png";
import projImg2 from "../assets/img/project-img9.jpeg"
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/housing.jpg";
import projImg5 from "../assets/img/portfolio.jpeg";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import navIcon2 from '../assets/img/nav-icon2.svg';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MyJourney = () => {

  const projects = [
    {
      title: "Student Management System",
      description: "Java, Java Swing, MySQL",
      imgUrl: projImg1,
      SourceCode: "https://github.com/AlgoriusAlhammak/Grading-System-Management.git",
    },
    {
      title: "Hotel Management System",
      description: "Java, Java Swing, MySQL",
      imgUrl: projImg2,
      SourceCode: "https://github.com/AlgoriusAlhammak/Hotel-System-Management-.git",
    },
    {
      title: "ChatBot",
      description: "Java",
      imgUrl: projImg3,
      SourceCode: "https://github.com/AlgoriusAlhammak/ChatBotJava.git",
    },
    {
      title: "Housing Price Prediction",
      description: "Python, JupyterLab",
      imgUrl: projImg4,
      SourceCode: "https://github.com/AlgoriusAlhammak/HousingPricePrediction.git",
    },
    {
      title: "Personal Portfolio",
      description: "HTML, JavaScript, React, React Bootstrap",
      imgUrl: projImg5,
      SourceCode: "https://github.com/AlgoriusAlhammak/My-Portfolio.git",
    },
    {
      title: "Car Counter",
      description: "Python, OpenCV, YOLO, PyTorch, Numpy, Matplotlib",
      imgUrl: projImg7,
      SourceCode: "https://github.com/AlgoriusAlhammak/Car-Counter.git",
    },
  ];

  return (
    <section className="project" id="myjourney">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Journey</h2>
                <p>Embarking on a path of continuous learning and growth, my journey in the world of technology has been both exciting and transformative. From diving into the fundamentals of programming to exploring advanced concepts.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Prodigy InfoTech -  </h5>
                          <h6 style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '10px', margin: 5 }}> Machine Learning Intern Aug - Oct 2024</h6>
                        </div>
                        <ul>
                          <li>Created a housing price prediction model using machine learning algorithms</li>
                          <li>Worked on optimizing model accuracy and feature engineering</li>
                          <li>Collaborated with a team to deploy the model in a real-world environment</li>
                        </ul>
                        
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>CodeAlpha -  </h5>
                          <h6 style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '10px', margin: 5 }}> Java Programmer Intern  Aug - Sept 2024</h6>
                        </div>
                        <ul>
                          <li>Developed a desktop application for student management using Java</li>
                          <li>Created a hotel management system to streamline operations</li>
                          <li>Designed and implemented a chatbot for automated responses using Java</li>
                        </ul>
                        
                        
                        
                      </div>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Lebanese University - Bachelor Of Science In Computer Science -  </h5>
                          <h6 style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '10px', margin: 5 }}> 2022-2025</h6>
                        </div>
                        <ul>
                          <li>Completed the 42 Ecole Beirut piscine for 4 weeks, enhancing coding skills and collaborative problem-solving</li>
                          <li>Participated in various webinars on topics like software development, data science, and artificial intelligence.</li>
                          <li>Engaged in group projects, developing applications and presenting solutions to real-world problems.</li>
                          <li>Contributed to coding clubs and hackathons, fostering teamwork and technical skills.</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
