import { useContext, useEffect} from 'react';
import { Context } from '../Context';
import { Redirect } from 'react-router-dom';

const UserSignOut = () => {
    const { signOut } = useContext(Context);

    useEffect(() => signOut());

    return (
        <Redirect to = "/" />
    )

}
 
export default UserSignOut;