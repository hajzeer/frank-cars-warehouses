import {useState, useEffect} from 'react'
import styled, { createGlobalStyle  } from 'styled-components';
import {IArrayItems} from '../src/interfaces/interfaces';
import CarsList from './components/CarsList';
import axios from 'axios'
import {byDate} from './functions/func';
import { CartProvider } from './context/cartContext';
import CartComponent from './components/cartComponent';

const GlobalStyle = createGlobalStyle `
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
`

const CartButton = styled.button`

position: fixed;

top: 25px;
right: 15px;

width: 100px;
height: 50px;

z-index: 999;

background: none;
 outline: none;
border: none;
color: #000000;
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

const MainSubject = styled.h2`

width: 100%;
text-align: center;
`



function App() {

  const [isData, setIsData] = useState<IArrayItems | any>(Array)
  const [isVisible, setIsVisible] = useState<boolean | any>(false)
  

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/warehouse`)
    const data = response.data;

    data.sort(byDate);

    return setIsData(data)

  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <div className="App">
    <CartProvider>

      <GlobalStyle/>
      <MainSubject>Frank's Cars Warehouse</MainSubject>
      <CarsList items={isData} />
      <CartButton onClick={() => setIsVisible(!isVisible)}>CART</CartButton>
      <CartComponent visibility={isVisible}/>
      </CartProvider>
    </div>
    
  );
}

export default App;
