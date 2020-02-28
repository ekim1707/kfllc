import React from 'react';
import "./styles.scss";
import content from "./content";

const TermsOfUse = () => {
    return (
        <div className="termsOfUseContainer">
            <section className="contentContainer">
                <a href="https://app.termly.io/document/terms-of-use-for-website/f251cce0-9b3f-4485-b2ae-4a865c2a6cfb" rel="noopener noreferrer" target="_blank">{content.TERMLY_HYPERLINK}</a>
                <br/><br/>
                <div className="content">{content.TERMS_OF_USE_CONTENT}</div>
            </section>
        </div>
    );
};

export default TermsOfUse;