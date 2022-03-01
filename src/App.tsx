import {useState, useEffect} from 'react'
import styled, { createGlobalStyle  } from 'styled-components';
import {IArrayItems} from '../src/interfaces/interfaces';
import CartList from './components/CartList';
import axios from 'axios'
import {byDate} from './functions/func';
import { CartProvider } from './context/cartContext';

const GlobalStyle = createGlobalStyle `
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
`

const MainSubject = styled.h2`

width: 100%;
text-align: center;
`

function App() {

  const [isData, setIsData] = useState<IArrayItems | any>(Array)
  

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/warehouse`)
    const data = response.data;

    data.sort(byDate);

    return setIsData(data)

  }

  useEffect(()=> {
    getData()
  }, [])


  console.log(isData)
  return (
    <div className="App">
    <CartProvider>

      <GlobalStyle/>
      <MainSubject>Frank's Cars Warehouse</MainSubject>
      <CartList items={isData} />
      </CartProvider>
    </div>
    
  );
}

export default App;
