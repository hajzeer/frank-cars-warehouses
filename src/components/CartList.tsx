import styled from 'styled-components';

import {IArrayItems} from '../interfaces/interfaces'
import CartItems from './CarsItem';

interface IComponentProps {
    items: Array<IArrayItems>,
    
}

const Container = styled.div`

width: 100%;
height: auto;

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;



`

const CartList = ({items} : IComponentProps) => {
    return (
    <Container>
    {
        items.map(item => {
            return(
                <CartItems key={item.cars_vehicles__id} item={item}/>
            )
        })
    }
    </Container>
    )
}

export default CartList;