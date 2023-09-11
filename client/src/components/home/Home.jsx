import{useEffect} from 'react';
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import Slide from "./Slide.jsx"
import MidSlide from './MidSlide.jsx';
import MidSection from './MidSection.jsx';


import { styled, Box } from "@mui/material";

import { getProducts } from '../../redux/actions/productActions.js';
import { useDispatch,useSelector   } from 'react-redux';


const Container = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2;

`

const Home = () =>{

 const { products } = useSelector(state => state.getProducts);
  

  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getProducts());
  }, [dispatch]);
    return (
        <>
          <NavBar />
          <Container>
            <Banner />
            <MidSlide products={products} title="Deals of the Day" timer={true}/>
            <MidSection />
            <Slide products={products} title="Discount for you" timer={false}/>
            <Slide products={products} title="Suggested Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending Topics" timer={false}/>
            <Slide products={products} title="Top Deaks on Accessories" timer={false}/>
            <Slide products={products} title="Summer Top Picks" timer={false}/>

          </Container>
        </>
    )
}

export default Home;  