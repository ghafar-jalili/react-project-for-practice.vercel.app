import "./card.css"
function Button({children,onClick,isSelected}){

    return(
    <button className={isSelected ? "active" :""} onClick={onClick}>{children}</button>
    )
}
export default Button