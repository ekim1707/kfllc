import React from 'react';
import "./styles.scss";
import content from "./content";
import Literature from "./Literature";
import Video from "./Video";
import Other from "./Other";

const Resources = ({
    isSelected,
    setIsSelected
}) => {
    const {
        literature,
        video,
        other
    } = isSelected;
    return (
        <div className="resourcesContainer">
            <section className="mediaBox">
                <ul className="mediaBoxTabContainer">
                    <div className="mediaBoxTabBackground">
                        <li 
                            onClick={() => setIsSelected({ literature: true, video: false, other: false })} 
                            className="mediaBoxTab"
                            style={literature ? { opacity: 1 } : {}}
                        >
                            <h3>{content.LITERATURE}</h3>
                        </li>
                    </div>
                    <div className="mediaBoxTabBackground">
                        <li 
                            onClick={() => setIsSelected({ literature: false, video: true, other: false })} 
                            className="mediaBoxTab"
                            style={video ? { opacity: 1 } : {}}
                        >
                            <h3>{content.VIDEO}</h3>
                        </li>
                    </div>
                    <div className="mediaBoxTabBackground">
                        <li 
                            onClick={() => setIsSelected({ literature: false, video: false, other: true })} 
                            className="mediaBoxTab"
                            style={other ? { opacity: 1 } : {}}
                        >
                            <h3>{content.OTHER}</h3>
                        </li>
                    </div>
                </ul>
                <div className="mediaBoxContentContainer">
                    {literature && <Literature />}
                    {video && <Video />}
                    {other && <Other />}
                </div>
            </section>
        </div>
    );
};

export default Resources;