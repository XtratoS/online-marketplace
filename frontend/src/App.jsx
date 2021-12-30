import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Users from "./components/users/index";
import Add from"./components/users/right/add-product";
import SearchPage from "./pages/search";
import Sold from "./pages/soldProducts";
import NotSold from "./pages/notSoldProducts";
import Purchased from "./components/purchased";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Success from "./pages/Success";
import Edit from "./components/users/right/edit-product"; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login"> <Login /></Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile"> <Users/> </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/purchased">
        <Announcement />
        <Navbar />
        <Purchased/>
        </Route>
        <Route path="/sold"> 
        <Announcement />
        <Navbar />
        <Sold/> 
        </Route>
        <Route path="/notsold">
        <Announcement />
        <Navbar />
        <NotSold/> 
        </Route>
        <Route path="/add"> <Add/> </Route>
        <Route path="/edit/:id"> <Edit/> </Route>
        <Route path="/search/:search"> <SearchPage/> </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
