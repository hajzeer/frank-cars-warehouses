import { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/cartContext'
import {ICartItems} from '../interfaces/interfaces'

interface IProps {
    items: ICartItems
}

const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: #ffffff;
`;

const ButtonStyled = styled.button`

width: 40px;
height: 40px;

background: none;
 outline: none;
border: none;
color: #ffffff;
font-weight: 900;

cursor: pointer;

transition-duration:  .3s;


&:hover {
    transform: scale(1.1);
}

`

const CartItems = ({items}: IProps) => {
    const {cart, setCart} = useContext(CartContext);
    const removeItem = (item: object) => {
        setCart(cart.filter((removeItem: any[]) => {
            return removeItem !== item;
        }))
    }

    return (
        <Container key={items.id}>
            <ButtonStyled onClick={() => removeItem(items)}> X </ButtonStyled>
            <p>{items.make}</p>
            <p>{items.model}</p>
            <p>{items.price} PLN</p>
        </Container>
    )
}

export default CartItems