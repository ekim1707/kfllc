import React from 'react';
import "./styles.scss";
import content from "./content";

const Other = () => {
    return (
        <section className="otherContainer">
            <div className="otherContent">
                <h1>{content.MESSAGE}</h1>
            </div>
        </section>
    );
};

export default Other;