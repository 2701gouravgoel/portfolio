import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/shopping.jpeg";
import editor from "../../Assets/playBingo.jpeg";
import chatify from "../../Assets/nociw.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p >
          Here are projects I've worked as intern.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Truminds Intern"
              description="Implementing Communication service and sending email and sms for different triggers inside the whole online exam proctoring application. Work as debugger and developer in various service, includes creating and
              fetching Json, model, dataBase rollback, rest Api for a wide interconnected
              services at different port."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Zynas Project"
              description="Implement the database structure, for different type of users, and chats. Implement the role based firestore access. Implement the redux and write actions with client side firebase sdk. Full control over project as full stack developer, debugger and currently working as maintaince of project."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Galk Portal Project"
              description="Worked as full stack developer, where I added pages for create a new job, edit the job, deleting the job and provide all jobs to both companies and student over the application. Stacks used in the application are reactJs, Firebase auth, Firestore, react-redux"
            />
          </Col>
        </Row>
      
        <p >
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              isApp={true}
              title="Nociw Startup"
              description="Personal media cum people map application, which includes chats, post sharing and party/official invitation among contacts and promotion with in the whole database of users to a particular target audiance. I implemented the whole application wrt refrence given by our non-technical team and later add fews tech team members who also contributed in adding some of the new functionalites. Tech stacks used in application are react-native, nodeJs, firebase, mongoDb, heroku, aws"
              link="https://play.google.com/store/apps/details?id=com.nociw.nociw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ShoppingApp"
              description="E-shopping platform developed for local retailers using React.
              Features include sign in/ sign out option, add to card, ratings and reviews,
              add item along with many other features. Tech stacks and languages used in the application are reactJs, nodeJs, react-redux, MongoDB, css, html"
              link="https://github.com/2701gouravgoel/shopingApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PlayBingo"
              description="It’s a 2 player game with client side build in android studio and server side in
              NodeJs and javascript. All basic and necessary calculations and data storage had done in server side. Tech stacks and languages used in apllication are Android Studio, NodeJs, Java, MongoDb, Sql"
              link="https://github.com/GameForces/playBingo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Atomic layers"
              description="It’s difficult to count the numbers of layer in microscopic image and
              might have some error. Aim is to make it easier and precised to
              count total number layers, width of layers, gap between them.Code will check the layers count across the drawn line by the user
              using opencv. Developed GUI to get Interact with images. Use histogram and detect the lines as no. of peaks in the graph."
              link="https://github.com/rajangarhwal/Atomic_layers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Todo"
              description="Creating model to save the list of tasks(completed & uncompleted).
              Task can be deleted on click by the user. Frontend includes form to add task and list of tasks."
              link="https://github.com/2701gouravgoel/to-do-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
