import React from 'react';
import "./styles.scss";
import content from "./content";

const PrivacyPolicy = () => {
    return (
        <div className="privacyPolicyContainer">
            <section className="contentContainer">
                <header className="header"><h3>{content.PRIVARY_POLICY_HEADER}</h3></header>
                <br/>
                <div className="content">{content.PRIVACY_POLICY_CONTENT}</div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;