import { ChakraProvider } from '@chakra-ui/react';
import React , {useState, useEffect} from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {MovieDetails} from './Datafile.jsx';
import { useLocation} from 'react-router-dom';
import {BoxOfMovie} from './Box.jsx';
import {Navbar} from './Navbar.jsx';
import {SearchBar} from './SearchBar.jsx';
import FilterDropdown from './FilterDropdown.jsx';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box } from '@chakra-ui/react';

export const Filter = () => {

    const { state } = useLocation();
    let [filtered,setFiltered] = useState();
    const rating = state.rating;
    const genre = state.genre;
    const year = state.year;
    console.log(rating);
    console.log(genre);
    console.log(year);
    // if(genre != null)
    // {
    //     console.log("Hiiii...");
    //     const filteredMovies = MovieDetails.filter(
    //         movie => {
    //         return (
    //             movie
    //             .genre
    //             .toLowerCase().equal(genre.toLowerCase())
    //         );
    //         }
    //     );
    //     setFiltered = filteredMovies.map(movie =>  <BoxOfMovie key={movie.id} movie={movie} />);
    // }

    return(
        <ChakraProvider>
            { <Navbar/> }
            {<SearchBar/>}
            {<FilterDropdown/>}
            
            {/* Reference: https://chakra-ui.com/docs/components/alert */}
            <Box as="section" marginBottom={5} marginLeft={5} marginRight={5}>
                <Alert status='error' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='200px' >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Only Search Feature Implemented
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Completed 1 Task as instructed in Assignment 1 handhout.
                    </AlertDescription>
                </Alert>
            </Box>


            {/* <SimpleGrid minChildWidth='350px' spacing='10px' direction={["column", "row"]} ml={5} mr={5}>
                {filtered}
            </SimpleGrid> */}
        </ChakraProvider>
    );
}