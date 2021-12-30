import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-watercolor-light-purple-e-commerce-taobao-banner-background-image_181316.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => 
{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const [checked, setSellerChecked] = React.useState(true);
  const handleChange = (event) => {
    setSellerChecked(event.target.checked);
  };


  const handleClickReg = (e) => {
    e.preventDefault();
    register(dispatch, {username, email, password});
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
      
          <Input placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
           />
          <Input placeholder="email"
          onChange={(e) => setEmail(e.target.value)} />

          <Input placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
           />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
     
          <Button onClick={handleClickReg} >
            CREATE
            </Button>
        
          
        </Form>
      </Wrapper>
    </Container>
  );
          
        };
export default Register;
