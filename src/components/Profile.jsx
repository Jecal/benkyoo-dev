// firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

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
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleProfile = () => {
        navigate('/profile')
    }

    return (
        user && (
            <>
                <Menu>
                    <MenuButton
                        as={Avatar}
                        size='sm'
                        src={user.photoURL}
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