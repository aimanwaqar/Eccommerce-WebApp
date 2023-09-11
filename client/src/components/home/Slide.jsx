import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { Box,Typography,styled, Divider} from '@mui/material';
import Button from '@mui/material/Button';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
   margin-top: 10px;
   color: #FFFFFF;
`;

const Deal = styled(Box)`
   padding: 15px 20px;
   display: flex;
`;

const Timer = styled(Box)`

   display: flex;
   margin-left: 10px;
   align-items: center;
   color: gray;

`;

const DealText= styled(Typography)`

font-size: 22px;
font-weight: 600;
margin-right: 35px;
line-height: 32px;
color: black;
`;

const ViewButton = styled(Button)`
   margin-left: auto;
   background-color: #2874f0;
   border-radius: 2px;
   font-size: 13px;
   font-weight: 600;
`; 

const Image =styled('img')({
    width: 'auto',
    height: 150,
});

const Text =styled(Typography)`
   font-size: 14px;
   margin-top: 5px;
   
`


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide= ({products, title, timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({hours,minutes,seconds}) =>{
     return <Box variant="span">{hours} : {minutes}: {seconds} Left</Box>;
    }
    return(
        <>
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                    <img src={timerURL} alt="timer" style={{width: 24}} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                   </Timer>  
                }
                
                <ViewButton variant = "contained" color= "primary">View All</ViewButton>
            </Deal>
            <Divider />
            <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode= {true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product =>(
                        <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" style={{padding: '25px 15px',}}>
                                <Image src={product.url} alt="product" />
                                <Text style={{fontWeight: 600,color: '#2122121'}}>{product.title.shortTitle}</Text>
                                <Typography style={{color:'green',}}>{product.discount}</Typography>
                                <Typography style={{color:'212121', opacity: '0.6'}}>{product.tagline}</Typography>
                            </Box>
                        </Link> 
                    ))
                }

            </Carousel>
        </Component>
        </>
    )
}


export default Slide;