import {Box,TableBody,TableCell,TableRow,Typography,styled} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
   font-size: 14px;
   vertical-align: baseline;
   & > p{
     font-size: 14px;
     margin-top: 10px;
   }
`;

const StyleBadge = styled(LocalOfferIcon)`
   margin-right: 10px;
   color: #00CC00;
   font-size: 15px;
`;
 const ColumnText = styled(TableRow)`
 font-size: 14px;
 vertical-align: baseline;
 
 & > td{
    font-size: 14px;
    margin-top: 10px;
    border: none;
 }
 `;

const ProductDetail = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const currentDate= new Date().getTime() + (5*24*60*60*1000);
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14, }}>8 Ratings & 1 review
                <Box component="span"><img src={fassured} alt="" style={{ width: '77%', marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>Rs.{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>
                <Box component="span" style={{ color: '388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Avaialble Offers</Typography>
            <SmallText>
                <Typography><StyleBadge />Get extra Rs2172 off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyleBadge />Rs200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value Rs10,000T&C</Typography>
                <Typography><StyleBadge /> Rs500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value Rs10,000T&C</Typography>
                <Typography><StyleBadge /> Rs500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value Rs10,000T&C</Typography>
                <Typography><StyleBadge />Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth Rs10,000*</Typography>
                <Typography><StyleBadge />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Delivery </TableCell>
                        <TableCell style={{fontWeight : 600}}>Delivery By {currentDate.toDateString()} | Rs.199 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Warranty </TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Seller </TableCell>
                        <TableCell >
                            <Box component="span" style={{color :'2874f0'}}>SuperComNet</Box>
                        </TableCell>
                        <Typography>GST invoice available</Typography>
                        <Typography>Viw more sellers starting from {product.price.cost}</Typography>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                               <img src={adURL} alt="flipkartpoints" style={{width: 390}}/>
                             </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Descritiopn </TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;