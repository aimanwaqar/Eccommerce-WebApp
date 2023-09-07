import {InputBase,Box,styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

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
`

const Search = ( )=>{
    return(
        <>
        <SearchContainer>
            <InputSearch 
              placeholder="Search for products, brands and more"
            />
            <SearchIconWrraper>
                <SearchIcon />
            </SearchIconWrraper>
        </SearchContainer>
          
        </>
    );
}

export default Search;