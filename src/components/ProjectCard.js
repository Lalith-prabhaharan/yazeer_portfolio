import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}  >
      <a href={link}>
      <div className="proj-imgbx" style={{color:'white',textDecoration:'none'}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
