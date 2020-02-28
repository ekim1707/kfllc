import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/Icon";

const Home = () => {
    let [interval, setIntervalFunction] = useState(0);
    setInterval(() => {setIntervalFunction(interval = interval === 4 ? 0 : interval + 1);}, 5000);
    const [clickCount, setClickCount] = useState(0);
    const handleArrowClick = (type) => {
        type === "left" ? setClickCount(clickCount - 1) : setClickCount(clickCount + 1);
    }

    return (
        <div className="homeContainer">
            <section className="headerContainer">
                <h1 className="title">{content.TITLE}</h1>
                <h1 className="headerLabels">{content.HEADER_ARRAY[interval]}</h1>
                <div className="photoGalleryCarousel">
                    <div className="photoGalleryLeftSide"></div>
                    <div className="photoGalleryWindow">
                        {clickCount > -3 && (
                            <div onClick={() => handleArrowClick("left")} className="iconContainer">
                                <Icon className="arrowLeftIcon" iconName="arrow_left" />
                            </div>
                        )};
                        <div className="photoRow" style={{ transform: `translateX(calc(50% - 2450px - (700px * ${clickCount})))`}}>
                            <Icon className="photo" iconName="gallery_one" cover={true} />
                            <Icon className="photo" iconName="gallery_two" cover={true} />
                            <Icon className="photo" iconName="gallery_three" cover={true} />
                            <Icon className="photo" iconName="gallery_four" cover={true} />
                            <Icon className="photo" iconName="gallery_five" cover={true} />
                            <Icon className="photo" iconName="gallery_six" cover={true} />
                            <Icon className="photo" iconName="gallery_seven" cover={true} />
                            <Icon className="photo" iconName="gallery_eight" cover={true} />
                        </div>
                        {clickCount < 4 && (
                            <div onClick={() => handleArrowClick("right")}  className="iconContainer">
                                <Icon className="arrowRightIcon" iconName="arrow_right" />
                            </div>
                        )};
                    </div>
                    <div className="photoGalleryWindowBorder"></div>
                    <div className="photoGalleryRightSide"></div>
                </div>
            </section>
            <section className="bodyContainer">
                <h3>{content.FOOTER}</h3>
            </section>
        </div>
    );
};

export default Home;