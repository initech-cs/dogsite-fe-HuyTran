import React, {useEffect, useState} from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  const dispatch = useDispatch();
  const show = useSelector((state) => state.showSignup);
  const handleClose = () => {
    dispatch({ type: "SIGNUP", payload: { showSignup: false } });
  };

  //sign up button
  const createNewUser = async() => {
  await axios.post(`${process.env.REACT_APP_API_URL}/users`,
      {email: email, name: name, password: password, phone: phone}, 
    )
    dispatch({ type: "SIGNUP", payload: { showSignup: false } });
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <form class="text-center border border-light p-5" action="#!">
          <p class="h4 mb-4">Sign up</p>

          <input
            type="text"
            class="form-control mb-4"
            placeholder="Name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control"
            placeholder="Password"
            // aria-describedby="defaultRegisterFormPasswordHelpBlock"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          <small
            id="defaultRegisterFormPasswordHelpBlock"
            class="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>

          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}

          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            class="form-text text-muted mb-4"
          >
            Optional - for two step authentication
          </small>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
          </div>

          <button class="btn btn-warning my-4 btn-block" onClick={createNewUser}>
            Sign in
          </button>

          <p>or sign up with:</p>

          <a href="#" class="mx-2" role="button">
            <i class="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-github light-blue-text"></i>
          </a>

          {/* <hr> */}

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">
              terms of service
            </a>
          </p>
          {/* </hr> */}
        </form>
      </Modal>
    </div>
  );
}
