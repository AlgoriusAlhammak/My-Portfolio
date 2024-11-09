import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">

                        <Container>
                                <Row>
                                <Col size={12}>
                                    <TrackVisibility>
                                    {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                        <h2>Skills</h2>
                                        <p>This section highlights my diverse skill set, encompassing both technical and soft skills that contribute to my effectiveness in various roles.<br></br> I am committed to continuous learning and improvement, and I thrive in collaborative environments where innovative solutions can be developed. My ability to adapt to new challenges, coupled with strong organizational and communication skills, enables me to deliver results and drive success in any project I undertake. </p>
                                        <Tab.Container id="skills-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">Technical & Soft Skills</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Certifications & Achievements</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <div>
                                                    <div >
                                                        <h5 style={{ display: 'flex',color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Languages</h5>
                                                        <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                            <li>Arabic (Native)</li>
                                                            <li>English (Advanced)</li>
                                                        </ul>
                                                    </div>
                                                   
                                                    
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'left' }}>Programming Languages & Frameworks </h5>
                                                    </div>
                                                        <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                            <li>Java, Python, C/C++, MySQL, JavaScript, HTML/CSS, PHP, Assemly, Flutter</li>
                                                            <li>React, Node.js, Laraval, Bootstrap</li>
                                                        </ul>

                                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                                        <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Professional Skills</h5>
                                                    </div>
                                                    <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                        <li>Team Work, Time Management, Agile Project Management.</li>
                                                        <li>Probelm Solving, Attention To Detail, Marketing, Organization Skills, Teaching</li>
                                                        <li>Multitasking, Communication</li>
                                                    </ul>

                                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Developer Tools</h5>
                                                    </div>
                                                    <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                        <li>Git, VS Code, Visual Studio, PyCharm, IntelliJ, NetBeans, Eclipse.</li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>J.P. Morgan - SE Sim  </h5>
                                                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_oyQJ9r4AcHi8LwGGS_1724008150600_completion_certificate.pdf" 
                                                target="_blank" 
                                                rel="noopener noreferrere" 
                                                style={{color: 'rgba(255, 255, 255, 0.7)', marginLeft: '10px'}}> 
                                                    <i className="fas fa-external-link-alt" style={{ fontSize: '1.2em', verticalAlign: 'middle' }}>  -</i>
                                                </a>
                                                <h6 style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '10px', margin: 5 }}> Forage - Aug 2024</h6>
                                                </div>
                                                <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                <li>Completed an Interface with a stock price data feed</li>
                                                <li>Used J.P Morgan Chase & Co. frameworks and tools</li>
                                                <li>Displayed data visually for traders</li>
                                                </ul>
                                                
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>English Mentor - </h5>
                                                <h6 style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '10px', margin: 5 }}> Volunteering with Humans in the Loop Foundation  sep. 2024 - Present </h6>
                                                </div>
                                                <ul style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'left' }}>
                                                <li>Providing personalized English language instruction to diverse learners, enhancing their communication skills and confidence</li>
                                                <li>Developing engaging lesson plans that cater to different learning styles and proficiency levels.</li>
                                                <li>Facilitating interactive discussions and activities to promote language acquisition in real-world contexts.</li>
                                                <li>Supporting students in achieving their language goals, whether for academic, professional, or personal purposes.</li>
                                                <li>Collaborating with a team of educators to share resources and best practices, fostering a supportive learning environment.</li>
                                                </ul>
                                            </div>
                                            
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Tab.Container>
                                    </div>}
                                    </TrackVisibility>
                                </Col>
                                </Row>
                            </Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
