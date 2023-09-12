import { useState,useEffect } from "react";
import { Box, Typography,styled} from "@mui/material";

const Header =styled(Box)`
   padding: 15px 24px;
   background: #fff;
   border-bottom: 1p solid #f0f0f0;
`; 

const Heading = styled(Typography)`
   color: #878787;
` ;

const Container= styled(Box)`
   padding: 15px 24px;
   background: #fff;
   & > p{
    margin-bottom: 20px;
    font-size: 14px;
   }
   & > h6{
    margin-bottom: 20px;
   }
`; 

const Price = styled(Box)`
    float: right;
`;

 const Discount = styled(Typography)`
     color: green,
     font-weight: 500;
 `



const TotalView = ({cartItems})=>{
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    useEffect(()=>{
       totalAmount();
    }, [cartItems])

    const totalAmount = ()=>{
        let price = 0, discount = 0;
        cartItems.map(item =>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost );
        })
        setPrice(price);
        setDiscount(discount);
    }

    return(
         <>
           <Container>
              <Header>
                  <Heading>PRICE DEATILS</Heading>
              </Header>
              <Box>
                <Typography>Price ({cartItems?.length} item)
                  <Price component="span">Rs.{price}</Price>
                </Typography>
                <Typography>Discount
                  <Price component="span">-Rs.{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                  <Price component="span">Rs.50</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                  <Price component="span">Rs.{price-discount + 50}</Price>
                </Typography>
                <Discount>You will save Rs.{discount - 50}</Discount>
              </Box>
           </Container>
         </>
    )
}

export default TotalView;