import "./SignIn";
import React, { useState, useEffect } from "react";
import "./SignIn.scss";
import { FormInput } from "../../shared/Form/Inputs/FormInput/FormInput";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../store/actions/authActions";
import { ROUTES } from "../../../lib/routes";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth: any = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth.user) {
      history.push("/upload-pdf");
    }
  }, [auth]);

  const handleSignIn = (e: any) => {
    e.preventDefault();
    dispatch(signIn(email, password));

    // history.push("/upload-pdf");
    console.log("Form submited", {
      email,
      password,
    });
  };

  return (
    <>
      <div className="sign-in-page" >
        <form onSubmit={handleSignIn}>
          <div className="sign-in-content">
            <div className="sign-in-heading">SIGN IN</div>
            <FormInput
              name="email"
              placeholder="Email or phone"
              value={email}
              onChange={setEmail}
            />
            <FormInput
              name="email"
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
              <button className="sign-in-btn" type="submit">SIGN IN</button>
            
            <Link className="sign-up-link" to={ROUTES.SIGN_UP}>
                <span>Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
