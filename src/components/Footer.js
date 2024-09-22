import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/arrow-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        {/* Horizontal line */}
        <hr />
        <Row>
          <Col size={12} className="text-center">
            <p>Algorius Alhammak | 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
