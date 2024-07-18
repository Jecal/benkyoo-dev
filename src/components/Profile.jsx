// auth0
import { useAuth0 } from '@auth0/auth0-react';

// chakra
import { 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    MenuDivider
} from '@chakra-ui/react';

// router
import { useNavigate } from 'react-router-dom';

// signout button
import SignOutButton from './SignOutButton';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/profile')
    }

    return (
        isAuthenticated && (
            <>
                <Menu>
                    <MenuButton
                        as={Avatar}
                        size='sm'
                        src={user.picture}
                    />
                    <MenuList>
                        <MenuItem onClick={handleProfile}>
                            profile
                        </MenuItem>
                        <MenuDivider />
                        <SignOutButton />
                    </MenuList>
                </Menu>
            </>
        )
    )
}

export default Profile