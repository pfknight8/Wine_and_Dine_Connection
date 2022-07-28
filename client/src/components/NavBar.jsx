import { Link } from "react-router-dom"

const NavBar = () => {
  //The navigation bar is created here.
  return (
    <header>
      <nav id="navBarLinks">
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/wines'>Wine List</Link>
        <Link to='/meals'>Meal List</Link>
      </nav>
    </header>
  )
}

export default NavBar