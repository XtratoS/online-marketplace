import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined,AddToHomeScreenRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useState } from "react";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const btn = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Navbar = () => {
  const [search, setSearch] = useState("");
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    await logout(dispatch);
  };
  
      return (
<Container>
  <Wrapper>
    <Left>
      <SearchContainer>
        <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <Link Link to={`/search/${search}`}>
        <Search style={{ color: "gray", fontSize: 16 }} />
        </Link>
      
        
      </SearchContainer>
    </Left>
        <Center>
            <Logo> ShopON. </Logo>
            
                   
        </Center>
        <Right>
        {!user ?
        (<div>
          <Link to ={"/"}>
          <MenuItem>Home</MenuItem> 
          </Link> 
          <Link to={"/register"}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={"/login"}>
        <MenuItem>SIGN IN</MenuItem>
        </Link> 
        </div>) : ( <div>
          
          <Link to ={"/"}>
          <MenuItem>Home</MenuItem> 
          </Link>
          <Link to ={"/profile"}> <MenuItem>Profile</MenuItem> </Link>
          <Link to ={"/"}> <MenuItem onClick={handleClick}>Logout</MenuItem> </Link>
        </div>) }
        
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
