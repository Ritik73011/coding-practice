import ProductContext from './Context/Product.jsx'
import Product from './Component/ProductPage/Product'
import './App.css';

function App() {
  return (
    
    <div className="App">
     <ProductContext.Provider value={{}}>
        <Product/>
     </ProductContext.Provider>
    </div>
  );
}

export default App;
