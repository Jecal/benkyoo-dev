// auth0
import { useAuth0 } from '@auth0/auth0-react';

// chakra
import { Button } from '@chakra-ui/react';

const SignInButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <Button colorScheme='purple' onClick={() => loginWithRedirect()}>
                    sign in
                </Button>
            </>
        )
    )
}

export default SignInButton