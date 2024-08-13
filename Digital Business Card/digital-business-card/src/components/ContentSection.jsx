export default function ContentSection({title,text}){
    return (
        <div className="section">
            <h1 className="section-title">{title}</h1>
            <p className="section-text">{text}</p>
        </div>
    )
}