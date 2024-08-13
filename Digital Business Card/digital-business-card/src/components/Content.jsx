import ContentSection from "./ContentSection"

export default function Content(){
    return (
        <div className="content">
            <ContentSection
            title="About"
            text="I am an aspiring Software Engineer currently a junior at Caldwell University."
            />
            <ContentSection
            title="Skills"
            text="My skills are HTML, CSS, React, JavaScript and Python. I am well acquainted with DSA as well."
            />
        </div>
    )
}