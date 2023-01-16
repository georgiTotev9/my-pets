import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user, isAuthenticated } = useAuthContext();

    const guestNav = (
        <div id='guest'>
            <Link className='button' to='/login'>
                Login
            </Link>
            <Link to='/register' className='button'>
                Register
            </Link>
        </div>
    );

    const userNav = (
        <div id='user'>
            <span>Welcome, {user.email}</span>
            <Link className='button' to='/my-pets'>
                My Pets
            </Link>
            <Link className='button' to='/create'>
                Add Pet
            </Link>
            <Link className='button' to='/logout'>
                Logout
            </Link>
        </div>
    );

    return (
        <header id='site-header'>
            <nav className='navbar'>
                <section className='navbar-dashboard'>
                    <Link to='/'>Dashboard</Link>
                    {isAuthenticated ? userNav : guestNav}
                </section>
            </nav>
        </header>
    );
};

export default Header;
