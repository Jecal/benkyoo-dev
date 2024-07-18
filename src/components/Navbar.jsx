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

// auth0
import { useAuth0 } from '@auth0/auth0-react';

// built
import logo from '/logo.png';
import SignInButton from './SignInButton';
import Profile from './Profile';

function Navbar() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isLoading, error } = useAuth0();

    const logoClick = () => {
        navigate('/')
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
                        <Link px={'2vw'} _hover={{ textDecoration: 'none' }}>
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
                            {error && <Text>Authentication Error</Text>}
                            {!error && isLoading && <Text>Loading...</Text>}
                            {!error && !isLoading && (
                                <>
                                    <SignInButton />
                                    <Profile />
                                </>
                            )}
                        </HStack>
                    </Container>
                </HStack>
            </Box>
        </>
    )
}

export default Navbar;