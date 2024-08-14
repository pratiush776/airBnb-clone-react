export default function Card(props) {
    return (
        <div className="card-container">
          {/* <span className="card-status">{props.status}</span> */}
          <img className="card-image" src={`https://picsum.photos/200/300?random=${Math.random()}`} alt="image"></img>
          <span className="rating-details">
            <img className=" card-text card-star" src="../images/star.png"></img>
            <span className="card-text rating">{props.rating}</span>
            <span className="card-text rank-country">({props.reviewCount}.0).{props.location}</span>
          </span>
          <span className="card-text">{props.title}</span>
          <span className="card-text"><span className="bold">From ${props.price} </span>/ person</span>
        </div>
    )
}