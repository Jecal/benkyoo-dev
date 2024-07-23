import Navbar from '../components/Navbar';

// chakra
import {
    Grid, GridItem,
    Heading, Text,
    Image,
    Box,
    Container,
    Card,
    CardHeader,
    Flex,
    VStack, Stack
} from '@chakra-ui/react'

// firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

function ProfilePage() {
    return (
        <>
            <VStack spacing={'3vh'}>
                <Navbar />
                <PageContent />
            </VStack>
        </>
    )
}

const PageContent = () => {
    return (
        <>
            <Container mt={'2vh'} centerContent>
                <Grid
                templateAreas={`"pf pro pro pro pro"
                                "sb pro pro pro pro"
                                "sb pro pro pro pro"
                                "sb pro pro pro pro"
                                "sb pro pro pro pro"`}
                gridTemplateRows={'14vh 14vh 14vh 14vh 14vh'}
                gridTemplateColumns={'14vw 14vw 14vw 14vw 14vw'}
                gap={'2vh'}
                >
                    <ProfilePopup />
                    <Sidebar />
                    <MainProfile />
                </Grid>
            </Container>
        </>
    )
}

const ProfilePopup = () => {
    const [user] = useAuthState(auth);

    return (
        user && (
            <>
                <GridItem area={'pf'}>
                    <Box
                        borderWidth={'1px'}
                        borderRadius={'lg'}
                        h={'14vh'}
                        p={4}
                        alignContent={'center'}
                    >
                    <Flex direction={'row'} justify={'space-between'}>
                        <Image src={user.photoURL} borderRadius='full' h={'8vh'} />
                        <Heading size={'xl'}>{user.displayName}</Heading>
                    </Flex>
                    </Box>
                </GridItem>
            </>
        )
    )
}

const Sidebar = () => {
    return (
        <>
            <GridItem area={'sb'}>
                <Box
                    borderWidth={'1px'}
                    borderRadius={'lg'}
                    h={'62vh'}
                    p={4}
                >
                    <Heading></Heading>
                </Box>
            </GridItem>
        </>
    )
}

const MainProfile = () => {
    return (
        <>
            <GridItem area={'pro'}>
                <Box
                    borderWidth={'1px'}
                    borderRadius={'lg'}
                    h={'78vh'}
                    p={4}
                >
                    <Heading></Heading>
                </Box>
            </GridItem>
        </>
    )
}

export default ProfilePage;