import styled from 'styled-components';

import {IArrayItems} from '../interfaces/interfaces'
import CarsItems from './CarsItem';

interface IComponentProps {
    items: Array<IArrayItems>,
}

const Container = styled.div`

width: 100%;
height: auto;

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;



`

const CarsList = ({items} : IComponentProps) => {
    return (
    <Container>
    {
        items.map(item => {
            return(
                <CarsItems key={item.cars_vehicles__id} item={item}/>
            )
        })
    }
    </Container>
    )
}

export default CarsList;