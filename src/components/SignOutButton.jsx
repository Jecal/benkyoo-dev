// auth0
import { useAuth0 } from '@auth0/auth0-react';

// chakra
import { MenuItem } from '@chakra-ui/react';

const SignOutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <MenuItem onClick={() => logout()}>
                    sign out
                </MenuItem>
            </>
        )
    )
}

export default SignOutButton