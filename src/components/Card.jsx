import star from "../../public/images/star.png"

export default function Card(props) {
  let cardStatus= ""
  if (props.openSpots === 0 ){
    cardStatus = "SOLD OUT"
  }  else if (props.location === "Online"){
    cardStatus = "ONLINE"
  }
    return (
        <div className="card-container">
          {cardStatus && <span className="card-status">{cardStatus}</span>}
          <img className="card-image" src={`https://picsum.photos/200/300?random=${Math.random()}`} alt="image"></img>
          <span className="rating-details">
            <img className=" card-text card-star" src={star}></img>
            <span className="card-text rating">{props.rating}</span>
            <span className="card-text rank-country">({props.reviewCount}.0).{props.location}</span>
          </span>
          <span className="card-text">{props.title}</span>
          <span className="card-text"><span className="bold">From ${props.price} </span>/ person</span>
        </div>
    )
}