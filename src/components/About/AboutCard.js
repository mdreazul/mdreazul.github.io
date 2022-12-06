import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Reazul Islam </span>
            <br />
            I am a Software Engineer at NCR Corporation located in Atlanta, GA
            I graduated from Georgia State University in May 2022 with a Bachelor's degree in Computer Science.
            During my junior and senior year, I worked as a Undergraduate Teaching Assistant(UTA) for introductory computer science courses.
            I also worked on two research projects and co-authored on publications. 
            I joined NCR as a Software Engineer Intern in Summer 2021 and then full-time after graduation.
            
            <br />
            In my free time, I really enjoy playing soccer and guitar. I am a huge Megadeth fan!🎸
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
