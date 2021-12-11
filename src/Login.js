import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const registerHandler = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      });
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-4fbba.appspot.com/o/LinkedIn_2003.svg?alt=media&token=20d77d0a-db99-44d7-b55b-43732071cba0"
        alt="Linkedin main logo"
      />
      <form>
        <input
          placeholder="Full name (required for register)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerHandler}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
