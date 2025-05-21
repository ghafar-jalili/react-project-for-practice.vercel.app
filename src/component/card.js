import "./card.css"
function Card({image,head,paragraph}){
    return(
        <li>
            <img src={image} alt={head} />
            <h4>{head}</h4>
            <p>{paragraph}</p>
        </li>
    )

}
export default Card