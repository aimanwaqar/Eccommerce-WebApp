import { Box, Button,styled } from "@mui/material";
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart'
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Wrapper =styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;
 const Image= styled('img')({
    width: '95%',
    padding:  '15px',

 });


const StyleButton = styled(Button)`
   width: 48%;
   height: 50px;
   border-radius: 7px;

 `
const ActionItem = ({product}) =>{
    return(
        <>
           <Wrapper>
            <Box style={{ padding: '15px 20px',
                border: '1px solid #F0F0F0F0',  }}>
             <Image src={product.detailUrl} alt="" /> </Box>
             <StyleButton variant="contained" style={{marginLeft :10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyleButton>
             <StyleButton variant="contained" style={{background: '#fb541b'}}><FlashOnIcon />Buy Now</StyleButton>
           </Wrapper>
        </>
    )
}


export default ActionItem;