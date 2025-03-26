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
import Work2 from "../../../public/Images/work2.png";
import Work3 from "../../../public/Images/work3.png";

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
              December 2022 - October 2024
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
                  position="Associate MERN Stack Developer"
                  company="IPS"
                  point1="Developing and maintaining web applications using React.js , Node.js and other related technologies."
                  point2="Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
                  point3="Implementing responsive design and ensuring cross-browser compatibility."
                  point4="Participating in code reviews and providing constructive feedback to other developers."
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
              January 2019 - November 2022
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
                  src={Work2}
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
                  position="Front end developer"
                  company="Trisage solutions"
                  point1="Crafting dynamic, high-performance web applications with React.js, Next.js, and cutting-edge front-end technologies."
                  point2="Collaborating with designers, product managers, and developers to bring intuitive and visually stunning interfaces to life."
                  point3="Optimizing web applications for lightning-fast speed, smooth performance, and flawless cross-browser compatibility."
                  point4="Writing clean, scalable, and maintainable code to ensure long-term efficiency and growth."
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
              January 2018 - April 2019
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
                  src={Work3}
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
                  position="Backend Development"
                  company="Rights Solutions Pvt ltd"
                  point1="Building and maintaining scalable, high-performance backend systems using Node.js, Express.js, and modern frameworks."
                  point2="Designing and optimizing RESTful APIs and GraphQL services for seamless data flow between frontend and backend."
                  point3="Implementing authentication, authorization, and data protection strategies to ensure robust security."
                  point4="Conducting code reviews, troubleshooting issues, and continuously improving backend performance."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={styles.mobile}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          className={styles.mobile_main}
        >
          <div>
            <Sections
              position="Associate MERN Stack Developer"
              company="IPS"
              point1="Developing and maintaining web applications using React.js , Node.js and other related technologies."
              point2="Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
              point3="Implementing responsive design and ensuring cross-browser compatibility."
              point4="Participating in code reviews and providing constructive feedback to other developers."
            />
          </div>
          <div>
            <Sections
              position="Front end developer"
              company="Trisage solutions"
              point1="Crafting dynamic, high-performance web applications with React.js, Next.js, and cutting-edge front-end technologies."
              point2="Collaborating with designers, product managers, and developers to bring intuitive and visually stunning interfaces to life."
              point3="Optimizing web applications for lightning-fast speed, smooth performance, and flawless cross-browser compatibility."
              point4="Writing clean, scalable, and maintainable code to ensure long-term efficiency and growth."
            />
          </div>
          <div>
            <Sections
              position="Backend Development"
              company="Rights Solutions Pvt ltd"
              point1="Building and maintaining scalable, high-performance backend systems using Node.js, Express.js, and modern frameworks."
              point2="Designing and optimizing RESTful APIs and GraphQL services for seamless data flow between frontend and backend."
              point3="Implementing authentication, authorization, and data protection strategies to ensure robust security."
              point4="Conducting code reviews, troubleshooting issues, and continuously improving backend performance."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
