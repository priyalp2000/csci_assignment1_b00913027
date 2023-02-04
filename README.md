# CSCI5709 Advanced Web Services
# Assignment 1 - Individual Submission

  

This is my individual work for Assignment 1. I have developed Front End for feature 'Search Movie'.

  

*  Date Created: 04/02/2023

*  Last Modification Date: 04/02/2023

*  Working App URL: 

*  Git URL: https://git.cs.dal.ca/priyalp/csci5709/-/tree/assignment1
  

## Authors
  
* [Priyal Patel](pr327862@dal.ca) - B00913027


## Getting Started


## Built With

* [React](https://reactjs.org/) - A JavaScript Library used to develop user interface.
* [Chakra UI](https://chakra-ui.com/) - A library used to build components nedded to develop React application.
* [Netlify](https://www.netlify.com/) - Deployment platform used to depoy the React application.
* [Vite](https://vitejs.dev/) - Used to create React application for better performance and speed.
  
## How to run on Local Machine

Git Clone URL - https://git.cs.dal.ca/priyalp/csci5709.git 

### Steps to follow
- Clone the git repo using above URL.
- Go to directory csci5709.
- Run command "npm instal".
- Run command "npm run dev".
- Click on the link displayed in the terminal.


## Installation Needed

I installed some react libraries to develop a web application. Anyone who wants to run the code in their local machine has to install these dependencies. Anyone can install these from terminal of thier machine. One has to run following commands.

1. "npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion"
2. "npm install react-icons"
3. "npm i @chakra-ui/icons"
4. "npm i react-router-dom"
5. "npm i react-card-slider-component"
6. "npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion chakra-ui-carousel"

## Sources Used
  
### File Name: ChakraCarousel.jsx
Reference: https://codesandbox.io/s/dd8vn

I used this file as a library for my code. I downloaded it from the above link. The code was created by [neil-morgan](https://codesandbox.io/s/dd8vn). I also downloaded 'hooks' and 'utils' folder as a dependencies for this file.
- I used the code to create sliding window for cardviews in react.
- The code was implemented by Neil-Morgan.
- I used the code as a library and set my code to create slider of Boxes.
  

### File Name: Search.jsx
Reference: https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58#:~:text=Firstly%2C%20we%20import%20useState%20from,list%20received%20from%20the%20parent 

I took the reference from the code written by [Shashank Singh](https://medium.com/@singhshashank) to implement standard search functionality. I used the concept he used in his code.
- I wanted to create a dummy data file consisting of a list of movie and wanted to implement search feature on those data. So I refered the method the author used in his code to complete my feature.
- The code was implemented by [Shashank Singh](https://medium.com/@singhshashank).
- Author developed the code for real time instant searching after typing the keyword. I created searching funcitionality after clicking the button. 
  

Lines 16 - 26

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

### File Name: Navbar.jsx
Reference: https://chakra-templates.dev/navigation/navbar

I took the refrence from the code from the above given link.
- I wanted to create a responsive Navigation bar for my web application. So I referred this code.
- The code is available on official website of Chakra-templates.
- I modified the elements in the navigation bar and I used Avatar in navigation bar.

Lines 6 - 28 
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Flex py={2} px={4} direction={["column", "row"]} justify="space-between" bg="bg-surface" boxShadow="sm" marginBottom={5}>
                <Flex alignItems="center" wrap="wrap">
                    <Flex flexGrow={1} justify="center" >
                        <Box ml={[4, 0]} fontSize='4xl' fontWeight='bold'>CineScope</Box>
                    </Flex>
                    <HamburgerIcon
                        onClick={isOpen ? onClose : onOpen}
                        display={["inline", "none"]}
                    />
                </Flex>
                <Flex display={[isOpen ? "flex" : "none", "flex"]} bg={["bg-surface", "bg-surface"]} >
                    <Stack align="center" direction={["column", "row"]} spacing='30px' fontSize='xl'>
                        <Link href='/home'>Home</Link>
                        <Link>Clubs</Link>
                        <Link>News and Updates</Link>
                        <Link>Watchlist</Link>
                        <Avatar name="Priyal Patel" src='https://bit.ly/broken-link' ml='96'/>
                    </Stack>
                </Flex>
        </Flex>
    );

## Used Chakra UI Components

|Component| Usage | Reference |
|---|---|---|
|Box| To Create a card view to display the images of poster of movies. |https://chakra-ui.com/docs/components/box|
|Icon| Add, HamBurger, Star icons are used to enhance user interface.|https://chakra-ui.com/docs/components/icon|
|SimpleGrid| To create a responsive grid structure of images. |https://chakra-ui.com/docs/components/simple-grid|
|Image| To set images in 'Box' component. |https://chakra-ui.com/docs/components/image|
|Avatar|To add avatar logo in Navigation bar. |https://chakra-ui.com/docs/components/avatar|
|Text| To take a Search input from user. |https://chakra-ui.com/docs/styled-system/text-and-layer-styles|
|Select| To create Dropdown menu for oprion selection.|https://chakra-ui.com/docs/components/select|
|HStack| To stack components horizontally or vertically|https://chakra-ui.com/docs/components/stack|
|Alert|To show Success, Error, Warning alertboxes to users.|https://chakra-ui.com/docs/components/alert|



# References: 

[1] “Grid,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/grid/usage (accessed Feb. 04, 2023).

[2] “Image,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/image (accessed Feb. 04, 2023).

[3]“Icon,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/icon (accessed Feb. 04, 2023).

[4] “Box,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/box/usage (accessed Feb. 04, 2023).

[5] M. Otto, “Spacing,” Getbootstrap.com, 2023. https://getbootstrap.com/docs/5.0/utilities/spacing/ (accessed Feb. 04, 2023).

[6] “Chakra UI Pro,” Chakra UI Pro, 2023. https://pro.chakra-ui.com/components/marketing/navbars (accessed Feb. 04, 2023).

[7] “Avatar,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/avatar (accessed Feb. 04, 2023).

[8] “Text and Layer Styles,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/styled-system/text-and-layer-styles (accessed Feb. 04, 2023).

[9] “SimpleGrid,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/simple-grid (accessed Feb. 04, 2023).

[10] neil-morgan, “Chakra Carousel,” CodeSandbox, Mar. 23, 2021. https://codesandbox.io/s/dd8vn (accessed Feb. 04, 2023).

[11] S. Singh, “Create a Simple Search Component in React.js using React Hooks | Geek Culture,” Medium, May 25, 2021. https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58#:~:text=Firstly%2C%20we%20import%20useState%20from,list%20received%20from%20the%20parent (accessed Feb. 04, 2023).

[12] “IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows,” IMDb, 2023. https://www.imdb.com/?ref_=nv_home (accessed Feb. 04, 2023).

[13] “Stock photos, royalty-free images, graphics, vectors & videos | Adobe Stock,” Adobe Stock, 2022. https://stock.adobe.com/ca/ (accessed Feb. 04, 2023).

[14] Ashish, “Create a new React app with Vite,” Scrimba blog, Aug. 09, 2022. https://scrimba.com/articles/create-react-app-with-vite/ (accessed Feb. 04, 2023).

[15] “Select,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/select (accessed Feb. 04, 2023).

[16] “Navigation/Navbar - Chakra Templates,” Chakra Templates, 2023. https://chakra-templates.dev/navigation/navbar (accessed Feb. 04, 2023).

[17] “Stack,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/stack (accessed Feb. 04, 2023).

[18] “Alert,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications., 2023. https://chakra-ui.com/docs/components/alert (accessed Feb. 04, 2023).

‌


‌


‌
‌
‌
‌
‌
‌
‌
‌
‌
‌
‌
‌

