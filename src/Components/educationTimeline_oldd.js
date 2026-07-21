import { Typography, Grow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import TimelineContent from "@mui/lab/TimelineContent";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./styles.css";

const EducationTimeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">2013</Typography>
          <Typography>Started Electrical Engineering at Toronto Metropolitan University</Typography>
        </TimelineContent>
      </Grow>
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">2017</Typography>
          <Typography>Graduated with Bachelor's in Electrical Engineering — Dean's List, cGPA 85%+</Typography>
        </TimelineContent>
      </Grow>
    );
  };

  const someCallback3 = () => {
    setMessage3(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">2018</Typography>
          <Typography>Started as Frontend Developer at Tata Consultancy Services</Typography>
        </TimelineContent>
      </Grow>
    );
  };

  const someCallback4 = () => {
    setMessage4(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">2025 – 2026</Typography>
          <Typography>Master of Management Analytics, McGill University — $10,000 Entrance Scholarship</Typography>
        </TimelineContent>
      </Grow>
    );
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle"><LocalLibraryIcon /></div>
        <div className="message"><Typography>{message1}</Typography></div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle"><SchoolIcon /></div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle"><LaptopMacIcon /></div>
        <div className="message">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle"><AutoAwesomeIcon /></div>
        <div className="message">{message4}</div>
      </div>
    </div>
  );
};

export default EducationTimeline;
