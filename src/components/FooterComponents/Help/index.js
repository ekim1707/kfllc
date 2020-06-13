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
                    <h3 className="subHeaderLabel">{content.CONTACT_LABEL}</h3>
                    <p className="subHeaderDescription">{content.CONTACT_DESCRIPTION}</p>
                </div>
                <hr />
                <div className="webDesignContentContainer">
                    <header className="header"><h3 className="subHeaderLabel">{content.WEB_DESIGN_LABEL}</h3></header>
                    <p className="subHeaderDescription">{content.WEB_DESIGN_DESCRIPTION}</p>
                    <p className="subHeaderDescription">{content.WEB_DESIGN_HELP}</p>
                </div>
                <hr />
                <div className="signatureContainer">
                    <p className="signature">{content.SIGNATURE}</p>
                </div>
            </section>
        </div>
    );
};

export default Help;