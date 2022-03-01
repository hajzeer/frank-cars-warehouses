import { ICartItems } from "../interfaces/interfaces"
import CartItems from "./CartItems"

interface IProps {
    items: Array<ICartItems>
}

const CartList = ({items}: IProps) => {
    return(
        <>
            {
            items.map(item => {
                return(
                    <CartItems items={item} key={item.id}/>
                )
                })
            }
        </>

    )
}

export default CartList