import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Users from "./components/users/index";
import Add from"./components/users/right/add-product";
import SearchPage from "./pages/search";
import Sold from "./components/sold/index";
import NotSold from "./components/not-sold";
import Purchased from "./components/purchased";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
//import { Search } from "@material-ui/icons";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login"> <Login /></Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile"> <Users/> </Route>
        <Route path="./purchased"> <Purchased/> </Route>
        <Route path="./sold"> <Sold/> </Route>
        <Route path="./notsold"> <NotSold/> </Route>
        <Route path="/add"> <Add/> </Route>
        <Route path="/signout">
          <Redirect to="/login" />
        </Route>
        <Route path="/search"> <SearchPage/> </Route>
        <Route path="/sucess"> <Success/> </Route>
      </Switch>
    </Router>
  );
};

export default App;
