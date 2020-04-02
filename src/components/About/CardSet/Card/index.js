import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../../common/Icon";

const Card = ({ data, i }) => {
    const {
        first_name,
        middle_name,
        last_name,
        title,
        date_of_birth,
        occupation,
        education_1,
        education_2,
        education_3,
        education_4
    } = data;
    const split = date_of_birth.split('-');
    const formattedDate = new Date(split[0], split[1] - 1, split[2]).toLocaleDateString({},
        {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
    );
    const educationArray = [education_1, education_2, education_3, education_4].map(education => <li className="education">{education}</li>)
    
    return (
        (first_name !== "Tiffany" && first_name !== "Eric" && (
            <ul className="profileCardContainer" key={i}>
                <li className="fullNameLabel">{first_name}&nbsp;{middle_name ? middle_name[0] + ". ": ""}{last_name}</li>
                <div className="position">{title}</div>
                <div className="iconContainer"><Icon className="profileIcon" iconName={first_name.toLowerCase()} /></div>
                <li className="dateOfBirthContainer">
                    <label className="dateOfBirthLabel">{content.DATE_OF_BIRTH}&nbsp;</label>
                    <div className="dateOfBirth">{formattedDate}</div>
                </li>
                <li className="occupationContainer">
                    <label className="occupationLabel">{content.OCCUPATION}&nbsp;</label>
                    <div className="occupation">{occupation}</div>
                </li>
                <ul className="educationContainer">
                    <label className="educationLabel">{content.EDUCATION}&nbsp;</label>
                    {educationArray}
                </ul>
            </ul>
        ))
    );
};

export default Card;