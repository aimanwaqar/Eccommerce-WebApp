import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import {Box, Typography, styled,Grid} from "@mui/material";
import ActionItem from "./ActionItems";

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`; 

const Container = styled(Grid)`
   backgorund:   #FFFFFF;
   display: flex;
`;
const RightContainer =styled(Grid)`
    margin-top: 55px;
`

const DetailView=()=>{

    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading, product} = useSelector(state => state.getProductDetails);

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    
    useEffect(()=>{
        if(product && id !== product.id)
            dispatch(getProductDetails(id)) 
    }, [dispatch,id, product, loading])
    return(
        <>
            <Component>
            {
            product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} small={12}>
                        <ActionItem product={product} />
                    <RightContainer item lg={8} md= {8} xs={12} />
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: '#878787', fontSize: 14,}}>8 Ratings & 1 review
                        <Box component="span"><img src={fassured} alt="" style={{width: '77%', marginLeft: 20 }}/></Box>
                    </Typography>
                    <Typography>
                        <Box component="span" style={{fontSize: 28}}>Rs.{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span"style={{color: '#878787'}}><strike>{product.price.mrp}</strike></Box>
                        <Box component="span"style={{color: '388E3C'}}>{product.price.discount}</Box>
                    </Typography>
                    </Grid>
                </Container>
            }
            </Component>
        </>
    )

        }
export default DetailView;