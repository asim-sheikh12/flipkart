import 'antd/dist/antd.css'
import { useEffect } from 'react';
import { Headers } from '../Components/Header/Header';
import { NavBar } from '../Components/NavBar/NavBar';
import { ImageSlider } from '../Components/Slider/ImageSlider';
import { Deals } from '../Pages/Deals/Deals';
import { Product_Details } from '../Pages/Product Details/Product_Details';
import './App.css';

function App() {
  useEffect(()=>{
      document.body.style.backgroundColor = "white";
  },[])
  return (
    <div className="App">
      <Headers/>
      <NavBar/>
      <ImageSlider/>
      <Deals/>
      <Product_Details/>
    </div>
  );
}

export default App;
