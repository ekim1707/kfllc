import React from 'react';
import "./styles.scss";
import content from "./content";

const Literature = () => {
    return (
        <section className="literatureContainer">
            <h1 className="literatureHeader">{content.RECOMMENDED}</h1>
            <ul className="recommendedList">
                {content.BOOKS.map((BOOK, i) => {
                    return (
                        <a className="recommendedLink" href={BOOK.LINK} rel="noopener noreferrer" target="_blank" key={i}>
                            <li className="recommendedLi">
                                <span className="bookTitle">{BOOK.TITLE}</span>
                                <div className="authorContainer">
                                    <span className="bookAuthor">{BOOK.AUTHOR}</span>,&nbsp;
                                    <span className="bookYear">{BOOK.YEAR}</span>
                                </div>
                            </li>
                        </a>
                    );
                })}
            </ul>
        </section>
    );
};

export default Literature;