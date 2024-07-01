import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <button>Home</button>
            </Link>

            <Link to='/todos'>
                <button>To-Do List</button>
            </Link>
        </nav>
    );
}

export default Navbar;