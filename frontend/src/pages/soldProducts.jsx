import * as React from 'react';
import Product from '../components/users/right/product-card';
import useFetch from '../useFetch';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import '../components/users/right//right.css';
const Button = styled.button`

border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-right:20px;
`;
   
function Sold() {
    const user = useSelector((state) => state.user.currentUser.user);
    let { data:products, isloading, errMsg} = useFetch(
      `http://localhost:5000/api/products/${user.email}` //url from json-server
      
    );
  return (
    <section className='A' >
          <div className='right-heading'>
          <label className='heading-label'>Your Sold products </label>
          </div>
         
    
          <section className='products-list' >  
       {products && products.map((product) => (
           (!product.amount? <Product key={product.id} product={product} />:"")
         
        ))}
         {isloading && <div> loading ... </div>}
         {!products && !isloading && !errMsg && (
        <div className="not-found"> No Products</div>
      )}{/*no posts no loading*/}
      
      {errMsg && <div className="error"> {errMsg}</div>}
          
      </section>
       
       </section>
  );
}
export default Sold
