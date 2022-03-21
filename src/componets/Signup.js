import React from 'react';
import styled from 'styled-components';
import Logoo from '../image/logo192.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Form>
                    <FormCard>
                        <FormC>

                            <MainDiv>
                                <LogoImage >
                                    <img style={{ width: "40px" }} src={Logoo} />
                                </LogoImage>
                                <h5 style={{marginBottom:"24px"}}>Welcome back ! Please Login</h5>
                                <Label>
                                    <label>Full Name</label>
                                </Label>
                                <Input>
                                    <input type="name" />
                                </Input>
                                <Label>
                                    <label>Mobile No.</label>
                                </Label>
                                <Input>
                                    <input type="number" />
                                </Input>
                                <Label>
                                    <label>Date of Birth</label>
                                </Label>
                                <Input>
                                    <input type="birth" />
                                </Input>
                                <Label>
                                    <label>Email ID</label>
                                </Label>
                                <Input>
                                    <input type="email" />
                                </Input>
                                <Label>
                                    <label>Password</label>
                                </Label>
                                <div></div>
                                <Input>
                                    <input type="password" />
                                </Input>
                                <Forgot>
                                    <Div>
                                        <input className='checkbox' type="checkbox"/>
                                        <span>Stay Login</span>
                                    </Div>
                                    <Div>
                                        <span>Forgot Password ?</span>
                                    </Div>
                                </Forgot>
                                <Div>
                                    <button className='button'>Register</button>
                                </Div>
                                <Div>
                                    <button className='button'>
                                        <Link to="/">
                                        Login
                                        </Link>
                                    </button>
                                </Div>
                            
                            </MainDiv>

                        </FormC>
                    </FormCard>

        </Form>
    </>
  )
}

export default Signup;

const Form = styled.div``
const FormCard = styled.div`
    position:absolute;
    display: flex;
    justify-content: center;
    justify-items: center;
    z-index: 1; /* Sit on top */
    left:500px;
    top:90px;
`
const FormC = styled.div`
    display: flex;
    justify-content: center;
    width:360px;
    height:100%;
    background-color: white;
    padding:2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`
const LogoImage = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    margin: 2rem;`
const MainDiv = styled.div`
    align-items: center;`

const Label = styled.div`
   >label{
    font-size: 16px;
    font-weight: 400;
    margin: 4px;
   }`
const Input = styled.div`
   >input {
    width: 270px;
    height: 40px;
}`
const Forgot = styled.div`
  display: flex;
    justify-content: space-between;
    margin:21px;
`
const Div = styled.div`
  .checkbox{
    margin-right: 9px;


}
.forgot{
    display: flex;
    justify-content: space-between;
    margin: 16px;
}
.button{
    width: 270px;
    height: 40px;
    margin-top: 8px;
    background-color: aqua;
    border: 1px solid aqua;
    border-radius: 4px;
}`