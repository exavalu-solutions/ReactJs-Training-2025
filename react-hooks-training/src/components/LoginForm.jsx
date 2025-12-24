import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [submittedUser, setSubmittedUser] = useState("");
  const { user, setUser } = useContext(UserContext);
  // Load stored values on page refresh

  console.log(user);

  useEffect(() => {
    console.log("page refresh...")
    // const updatedUserObject = {};
    setUser({ name: "User", role: "user" })
    const savedRememberMe = localStorage.getItem("rememberMe");
    const savedUser = sessionStorage.getItem("username");
    const user = JSON.parse(sessionStorage.getItem("userObject"));
    console.log("user>> ", user?.firstName);
    console.log(typeof savedRememberMe)
    if (Boolean(savedRememberMe)) {
      setRememberMe(true);
    }

    if (savedUser) {
      setSubmittedUser(savedUser);
    }
  }, []);

  // Form submission handler
  const handleSubmit = (e) => {
    console.log("submitted...")
    e.preventDefault(); // Prevent page refresh

    // Store data
    const userObject = {
      "firstName" : "Alice",
      "lastName" : "Clark"
    }
    sessionStorage.setItem("username", username);
    localStorage.setItem("rememberMe", rememberMe);
    sessionStorage.setItem("userObject", JSON.stringify(userObject));

    setSubmittedUser(username);
    setUsername("");
  };

  const handleReset=()=>{
    localStorage.removeItem("rememberMe");
    sessionStorage.removeItem("username");

    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <br></br>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => {
              console.log(e.target.checked)
              setRememberMe(e.target.checked)
            }
            }
          />
          Remember Me
        </label>
        <br></br>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleReset}>Reset</button>
      {submittedUser && (
        <p>Welcome, <strong>{submittedUser}</strong> 👋</p>
      )}
    </div>
  );
}

export default LoginForm;