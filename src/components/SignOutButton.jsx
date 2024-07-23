// auth0
import { auth } from '../firebaseConfig';

// chakra
import { MenuItem } from '@chakra-ui/react';

const SignOutButton = () => {
    return auth.currentUser && (
        <>
            <MenuItem onClick={() => auth.signOut()}>
                sign out
            </MenuItem>
        </>
    )
}

export default SignOutButton