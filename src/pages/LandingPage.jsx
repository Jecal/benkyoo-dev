import Navbar from '../components/Navbar';
import SignInButton from '../components/SignInButton';
import logo from '/logo.png';

// chakra
import {
    Box,
    Heading,
    Text,
    VStack,
    Image,
    Button,
} from '@chakra-ui/react';

// firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

function LandingPage() {
    return (
        <>
            <VStack spacing={'3vh'}>
                <Navbar />
                <Landing />
            </VStack>
        </>
    )
}

const Landing = () => {
    const user = useAuthState(auth);

    return (
        <>
            <Box
                display={'block'}
                borderWidth={'1px'}
                borderRadius={'lg'}
                w={'80vw'}
                h={'80vh'}
                alignContent={'center'}
            >
                <VStack spacing={'3vh'} centerContent>
                    <Image src={logo} h={'15vh'} />
                    <VStack spacing={'2vh'}>
                        <Heading as='h1' size='2xl'>
                            a platform for note-sharing
                        </Heading>
                        <Text as={'i'} fontSize='4xl'>
                            make them or take them, learn your way
                        </Text>
                    </VStack>
                    <>
                        {!user}
                        <SignInButton />
                    </>
                </VStack>
            </Box>
        </>
    )
}

export default LandingPage;