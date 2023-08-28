import { Typography, Grow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import TimelineContent from "@mui/lab/TimelineContent";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import "./styles.css";

const EducationTimeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            2013
          </Typography>
          <Typography>
            Started Studying Electrical Engineering at Ryerson University
          </Typography>
        </TimelineContent>
      </Grow>
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            2017
          </Typography>
          <Typography>
            Graduated with Bachelor's Degree but Realized my passion for coding
          </Typography>
        </TimelineContent>
      </Grow>
    );
  };

  const someCallback3 = () => {
    setMessage3(
      <Grow in>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            2018
          </Typography>
          <Typography>
            Started working as a Software Developer at TCS
          </Typography>
        </TimelineContent>
      </Grow>
    );
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          <LocalLibraryIcon />
        </div>
        <div className="message">
          <Typography>{message1}</Typography>
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          <SchoolIcon />
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          <LaptopMacIcon />
        </div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export default EducationTimeline;
