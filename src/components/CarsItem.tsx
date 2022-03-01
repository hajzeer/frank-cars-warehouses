import {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

interface IProps {
     item: {
        readonly cars_vehicles__id: number,
        readonly name: string,
        readonly cars_vehicles_price: number,
        readonly cars_vehicles_make: string,
        readonly cars_vehicles_model: string,
        readonly cars_vehicles_licensed: boolean,
        readonly location_lat: number,
        readonly location_long: number,
        readonly cars_location: string,
        readonly cars_vehicles_year_model: number,
    },

}

const Container = styled.div`
    width: 220px;
    height: 250px;

    margin: 10px;

    border: 2px solid #777777;
    border-radius: 25px;
    background: #b7b7b7;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Paragraph = styled.p`

font-weight: 700;

`

const ButtonStyled = styled.button`
    width: 180px;
    height: 40px;
    background: #3b3b3b;
    color: #ffffff;
    border-radius: 25px;
    outline: none;
    
    border: none;
    cursor: pointer;

    transform: scale(1.05);
    transition-duration:  .3s;

    &:active {
        transform: scale(1)
    }

    &:hover {
        transform: scale(1.1);
    }
`

const CartItems = ({item}: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean | any>(false)

    return(
        <Container>
            <Paragraph>{item.cars_vehicles_make}</Paragraph>
            <Paragraph>{item.cars_vehicles_model}</Paragraph>
            <Paragraph>{item.cars_vehicles_price} PLN</Paragraph>
            {
                item.cars_vehicles_licensed ? <ButtonStyled onClick={()=> setIsVisible(!isVisible)}>SHOW MORE DETAIL</ButtonStyled> : null
            }
            <Modal visibility={isVisible} item={item} clickHandler={()=> setIsVisible(!isVisible)}/>
        </Container>
    )
}

export default CartItems;