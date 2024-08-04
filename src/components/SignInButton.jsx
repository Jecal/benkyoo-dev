// firebase
import { auth, provider, signInWithPopup } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// chakra
import { Button } from '@chakra-ui/react';

const SignInButton = () => {
    const [user] = useAuthState(auth);

    const handleSignIn = () => {
        signInWithPopup(auth, provider).catch(error => {
            console.error('error during sign in: ', error);
        });
    };

    return (
        !user && (
            <>
                <Button colorScheme='purple' onClick={handleSignIn} px={2}>
                    sign in
                </Button>
            </>
        )
    );
};

export default SignInButton