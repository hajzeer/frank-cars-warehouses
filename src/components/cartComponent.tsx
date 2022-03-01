import { useContext, useEffect, useState} from "react"
import CartList from "./CartList"
import { CartContext } from "../context/cartContext"
import {IStyledProps} from '../interfaces/interfaces'
import styled from "styled-components"

interface IProps {
    visibility: boolean
}

const Container = styled.div<IStyledProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.visible ? 'flex' : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 99;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(6px);
    }
`

const InnerCoitainer = styled.div`
    width: 450px;
    height: auto;
    position: relative;
    background: #333333;
    border-radius: 25px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
color: #ffffff;

`



const CartComponent = ({visibility}: IProps) => {
    const {cart} = useContext(CartContext);

    const calculateTotal = (items: any) =>
    items.reduce((total: number, items: any) => total + Number(items.price), 0);

    useEffect(() =>{


    })




    return (
        <Container visible={visibility}>
            <InnerCoitainer>
            <CartList items={cart}/>
            <div>
            {cart.length === 0 ? (
                    <p>
                        0.00 PLN
                    </p>
                ) : (
                    <p>
                    {calculateTotal(cart).toFixed(2)} PLN
                    </p>
                )}
            </div>
            </InnerCoitainer>

        </Container>
    )
}

export default CartComponent