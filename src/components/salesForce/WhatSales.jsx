import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "../ProductGCP/GCPCloud/GCPCloud.module.css";
import image1 from "../../assets/images/salesforce/salesforce.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});



const WhatSales = () => {
    return (
        <Container fluid className="pt-2 pb-4">
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-5">
                        <Col
                            xs={12}
                            lg={6}
                            md={6}
                            className="pt-md-0 pt-4"
                            data-aos="fade-right"
                        >
                            <div className="">

                                <p className={styles?.title}>
                                    Redefine your Salesforce Journey for Unparalleled Success
                                </p>

                                <p className={styles?.text}>
                                    GWC stands out for its unwavering dedication to innovation, reflected in the meticulous design, flawless implementation, and seamless integration of Salesforce solutions. As a prominent Salesforce partner, we leverage industry-driven innovation and data-centric insights, adeptly addressing complex business challenges to provide our clients with efficient and customized solutions.
                                </p>

                                <a href="#gcp">
                                    <Button className={`${styles.banner_button} mt-3`}>
                                        {" "}
                                        Explore More
                                        <svg
                                            className="mx-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
                            <img
                                src={image1}
                                alt=""
                                className="w-100 mx-lg-5  mt-md-0 mt-5"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default WhatSales
