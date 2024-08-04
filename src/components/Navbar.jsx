import React from 'react';

// chakra
import {
    Box,
    HStack,
    VStack,
    Image,
    Link,
    useColorMode,
    IconButton,
    Show,
    Spacer,
    Flex,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    DrawerHeader,
    DrawerBody,
    Divider
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

// router
import { useNavigate } from 'react-router-dom';

// firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// built
import logo from '/logo.png';
import SignInButton from './SignInButton';
import Profile from './Profile';

function Navbar() {
    const [user] = useAuthState(auth);
    
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();

    const logoClick = () => {
        navigate('/')
    };

    const notesClick = () => {
        navigate('/notes')
    };

    const aboutClick = () => {
        navigate('/about')
    };

    // smaller navbar
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Show above={'800px'}>
                <Box
                    display={'inline-block'}
                    mt={'3vh'}
                    borderWidth={1}
                    borderRadius={'lg'}
                    width={'80vw'}
                >
                    <Flex
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        p={4}
                    >
                        <Box onClick={logoClick} cursor='pointer'>
                            <Image src={logo} h={'3vh'}/>
                        </Box>
                        <Box>
                            <Flex direction={'row'}>
                                <Link px={'2vw'} _hover={{ textDecoration: 'none' }} onClick={notesClick}>
                                    notes
                                </Link>
                                <Link px={'2vw'} _hover={{ textDecoration: 'none' }} onClick={aboutClick}>
                                    about
                                </Link>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex direction={'row'} alignItems={'center'}>
                                <IconButton 
                                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    onClick={toggleColorMode}
                                    variant={'ghost'}
                                    aria-label={'toggle color mode'}  
                                />
                                <Spacer />
                                <>
                                    <SignInButton />
                                    <Profile />
                                </>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Show>
                <Show below={'800px'}>
                    <Box
                        display={'inline-block'}
                        mt={'3vh'}
                        borderWidth={1}
                        borderRadius={'lg'}
                        width={'90vw'}
                    >
                        <Flex 
                            direction={'row'} 
                            alignItems={'center'} 
                            justifyContent={'space-between'}
                            p={3}
                        >
                            <Box onClick={logoClick} cursor='pointer'>
                                <Image src={logo} h='3vh'/> 
                            </Box>
                            <Box>
                                <IconButton 
                                    ref={btnRef} 
                                    onClick={onOpen}
                                    icon={<HamburgerIcon />}
                                />
                            </Box>
                                <Drawer
                                    isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader onClick={logoClick} cursor='pointer'>
                                            <Image src={logo} h='3vh'/> 
                                        </DrawerHeader>
                                        <DrawerBody>
                                            <HStack p={4}>
                                                <IconButton 
                                                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                                    onClick={toggleColorMode}
                                                    variant={'ghost'}
                                                    aria-label={'toggle color mode'}
                                                />
                                                <SignInButton />
                                                <Profile />
                                                {user && <Text>{user.displayName}</Text>}
                                            </HStack>
                                            <Divider />
                                            <VStack>
                                            <Link px={'2vw'} _hover={{ textDecoration: 'none' }} onClick={notesClick} alignSelf={'start'}>
                                                <Text fontSize={'3xl'}>notes</Text>
                                            </Link>
                                            <Link px={'2vw'} _hover={{ textDecoration: 'none' }} alignSelf={'start'}>
                                                <Text fontSize={'3xl'}>dash</Text>
                                            </Link>
                                            <Link px={'2vw'} _hover={{ textDecoration: 'none' }} alignSelf={'start'}>
                                                <Text fontSize={'3xl'}>community</Text>
                                            </Link>
                                            </VStack>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                        </Flex>
                    </Box>
                </Show>

        </>
    )
}

export default Navbar;