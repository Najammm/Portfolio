import React, { useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Work1 from "../../../public/Images/work1.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./styling/work.module.css";

/**Components */

import Sections from "./sections";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="myContainer">
      <div className={styles.laptop}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                color: "#bfbfbf",
              }}
            >
              September 2022 - March 2023
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot>
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="0"
                variant="h6"
                component="span"
              >
                <Sections
                  position="Web Developer"
                  company="Triple M IT Solutions"
                  point1="Developing and maintaining web applications using React.js and other related technologies."
                  point2="Developing and maintaining web applications using React.js and other related technologies."
                  point3="Developing and maintaining web applications using React.js and other related technologies."
                  point4="Developing and maintaining web applications using React.js and other related technologies."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                color: "#bfbfbf",
              }}
            >
              March 2023 - June 2023
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot color="primary">
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="200"
                style={{ display: "flex", justifyContent: "end  " }}
                variant="h6"
                component="span"
              >
                <Sections
                  position="Web Developer"
                  company="Triple M IT Solutions"
                  point1="Developing and maintaining web applications using React.js and other related technologies."
                  point2="Developing and maintaining web applications using React.js and other related technologies."
                  point3="Developing and maintaining web applications using React.js and other related technologies."
                  point4="Developing and maintaining web applications using React.js and other related technologies."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                color: "#bfbfbf",
              }}
            >
              June 2023 - Present
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot color="primary">
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography data-aos="fade" variant="h6" component="span">
                <Sections
                  position="Web Developer"
                  company="Triple M IT Solutions"
                  point1="Developing and maintaining web applications using React.js and other related technologies."
                  point2="Developing and maintaining web applications using React.js and other related technologies."
                  point3="Developing and maintaining web applications using React.js and other related technologies."
                  point4="Developing and maintaining web applications using React.js and other related technologies."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={styles.mobile}>
        <div className={styles.mobile_main}>
          <Sections
            position="Web Developer"
            company="Triple M IT Solutions"
            point1="Developing and maintaining web applications using React.js and other related technologies."
            point2="Developing and maintaining web applications using React.js and other related technologies."
            point3="Developing and maintaining web applications using React.js and other related technologies."
            point4="Developing and maintaining web applications using React.js and other related technologies."
          />

          <Sections
            position="Web Developer"
            company="Triple M IT Solutions"
            point1="Developing and maintaining web applications using React.js and other related technologies."
            point2="Developing and maintaining web applications using React.js and other related technologies."
            point3="Developing and maintaining web applications using React.js and other related technologies."
            point4="Developing and maintaining web applications using React.js and other related technologies."
          />

          <Sections
            position="Web Developer"
            company="Triple M IT Solutions"
            point1="Developing and maintaining web applications using React.js and other related technologies."
            point2="Developing and maintaining web applications using React.js and other related technologies."
            point3="Developing and maintaining web applications using React.js and other related technologies."
            point4="Developing and maintaining web applications using React.js and other related technologies."
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
