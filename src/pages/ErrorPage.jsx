// chakra
import {
    VStack,
    Heading,
    Text,
    AbsoluteCenter,
    Container,
    Link
} from '@chakra-ui/react'

import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <Container
                h={'100vh'}
                w={'100vw'}
            >
                <AbsoluteCenter>
                    <VStack>
                        <Heading>something broke</Heading>
                        <Text>{error.statusText || error.message}</Text>
                        <Link onClick={handleClick} color='purple.300'>go back to landing</Link>
                    </VStack>
                </AbsoluteCenter>
            </Container>
        </>
    )
}

export default ErrorPage;