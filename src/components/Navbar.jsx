// chakra
import {
    Box,
    HStack,
    Container,
    Image,
    Link,
    useColorMode,
    IconButton,
    Text
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

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
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useAuthState(auth);

    const logoClick = () => {
        navigate('/')
    };

    const notesClick = () => {
        navigate('/notes')
    };

    return (
        <>
            <Box
                display={'inline-block'}
                mt={'3vh'}
                borderWidth={'1px'}
                borderRadius={'lg'}
            >
                <HStack direction='row' spacing={'6vw'} h='7vh'>
                    <Container onClick={logoClick} cursor='pointer' px={'1vw'}>
                        <Image src={logo} h='3vh'/> 
                    </Container>   
                    <HStack spacing={'2vw'}>
                        <Link px={'2vw'} _hover={{ textDecoration: 'none' }} onClick={notesClick}>
                            notes
                        </Link>
                        <Link px={'2vw'} _hover={{ textDecoration: 'none' }}>
                            dash
                        </Link>
                        <Link px={'2vw'} _hover={{ textDecoration: 'none' }}>
                            community
                        </Link>
                    </HStack>
                    <Container>
                        <HStack spacing={'1vw'}>
                            <IconButton 
                                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                                variant={'ghost'}
                                aria-label={'toggle color mode'}
                            />
                                <>
                                    <SignInButton />
                                    <Profile />
                                </>
                        </HStack>
                    </Container>
                </HStack>
            </Box>
        </>
    )
}

export default Navbar;