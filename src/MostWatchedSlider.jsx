import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { SimpleGrid, Image, Box, Button, ChakraProvider, extendTheme, Container, Heading, VStack, HStack, Text, Flex, Tag } from '@chakra-ui/react';
import { StarIcon, AddIcon } from '@chakra-ui/icons';
import {MovieDetails} from './Datafile.jsx';
import ChakraCarousel from "./ChakraCarousel";

const MostWatchedSlider = () => {

    return (
        // Reference: https://codesandbox.io/s/dd8vn
    <ChakraCarousel gap={0} ml={50}>

    {MovieDetails.slice(0, 8).map((movie, index) => (
        // Reference: https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58#:~:text=Firstly%2C%20we%20import%20useState%20from,list%20received%20from%20the%20parent
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={index}>
            <Image boxSize='sm' src={movie.imageUrl} alt={movie.imageAlt} />
            <Box p='6'>
                <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                {movie.title}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                {Array(10)
                    .fill('')
                    .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < movie.rating ? 'teal.500' : 'gray.300'}
                    />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {movie.reviewCount}reviews
                </Box>
                </Box>

                <Button mt='3' leftIcon={<AddIcon />} colorScheme="teal" variant="solid" px={20} h={8}>
                    Watchlist
                </Button>
                
            </Box>
        </Box>
    ))}
  </ChakraCarousel>



    );
  };
  
  export default MostWatchedSlider;