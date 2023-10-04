import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to='/'> <img src="/logo.png" className='logoImg' /> </Link>
            <Link to='/movies/popular'> <span>Popular</span></Link>
            <Link to='/movies/top_rated'> <span>Top Rated</span> </Link>
            <Link to='/movies/upcoming'> <span>Upcoming</span></Link>
        </div>
        {/* <div className="headerRight"></div> */}
    </div>
  )
}

export default Header