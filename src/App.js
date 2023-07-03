import Login from './login';
import Navbar from './navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from './Products'
import ProductDetailsPage from './productdetails';
function App() {
  return (
    <div >
      <Navbar/>
<BrowserRouter>
<Routes>
  <Route path='/login' element ={<Login/>}></Route>
  <Route path='productdetails' element={<ProductDetailsPage/>}/>
  <Route path='/product/:productId' element ={<ProductDetailsPage/>}/>
  <Route path='/products' element ={<Products/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;

