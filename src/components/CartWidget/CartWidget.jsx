import cart from "./cart.svg";
 


const CartWidget = () => {
    


    return(
        <div className="containerLength">
        <img src={cart} alt="cart"></img>
        <span className="cantCart"  >
            5
            </span>
            </div> 
            )
}
export default CartWidget;