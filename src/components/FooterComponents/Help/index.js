import React from 'react';
import "./styles.scss";
import content from "./content";

const Help = () => {
    return (
        <div className="helpContainer">
            <section className="helpContentContainer">
                <div className="aboutContentContainer">
                    <header className="header"><h2>{content.HELP_HEADER}</h2></header>
                    <h3 className="subHeaderLabel">{content.HOMEPAGE_LABEL}</h3>
                    <p className="subHeaderDescription">{content.HOMEPAGE_DESCRIPTION}</p>
                    <h3 className="subHeaderLabel">{content.ABOUT_LABEL}</h3>
                    <p className="subHeaderDescription">{content.ABOUT_DESCRIPTION}</p>
                    <h3 className="subHeaderLabel">{content.RESOURCES_LABEL}</h3>
                    <p className="subHeaderDescription">{content.RESOURCES_DESCRIPTION}</p>
                    <p className="subHeaderDescription">{content.LITERATURE_DESCRIPTION}</p>
                    <p className="subHeaderDescription">{content.VIDEO_DESCRIPTION}</p>
                    <h3 className="subHeaderLabel">{content.CONTACT_LABEL}</h3>
                    <p className="subHeaderDescription">{content.CONTACT_DESCRIPTION}</p>
                    <div className="contactLinkContainer"><a href="https://www.linkedin.com/company/kim-family-llc/" rel="noopener noreferrer" target="_blank">{content.KFLLC_LINKED_IN}</a></div>
                </div>
                <hr />
                <div className="webDesignContentContainer">
                    <header className="header"><h3 className="subHeaderLabel">{content.WEB_DESIGN_LABEL}</h3></header>
                    <p className="subHeaderDescription">{content.WEB_DESIGN_DESCRIPTION}</p>
                    <p className="subHeaderDescription">{content.WEB_DESIGN_HELP}</p>
                    <p className="subHeaderDescription">{content.WEB_DESIGN_CONTACT}</p>
                    <div className="contactLinkContainer"><a href="https://www.linkedin.com/in/eugene-kim-1707/" rel="noopener noreferrer" target="_blank">{content.EUGENE_LINKED_IN}</a></div>
                </div>
                <hr />
                <div className="signatureContainer">
                    <p className="signature">{content.SIGNATURE}</p>
                    <p className="location">{content.LOCATION}</p>
                </div>
            </section>
        </div>
    );
};

export default Help;