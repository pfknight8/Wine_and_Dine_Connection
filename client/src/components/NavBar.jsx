import { Link } from "react-router-dom"

const NavBar = () => {
  //The navigation bar is created here.
  return (
    <header>
      <nav id="navBarLinks">
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  )
}

export default NavBar