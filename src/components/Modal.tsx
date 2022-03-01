import styled from 'styled-components';

interface IModal {
    item: {
        readonly name: string,
        readonly location_lat: number,
        readonly location_long: number,
        readonly cars_location: string,
        readonly cars_vehicles_make: string,
        readonly cars_vehicles_model: string,
        readonly cars_vehicles_year_model: number,
        readonly cars_vehicles_price: number,
    },
    visibility: boolean,
    clickHandler: () => void,
}

interface IStyledProps {
    readonly  visible?: boolean,
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
    width: 400px;
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

const ButtonStyled = styled.button`

position: absolute;
width: 40px;
height: 40px;
top:  20px;
right: 20px;
background: none;
 outline: none;
border: none;
color: #ffffff;
font-weight: 900;

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

const AddToCartButton = styled.button`

position: absolute;
width: 100px;
height: 40px;
bottom:  35px;
right: 20px;
background: none;
 outline: none;
border: none;
color: #ffffff;
font-weight: 900;
text-transform: uppercase;

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


const Modal = ({item, visibility, clickHandler}: IModal) => {
    const url = `https://www.google.com/maps/@${item.location_lat},${item.location_lat}`
    return(
        <Container visible={visibility}>
            <InnerCoitainer>
            <h2>Details</h2>
            <p>{item.cars_vehicles_make}</p>
            <p>{item.cars_vehicles_model}</p>
            <p>{item.cars_vehicles_year_model}</p>
            <p>{item.cars_vehicles_price} PLN</p>
                <h2>Location</h2>
            <p>Warehouse: {item.name}</p>
            <p>Field: {item.cars_location}</p>
            <p>Lat: {item.location_lat}</p>
            <p>Long: {item.location_long}</p>
            <ButtonStyled onClick={clickHandler}>X</ButtonStyled>
            <AddToCartButton onClick={clickHandler}>Add to cart</AddToCartButton>
            </InnerCoitainer>
        </Container>
    )
}

export default Modal;