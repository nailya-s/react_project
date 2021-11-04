import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products/Products';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/checkout" component={Checkout}/>
    <Route exact path="/products/:productId" component={ProductDetails}/>
    <Route exact path='/about' component={About}/>
    <Redirect to='/'/>
    </Switch>
    
    </>
  );
}

export default App;
