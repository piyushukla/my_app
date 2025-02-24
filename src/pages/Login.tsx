import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";


function App() {
  const { email, password, setAuth } = useAuthStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      return setAuth(e.target.value, password);
    }
    setAuth(email, e.target.value);
  };

  return (
    <div>
      <div className="container_div">
        <h4>Login Page</h4>
        <input
          className="input_container"
          onChange={handleChange}
          name="email"
          placeholder="Enter Email"
        />
        <input
          className="input_container"
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <button className="btn">Login User</button>
        <Link to="/signup">Go to Signup</Link>
      </div>
    </div>
  );
}

export default App;
