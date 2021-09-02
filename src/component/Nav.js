import {Link} from 'react-router-dom'
const Home = () => {
    return(
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

        </nav>
    )
}
export default  Home