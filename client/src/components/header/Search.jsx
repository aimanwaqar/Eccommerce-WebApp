import { useState,useEffect } from "react";
import {InputBase,Box,styled, ListItem,List} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productActions";
import {Link} from 'react-router-dom';

const SearchContainer = styled(Box)`
   background: #FFF;
   width: 38%;
   border-radius: 2px;
   margin-left: 10px;
   display: flex;
`;

const InputSearch = styled(InputBase)`
   padding-left: 20px;
   width: 100%;
   font-size: unset
`
const SearchIconWrraper = styled(Box)`
  color: blue;
  padding: 5px;
  display:flex;
`;

const ListWrapper = styled(List)`
   position: absolute;
   background: #FFFFFF;
   color: #000;
   margin-top: 30px;
   
`


const Search = ( )=>{

    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.getProducts);

    useEffect(()=>{
       dispatch(getProducts());
    },[dispatch])
    const getText = (text)=>{
       setText(text);
    }
    return(
        <>
        <SearchContainer>
            <InputSearch 
              placeholder="Search for products, brands and more"
              onChange={(e)=>getText(e.target.value)}
              value={text}
            />
            <SearchIconWrraper>
                <SearchIcon />
            </SearchIconWrraper>
            {
              text && 
               <ListWrapper>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                        <ListItem>
                          
                            <Link to={`/product/${product.id}`} 
                            onClick={setText('') }
                            style={{textDecpration: 'none',}}
                            >
                            {product.title.longTitle}
                            </Link>
                          
                        </ListItem>
                  ))
                }
               </ListWrapper>
            }
        </SearchContainer>
          
        </>
    );
}

export default Search;