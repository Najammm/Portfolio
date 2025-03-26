import React from "react";
import styles from "./project.module.css";
import { Row, Col } from "antd";
import Link from "next/link";

/**Images */

import Image from "next/image";
import Project1 from "../../../public/Images/project1.png";
import Project2 from "../../../public/Images/project2.png";
import Project3 from "../../../public/Images/project3.png";

function Project() {
  return (
    <div id="project" className="myContainer">
      <div className={styles.project_main}>
        <div>
          <p className="text">My work</p>
          <h3 className="title">Projects.</h3>
          <p className={styles.text2}>
            These projects highlight my expertise and experience through
            real-world applications of my work. Each project includes a concise
            overview along with links to live demos and code repositories. They
            showcase my ability to tackle complex challenges, adapt to various
            technologies, and efficiently manage development projects.
          </p>
        </div>
        <Row className={styles.projects_section}>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://www.etnowe.com/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project1}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Etnowe</h4>
                <p>
                  A cutting-edge web-based platform designed to streamline event
                  management and ticketing. It enables users to discover, book,
                  and manage events effortlessly, offering a seamless and
                  efficient experience for both organizers and attendees.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#react</span>
                  <span style={{ color: "green" }}>#Node.js</span>
                  #MongoDB
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://jl-group.vercel.app/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project2}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>JL Group</h4>
                <p>
                  A modern and professional web platform showcasing JL Group’s
                  expertise and services. Designed for a seamless user
                  experience, it highlights the company's projects, values, and
                  offerings with a sleek and intuitive interface.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#react</span>
                  <span style={{ color: "green" }}>#restapi</span> #scss
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link
              className={styles.project_links}
              href="https://customboxesdesigns.com/"
              target="_blank"
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Project3}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Custom Box Designs</h4>
                <p>
                  A dynamic and user-friendly web platform specializing in
                  custom packaging solutions. It allows users to explore,
                  design, and order personalized boxes, offering a seamless
                  experience with high-quality visuals and intuitive navigation.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#nextjs</span>
                  <span style={{ color: "green" }}>#supabase</span> #css
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Project;
