import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductContainer from "./containers/ProductContainer";
import ProductDetail from "./containers/ProductDetail";
import './App.css';

function App() {
  return (
    <div className="App">
<Router>
  <Header></Header>
  <Routes>
<Route path="/" element={<ProductListing/>}></Route>
<Route path="/product/:productId" element={<ProductDetail/>} ></Route>
<Route>404 Not Found</Route>
  </Routes>
  </Router> 
    </div>
  );
}

export default App;
