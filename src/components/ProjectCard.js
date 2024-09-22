import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';
export const ProjectCard = ({ title, description, imgUrl, SourceCode }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
          <img src={imgUrl} alt={title}/> 
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}<br></br>
            <a href={SourceCode} target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHb Repo" style={{ width: '40px', height: '40px', marginLeft: '5px', cursor: 'pointer' }} /> {/* Adjust size here */}
            </a>
          </span>
        </div>
      </div>
    </Col>
  )
}
