import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nidhi Parikh </span>
            from <span className="purple"> Vadodara, Gujarat.</span>
             <br />

             I’m a Frontend Developer and Designer with a B.Tech in Computer Science & Engineering and practical experience from my internship at Rishabh Soft. Pvt Ltd as a Full Stack Developer(React and Node). I thrive on creating dynamic, responsive websites that provide seamless, user-friendly experiences. Passionate about learning and tackling new challenges, I’m now seeking Frontend Developer opportunities where I can bring fresh ideas to life.Let’s create something amazing together!

            <br /> 

            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nidhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
