import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './components/pages/News';
import Products from './components/pages/Products';
import LoginForm from './components/LoginForm';
import CartPage from './components/pages/CartPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/products' component={Products} />
          <Route path='/ProductDetail' component={ProductDetailPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
