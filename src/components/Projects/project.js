import React from "react";
import styles from "./project.module.css";
import { Row, Col } from "antd";
import Link from "next/link";

/**Images */

import Image from "next/image";
import Projectone from "../../../public/Images/projectone.png";
import Projecttwo from "../../../public/Images/projecttwo.png";
import Projectthree from "../../../public/Images/projectthree.png";

function Project() {
  return (
    <div id="project" className="myContainer">
      <div className={styles.project_main}>
        <div>
          <p className="text">My work</p>
          <h3 className="title">Projects.</h3>
          <p className={styles.text2}>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
        <Row className={styles.projects_section}>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link className={styles.project_links} href="#" target="_blank">
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Projectone}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Car Rent</h4>
                <p>
                  Web-based platform that allows users to search, book, and
                  manage car rentals from various providers, providing a
                  convenient and efficient solution for transportation needs.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#react</span>
                  <span style={{ color: "green" }}>#mongodb</span>
                  #tailwind
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link className={styles.project_links} href="#" target="_blank">
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Projecttwo}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Job IT</h4>
                <p>
                  Web application that enables users to search for job openings,
                  view estimated salary ranges for positions, and locate
                  available jobs based on their current location.
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ color: "black" }}>#react</span>
                  <span style={{ color: "green" }}>#restapi</span> #scss
                </p>
              </div>
            </Link>
          </Col>
          <Col xl={7} lg={7} md={11} className={styles.projects_container}>
            <Link className={styles.project_links} href="#" target="_blank">
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "1rem",
                  borderRadius: "30px",
                }}
              >
                <Image
                  className={styles.projects_img}
                  src={Projectone}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <h4 className={styles.project_name}>Trip Guide</h4>
                <p>
                  A comprehensive travel booking platform that allows users to
                  book flights, hotels, and rental cars, and offers curated
                  recommendations for popular destinations.
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
