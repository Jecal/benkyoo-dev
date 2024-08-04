import Navbar from "../components/Navbar";

import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Hide,
    Show,
    Text,
    VStack,
    IconButton,
    Link,
    Flex, Spacer,
} from '@chakra-ui/react';

import { FaGithubAlt, FaXTwitter, FaInstagram } from 'react-icons/fa6';

function AboutPage() {
    return (
        <>
            <VStack spacing={'3vh'}>
                <Navbar />
                <GridLayout />
            </VStack>
        </>
    )
}

const About = () => {
    return (
        <>
            <Show above={'lg'}>
                <Box
                    borderWidth={1}
                    borderRadius={'lg'}
                    h={'80vh'}
                    w={'80vws'}
                    p={4}
                    justifyContent={'center'}
                    overflowY={'auto'}
                >

                </Box>
            </Show>
            <Hide above={'lg'}>
                <Box
                
                >

                </Box>
            </Hide>
        </>
    )
}

const GridLayout = () => {
    return (
        <>
            <Container centerContent>
                <Show above={'lg'}>
                    <Grid
                        templateAreas={`"mc mc mc mc so"
                                        "mc mc mc mc so"
                                        "mc mc mc mc so"`}
                        gridTemplateRows={'25vh 25vh 25vh'}
                        gridTemplateColumns={'15vw 15vw 15vw 15vw 15vw'}
                        gap={'2vh'}
                    >
                        <MainContent />
                        <Socials />
                    </Grid>
                </Show>
                <Hide above={'lg'}>
                    <VStack spacing={4}>
                        <Socials />
                        <MainContent />
                    </VStack>
                </Hide>
            </Container>
        </>
    )
}

const MainContent = () => {
    const formRedirect = () => {
        window.location = 'https://app.youform.com/forms/ddahkllh';
    }

    const figmaRedirect = () => {
        window.location = 'https://www.figma.com/design/oKcY76TYKhtG9YIWzquJkS/benkyoo-beta?node-id=0-1&t=lAQ7fqPucrytcSB0-1';
    }

    return (
        <>
            <Show above={'lg'}>
                <GridItem area={'mc'}>
                    <Box
                        borderWidth={1}
                        borderRadius={'lg'}
                        h={'100%'}
                        p={4}
                        justifyContent={'center'}
                        overflowY={'auto'}
                    >
                        <Box
                            borderWidth={1}
                            borderRadius={'lg'}
                            p={4}
                            my={2}
                        >
                            <Heading>Waitlist</Heading>
                            <Text mb={2}>click this button to receieve email updates abt benkyoo</Text>
                            <Button mt={2} onClick={formRedirect}>Form</Button>
                        </Box>
                        <Box
                            borderWidth={1}
                            borderRadius={'lg'}
                            p={4}
                            my={2}
                        >
                            <Heading>Designs</Heading>
                            <Text mb={2}>click this button to view the figma file i'm using to design the app</Text>
                            <Button mt={2} onClick={figmaRedirect}>Figma</Button>
                        </Box>
                    </Box>
                </GridItem>
            </Show>
            <Hide above={'lg'}>
                <VStack spacing={'2vh'}>
                    <Box w={'90vw'}>
                        <Box
                            borderWidth={1}
                            borderRadius={'lg'}
                            p={4}
                            my={2}
                        >
                            <Heading>Waitlist</Heading>
                            <Text mb={2}>click this button to receieve email updates abt benkyoo</Text>
                            <Button mt={2} onClick={formRedirect}>Form</Button>
                        </Box>
                        <Box
                            borderWidth={1}
                            borderRadius={'lg'}
                            p={4}
                            my={2}
                        >
                            <Heading>Designs</Heading>
                            <Text mb={2}>click this button to view the figma file i'm using to design the app</Text>
                            <Button mt={2} onClick={figmaRedirect}>Figma</Button>
                        </Box>
                    </Box>
                </VStack>
            </Hide>
        </>
    )
}

const Socials = () => {
    const accounts = [
        {
            url: 'https://github.com/Jecal',
            label: 'git acc',
            type: 'gray',
            icon: <FaGithubAlt />
        },
        {
            url: 'https://x.com/jecalll',
            label: 'twitter acc',
            type: 'gray',
            icon: <FaXTwitter />
        },
        {
            url: 'https://www.instagram.com/jecalll/',
            label: 'insta acc',
            type: 'gray',
            icon: <FaInstagram />
        }
    ]

    const instaProperty = {
        profileURL: 'https://www.instagram.com/jecalll/',
        profileUser: '@jecalll'
    }

    const instaClick = () => {
        window.location = 'https://www.instagram.com/jecalll/';
    }

    return (
        <>
            <Show above={'lg'}>
                <GridItem area={'so'}>
                    <Box
                        borderWidth={1}
                        borderRadius={'lg'}
                        h={'100%'}
                        p={4}
                        justifyContent={'center'}
                        overflowY={'auto'}  
                    >
                        <Box w={'100%'} borderRadius={'lg'} borderWidth={1} p={3} justifyContent={'center'}>
                            <VStack>
                                <Button onClick={instaClick}>
                                    my insta
                                </Button>
                            </VStack>
                        </Box>
                    </Box>
                </GridItem>
            </Show>
            <Hide above={'lg'}>
                <Box
                    w={'90vw'}
                    borderWidth={1}
                    borderRadius={'lg'}
                >
                    <Flex justifyContent={'space-around'} p={4} direction={'row'}>
                    {accounts.map((sc, index) => (
                        <IconButton 
                            key={index}
                            as={Link}
                            isExternal
                            href={sc.url}
                            aria-label={sc.label}
                            colorScheme={sc.type}
                            icon={sc.icon}
                            rounded='md'
                            size='lg'
                        />
                    ))}
                    </Flex>
                </Box>
            </Hide>
        </>
    )
}

export default AboutPage;