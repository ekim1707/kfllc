import React from 'react';
import "./styles.scss";
import content from "./content";
import CardSet from "./CardSet";
import Icon from "../../common/Icon";

const About = () => {
    return (
        <div className="aboutContainer">
            <section className="cardSetContainer"><CardSet data={content.DATA} /></section>
            <section className="contentContainer">
                <p><strong>{content.KFLLC_LABEL}</strong>&nbsp;{content.PART_ONE}&nbsp;{content.PART_TWO}</p>
                <p>{content.PART_THREE}&nbsp;<strong>{content.PROPERTIES_LABEL}</strong>&nbsp;{content.PART_FOUR}</p>
                <p>{content.PART_FIVE}</p>
                <p>{content.PART_SIX}&nbsp;<strong>{content.PRIVACY_DISCLAIMER}</strong>&nbsp;{content.PART_SEVEN}</p>
                <p><strong>{content.END_DISCLAIMER}</strong>&nbsp;{content.APPRECIATION}</p>
            </section>
            <section className="legacyContainer">
                <h1 className="neverForgetLabel">{content.NEVER_FORGET}</h1>
                <div className="patTillmanContainer">
                    <div className="iconContainer"><Icon className="patTillmanIcon" iconName="pat" /></div>
                    <ul className="patTillmanContent">
                        <h2 className="patTillmanNameLabel">{content.PAT_TILLMAN_NAME_LABEL}</h2>
                        <h3 className="patTillmanLifeRangeLabel">{content.PAT_TILLMAN_LIFE_RANGE_LABEL}</h3>
                        <h3 className="patTillmanDescriptionLabel">{content.PAT_TILLMAN_DESCRIPTION_LABEL}</h3>
                    </ul>
                </div>
                <div className="closingContainer">
                    <div className="quoteContainer">
                        <p>"{content.EMERSON_QUOTE}"</p>
                        <p>&nbsp;- {content.EMERSON_NAME_LABEL}</p>
                    </div>
                    <div className="lovedOnesContainer">
                        <ul className="doggysContainer">
                            <div className="iconContainer"><Icon className="doggysIcon" iconName="doggy" /></div>
                            <h3 className="doggysNameLabel">{content.CHIPPER_NAME_LABEL}</h3>
                        </ul>
                        <ul className="tkContainer">
                            <h3 className="tkNameLabel">{content.TK_NAME_LABEL}</h3>
                            <li>{content.TK_REMEMBERANCE_1}</li>
                            <li>{content.TK_REMEMBERANCE_2}</li>
                            <li>{content.TK_REMEMBERANCE_3}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;