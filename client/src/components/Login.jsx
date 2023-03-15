const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div id="login-component">
      <p>The login page</p>
      <form onSubmit={handleSubmit}>
        <div className="field-holder">
          <label htmlFor="username">Username </label>
          <input
            className="loginField"
            type="text"
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div className="field-holder">
          <label htmlFor="password">Password </label>
          <input
            className="loginField"
            type="text"
            name="password"
            placeholder="username"
            required
          />
        </div>
        <div className="button-holder">
          <button
            // disabled={!formValues.username || !formValues.password}
            type="submit"
          >Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;