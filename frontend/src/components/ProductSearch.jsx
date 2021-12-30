import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const word = location.pathname.split("/")[2];
  useEffect(() => {
    const getProducts = async () => {
      try {
        
        const res = await axios.get(
          
             `http://localhost:5000/api/products/${word}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  });
  
  return (
    <Container>
      {
          products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default ProductSearch;
