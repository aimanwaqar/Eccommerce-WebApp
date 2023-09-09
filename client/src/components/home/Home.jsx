import{useEffect} from 'react';
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";

import { styled, Box } from "@mui/material";

import { getProducts } from '../../redux/actions/productActions.js';
import { useDispatch,useSelector   } from 'react-redux';
import { get } from 'mongoose';

const Container = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2;

`

const Home = () =>{

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getProducts());
  }, [dispatch]);
    return (
        <>
          <NavBar />
          <Container>
            <Banner />
          </Container>
        </>
    )
}

export default Home;  