export default function LinkButton({text,link}){
    return (
        <button className="link-button"><a href={link}>{text}</a></button>
    )
}