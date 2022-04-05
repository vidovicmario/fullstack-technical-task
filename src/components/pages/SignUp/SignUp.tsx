import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormInput } from "../../shared/Form/Inputs/FormInput/FormInput";
import { FormCheckbox } from "../../shared/Form/Inputs/FormCheckbox/FormCheckbox";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/actions/authActions";
import { useSelector } from "react-redux";
import "./SignUp.scss";
import { ROUTES } from "../../../lib/routes";

const SignUp = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  const auth: any = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth.user) {
      history.push("/upload-pdf");
    }
  }, [auth]);

  const handleSignUp = (e: any) => {
    e.preventDefault();

    if (password !== confirm) {
      console.error("Passwords have to match!");
      return;
    }
    if (!agree) {
      console.error("You have to accept terms to continue!");
      return;
    }
    dispatch(signUp(name, surname, email, password));

    console.log("Form submited: ", {
      name,
      surname,
      email,
      password,
      confirm,
    });
    // send data to server
    // apiService.signUp({
    //     name,
    //     surname,
    //     email,
    //     password,
    //     confirm
    // })
  };

  return (
    <>
      <div className="sign-up-page">
        <form onSubmit={handleSignUp}>
          <div className="sign-up-content">
            <div className="sign-up-heading">SIGN UP</div>
            <FormInput
              name="name"
              placeholder="Name"
              value={name}
              onChange={setName}
            />
            <FormInput
              name="surname"
              placeholder="Surname"
              value={surname}
              onChange={setSurname}
            />
            <FormInput
              name="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
            <FormInput
              name="confirm"
              type="password"
              placeholder="Confirm"
              value={confirm}
              onChange={setConfirm}
            />
              <FormCheckbox
                label={
                  <span className="i-agree">
                    I agree to the <a href="./terms">Terms of Service</a> and{" "}
                    <a href="./privacy">Privacy Policy.</a>
                  </span>
                }
                value={agree}
                onChange={setAgree}
              />
            <button className="sign-up-btn" type="submit">SIGN UP</button>

              Do you have an account?
              <Link className="sign-in-link" to={ROUTES.SIGN_IN}>
                Sign In
              </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
