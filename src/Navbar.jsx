import { Avatar, Link, Stack, Box, Flex, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        // Reference: https://chakra-templates.dev/navigation/navbar
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
}