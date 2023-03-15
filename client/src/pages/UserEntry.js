import Login from '../components/Login';
import SignUp from '../components/SignUp';

const UserEntryPage = () => {
  // Will have the signup form or login form render here. Should only be able to navigate here if user is not signed in, so design appropriately.
  return (
    <div id='login-signup-holder'>
      <p>This is where the login/signup form will render. Add some nice pix and css to make it look nice.</p>
      <Login />
      <p>Don't have an account? Create an account (button to toggle signup form)</p>
    </div>
  )
}

export default UserEntryPage;