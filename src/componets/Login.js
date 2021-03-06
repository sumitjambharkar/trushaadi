import React, { useState } from "react";
import Logoo from "../image/logo192.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { auth } from "./firebse";
import Theme from "../image/theme.png";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handalSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      toast.success("Login Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      history.push("/");
    } catch (err) {
      toast.error("Login Failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <>
      <LoginContainer>
        <Form>
          <FormCard>
            <FormC>
              <form onSubmit={handalSubmit}>
                <MainDiv>
                  <div style={{ marginLeft: "256px" }}>
                    <Link to="/">X</Link>
                  </div>
                  <LogoImage>
                    <img style={{ width: "40px" }} src={Logoo} />
                  </LogoImage>
                  <h5 style={{ marginBottom: "24px" }}>
                    Welcome back ! Please Login
                  </h5>
                  <Label>
                    <label>Email ID</label>
                  </Label>
                  <Input>
                    <input
                      required
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </Input>
                  <Label>
                    <label>Password</label>
                  </Label>
                  <div></div>
                  <Input>
                    <input
                      required
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </Input>
                  <Forgot>
                    <Div>
                      <input className="checkbox" type="checkbox" />
                      <span>Stay Login</span>
                    </Div>
                    <Div>
                      <span>Forgot Password ?</span>
                    </Div>
                  </Forgot>
                  <Div>
                    <button className="button">
                      <Link to="/profile">Login</Link>
                    </button>
                  </Div>
                  <Div>
                    <button className="button">
                      <Link to="/signup">Register</Link>
                    </button>
                  </Div>
                  <Forgot>
                    <Div>
                      <p>New Shaadi ?</p>
                    </Div>
                    <Div>
                      <p>
                        <Link to="/signup">Free to Signup</Link>
                      </p>
                    </Div>
                  </Forgot>
                </MainDiv>
              </form>
            </FormC>
          </FormCard>
        </Form>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};
export default Login;

const LoginContainer = styled.div`
  background-image: url(${Theme});
  height: 630px;
  background-size: 100% 650px;
  align-items: center;
`;

const Form = styled.div`
  z-index: 1;
`;
const FormCard = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  justify-items: center;
  /* margin-left:38%; */
`;
const FormC = styled.div`
  margin-top: 44px;
  margin-bottom: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 360px;
  height: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 2rem;
`;
const MainDiv = styled.div`
  align-items: center;
  div > a {
    text-decoration: none;
    color: black;
  }
`;

const Label = styled.div`
  > label {
    font-size: 16px;
    font-weight: 400;
    margin: 4px;
  }
`;
const Input = styled.div`
  > input {
    width: 270px;
    height: 40px;
  }
`;
const Forgot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 21px;
`;
const Div = styled.div`
  > p > a {
    text-decoration: none;
    color: black;
  }
  .checkbox {
    margin-right: 7px;
  }
  .button {
    width: 270px;
    height: 40px;
    margin-top: 8px;
    background-color: aqua;
    border: 1px solid aqua;
    border-radius: 4px;
  }
  .button > a {
    text-decoration: none;
    color: black;
  }
`;
