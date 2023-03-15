import { Link } from "react-router-dom"

const NavBar = () => {
  // This conditional will toggle "login/signup" and "logout" based on if a user is signed in.
  let user=false // Hard coded in until prop available.
  let userToggle;
  if (user) {
    userToggle = (
      <Link to='/'>Log Out</Link>
    )
  } else {
    userToggle = (
      <Link to='/userEntry'>Login</Link>
    )
  }

  return (
    <header>
      <h1 id="title">Wine and Dine Connection</h1>
      <nav id="navBarLinks">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/wines'>Wine List</Link>
        <Link to='/meals'>Meal List</Link>
        {userToggle}
      </nav>
    </header>
  )
}

export default NavBar