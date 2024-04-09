function UserGreeting (props) {
  return ((props.isLoggedIn) ?  <h2 className="welcome-message">Welcome {props.UserName}</h2> : <h2 className="login-message">Please log in</h2>)
}

export default UserGreeting