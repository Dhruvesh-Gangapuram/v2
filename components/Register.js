import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import validation from "./validation";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setError] = useState({});
  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    setError(validation(user));

    const { name, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Credentials register");
    } else {
      //  window.alert("register succesful");
      navigate("/signin");
    }
  };
  return (
    <form
      className="container h-80.5 w-80 p-3 bg-white shadow-xl"
      method="POST"
    >
      <h1 className="text-4xl font-sans font-bold">Register</h1>
      <input
        className="input_field"
        name="name"
        id="name"
        value={user.name}
        onChange={handleInputs}
        placeholder="Enter your Name"
      />
      {errors.name && <p className="text-xs text-red">{errors.name}</p>}
      <input
        className="input_field"
        name="email"
        id="email"
        value={user.email}
        onChange={handleInputs}
        placeholder="Enter your Email"
      />
      {errors.email && <p className="text-xs text-red">{errors.email}</p>}
      <input
        type="password"
        className="input_field"
        name="password"
        id="password"
        value={user.password}
        onChange={handleInputs}
        placeholder="Enter your password"
      />
      {errors.password && <p className="text-xs text-red">{errors.password}</p>}
      <input
        type="password"
        className="input_field"
        name="cpassword"
        id="cpassword"
        value={user.cpassword}
        onChange={handleInputs}
        placeholder="Confirm your password"
      />
      {errors.cpassword && <p className="text-xs text-red">{errors.cpassword}</p>}
      <button className="block h-12 w-40 bg-darkBlue mt-4 mb-2 rounded">
        <span
          className="text-white font-medium text-2xl"
          type="submit"
          name="signup"
          id="signup"
          value="register"
          onClick={PostData}
        >
          Register
        </span>
      </button>

      <Link className="text-darkBlue" to="/">
        Already have account?
      </Link>
    </form>
  );
};

export default Register;
