import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";

import { styled, Box } from "@mui/material";

const Container = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2;

`

const Home = () =>{
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