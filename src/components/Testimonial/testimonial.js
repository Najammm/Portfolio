import React from "react";
import styles from "./testimonial.module.css";
import Image from "next/image";
import Client1 from "../../../public/Images/client1.jpg";
import { Row, Col } from "antd";
import { MdOutlineRateReview } from "react-icons/md";

function Testimonial() {
  const testimonials = [
    {
      name: "Joh Lee",
      position: "Ceo XYZ",
      description:
        "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
      image: Client1,
    },
    {
      name: "Joh Lee",
      position: "Ceo XYZ",
      description:
        "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
      image: Client1,
    },
    {
      name: "Joh Lee",
      position: "Ceo XYZ",
      description:
        "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
      image: Client1,
    },
  ];

  return (
    <div className="myContainer">
      <div className={styles.testimonial_main}>
        <div>
          <p className="text">What my Client's say</p>
          <h3 className="title">Testimonials.</h3>
        </div>

        {/* testimonial */}

        <Row className={styles.testimonial_section}>
          {testimonials.map((testimonial) => (
            <Col xl={7} lg={7} className={styles.testimonial_single}>
              <MdOutlineRateReview className={styles.testimonial_icon} />
              <p className={styles.description}>{testimonial.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className={styles.name}>{testimonial.name}</span>
                  <p>{testimonial.position}</p>
                </div>
                <div>
                  <Image
                    src={testimonial.image}
                    width={60}
                    height={60}
                    style={{ borderRadius: "30px" }}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* testimonial */}
      </div>
    </div>
  );
}

export default Testimonial;
