import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../../atlanPatners/atlan.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import useMedia from "../../../hooks/useMedia";
import AOS from "aos";
import { AlationSliderData } from "./alationSliderData";

const ProductAllCard = ({ data }) => {
    const isMobile = useMedia("(max-width:600px)");

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <div
            className={`${isMobile ? styles.BenefitSectionBox1 : styles.BenefitSectionBox
                }`}
            data-aos="flip-down"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={data?.image} alt="Icon" className="w-100 h-50" />
            <div className={`${styles.title_card} fw-bold`}>{data.title}</div>
            <div style={{ color: "black" }} className={`${styles.description_card}`}>
                {data.description}
            </div>
            <Link to={data?.url} target="_blank">
                <div
                    className={`${styles.url_card}`}
                    style={{ color: hover ? "#712b8c" : "black" }}
                >
                    {" "}
                    Learn More{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                    >
                        <path
                            d="M4.16699 10.1488H15.8337M15.8337 10.1488L10.0003 4.31543M15.8337 10.1488L10.0003 15.9821"
                            stroke={hover ? "#6F2B8C" : "black"}
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    );
};

const AlationSlider = () => {
    const isMobile = useMedia("(max-width:600px)");

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1500,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refreshHard();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        className: "center",
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: isMobile ? true : <SampleNextArrow />,
        prevArrow: isMobile ? true : <SamplePrevArrow />,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
        // Add other settings as needed
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    height: "100%",
                    fontSize: "0px",
                    width: "180px",
                    position: "absolute",
                    right: "-65px",
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    height: "30px",
                    width: "40px",
                    borderRadius: "50%",
                    zIndex: "1",
                }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className={styles.HomeApproachSection}>
            {/* <Container className="mx-0"> */}
            {/* <div className={newStyles.featuresSection}> */}
            <div className={newStyles.content2}>
                <div className={newStyles.headingAndSupportingText10}>
                    <div className={newStyles.headingAndSubheading7}>
                        {/* <div className={`${newStyles.subheading} text-white`}>
              Domo Solutions
            </div> */}
                        <div
                            className={`${newStyles.meetOurLeadershipContainer} `}
                        >
                            Learn What Alation Platforms
                        </div>

                    </div>
                </div>
            </div>
            <Row className="mt-3">
                <Col xs={12} md={6} lg={3} className="w-100">
                    <Slider {...settings} className="m-0 p-0">
                        {AlationSliderData?.map((data) => (
                            <ProductAllCard data={data} />
                        ))}
                    </Slider>
                </Col>
            </Row>
        </div>
    );
};

export default AlationSlider;

