import "./style.css";

const Section = ({ header, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{header}</h2>
            {extraHeaderContent}
        </div>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;