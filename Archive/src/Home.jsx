import { ChakraProvider } from '@chakra-ui/react';
import React , {useState, useEffect} from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import {MovieDetails} from './Datafile.jsx';
import {BoxOfMovie} from './Box.jsx';
import {Navbar} from './Navbar.jsx';
import {SearchBar} from './SearchBar.jsx';
import {LabelNewReleased} from './LabelNewReleased.jsx';
import { LabelMostRated } from './LabelMostRated.jsx';
import MostWatchedSlider from './MostWatchedSlider.jsx';
import MostRatedSlider from './MostRatedSlider.jsx';
import FilterDropdown from './FilterDropdown.jsx';

export const Home = () => {
  
  const movies = MovieDetails.map(movie =>  <BoxOfMovie key={movie.id} movie={movie} />);

  return (
    <ChakraProvider>
      { <Navbar/> }
      {<SearchBar/>}
      {<FilterDropdown/>}
      {/* Reference: https://chakra-ui.com/docs/components/simple-grid */}
      <SimpleGrid minChildWidth='350px' spacing='10px' direction={["column", "row"]} ml={5} mr={5}>
        { movies }
      </SimpleGrid>
      {<LabelNewReleased/>}
      {<MostWatchedSlider/>}
      {<LabelMostRated/>}
      {<MostRatedSlider/>}
    </ChakraProvider>
  )
}

export default Home;

