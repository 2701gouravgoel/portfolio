import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img style={{maxHeight:300}} variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link &&<Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isApp? 'View App': "View Project"}
        </Button>
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
