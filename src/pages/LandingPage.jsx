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
    Show
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
            {/* desktop */}
            <Show above='800px'>
                <Box
                    display={'block'}
                    borderWidth={1}
                    borderRadius={'lg'}
                    w={'80vw'}
                    h={'80vh'}
                    alignContent={'center'}
                >
                    <VStack p={12} spacing={4}>
                        <Image src={logo} h={'15vw'}/>
                        <Heading>a platform for note-sharing</Heading>
                        <Text>make them or take them, learn at your pace</Text>
                        <>
                            {!user}
                            <SignInButton />
                        </>
                    </VStack>
                </Box>
            </Show>
            {/* mobile */}
            <Show below='800px'>
                <Box
                    display={'block'}
                    borderWidth={1}
                    borderRadius={'lg'}
                    w={'90vw'}
                >
                    <VStack p={6} spacing={2}>
                        <Image src={logo} h={'7.5vw'}/>
                        <Heading as={'h1'} size={'sm'}>a platform for note-sharing</Heading>
                        <Text as={'i'} fontSize={'sm'}>make them or take them, learn at your pace</Text>
                    </VStack>
                </Box>
            </Show>
        </>
    )
}

export default LandingPage;