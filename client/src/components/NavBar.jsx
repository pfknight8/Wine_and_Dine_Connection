import { Link } from "react-router-dom"

const NavBar = () => {
  //The navigation bar is created here.
  return (
    <header>
      <nav>
        <Link to='/' >Home</Link>
      </nav>
    </header>
  )
}

export default NavBar