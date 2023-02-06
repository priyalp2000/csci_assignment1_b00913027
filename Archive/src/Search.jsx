import { ChakraProvider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import {MovieDetails} from './Datafile.jsx';
import { useLocation} from 'react-router-dom';
import {BoxOfMovie} from './Box.jsx';
import {Navbar} from './Navbar.jsx';
import {SearchBar} from './SearchBar.jsx';
import FilterDropdown from './FilterDropdown.jsx';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box } from '@chakra-ui/react';

export const Search = () => {

    const { state } = useLocation();
    const keyword = state.keyword;
    console.log(state.keyword);

    //Reference: https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58#:~:text=Firstly%2C%20we%20import%20useState%20from,list%20received%20from%20the%20parent
    const filteredMovies = MovieDetails.filter(
        movie => {
        return (
            movie
            .title
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );
        }
    );
    const filtered = filteredMovies.map(movie =>  <BoxOfMovie key={movie.id} movie={movie} />);
    if(filtered.length == 0)
    {
        return(
        <ChakraProvider>
        { <Navbar/> }
        {<SearchBar/>}
        {<FilterDropdown/>} 

            {/* Reference: https://chakra-ui.com/docs/components/alert */}
            <Box as="section" marginBottom={5} marginLeft={5} marginRight={5}>
                <Alert status='warning' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='200px' >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        No Results Found!!!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Try to Search again.
                    </AlertDescription>
                </Alert>
            </Box>

        </ChakraProvider> );
    }
    else{
        return(
        <ChakraProvider>
        { <Navbar/> }
        {<SearchBar/>}
        {<FilterDropdown/>}
        <SimpleGrid minChildWidth='350px' spacing='10px' direction={["column", "row"]} ml={5} mr={5}>
            {filtered}
        </SimpleGrid>
    </ChakraProvider>);
    }
}

