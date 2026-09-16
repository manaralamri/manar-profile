import { useState, useEffect } from "react";
import { Col, Container , Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);

  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random () * 100);
  const period = 2000;
  const toRotate = [
  "Software Developer",
  "Software Solutions"
];


  useEffect(() => {
    const  ticker = setInterval(() =>{
      tick();

    }, delta );
    return () => { clearInterval(ticker)};

  }, [text]) // eslint-disable-line react-hooks/exhaustive-deps

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText){
      setDeleting(true);
      setDelta(period);

    }else if(isDeleting && updatedText === ''){
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section className="banner" id="home">
    <Container>
    <Row className="align-item-center">
    <Col xs={12} md={6} xl={7}>
    <TrackVisibility>
    {({ isVisible}) => 
       <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
         <span className="tagline">Welcome to my portfolio!
         </span>

        <h1>
          {" "}
          <span className="txt-rotate">
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <p dir="rtl">
      Software Developer passionate about building clean, functional, and meaningful digital experiences. 
      I specialize in Python, Django, REST APIs, and React, with experience in backend development, 
      feature ownership, and functional testing.        
      </p>
        <Col xs={12} md={6} xl={5} className="button-login-container">

                  </Col>
      
    </div>}
        </TrackVisibility>
        </Col>
    <Col xs={12} md={6} xl={5}>
    <img src={headerImg} alt="Headder Img"/>
    
    </Col>
    </Row>
    </Container>
    </section>
  )
}