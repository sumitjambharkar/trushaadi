import React,{useState} from 'react';
import styled from 'styled-components';
import Banner from '../image/banner.jpeg';
import Logoo from '../image/logo192.png';
import {Link} from "react-router-dom";
import {auth} from './firebse';

const Header = () => {
    const [form, setForm] = useState()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') 

    const handalSubmit =(e)=>{
        e.preventDefault()
        console.log(email,password);
        setForm(false)


    }
  return (
    <>
    <Head>
        <Navbar>
            <Logo>
                <h1>TruShaadi.com</h1>
            </Logo>
            <Login>
                <h1><a onClick={() => setForm(true)}>Login</a></h1>
            </Login>
        </Navbar>
        <Form>
        {form ?
                    <FormCard>
                        <FormC>

                            <form onSubmit={handalSubmit}>
                            <MainDiv>
                                <LogoImage >
                                    <img style={{ width: "40px" }} src={Logoo} />
                                </LogoImage>
                                <h5 style={{marginBottom:"24px"}}>Welcome back ! Please Login</h5>
                                <Label>
                                    <label>Email ID</label>
                                </Label>
                                <Input>
                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" />
                                </Input>
                                <Label>
                                    <label>Password</label>
                                </Label>
                                <div></div>
                                <Input>
                                    <input onChange={(e)=>setPassword(e.target.value)} type="password" />
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
                                    <button type='submit' className='button'>
                                    Login
                                    </button>
                                </Div>
                                <Div>
                                    <button className='button'>
                                        <Link to="/signup">
                                        Register
                                        </Link>
                                    </button>
                                </Div>
                                <Forgot>
                                    <Div>
                                        <p>New Shaadi ?</p>
                                    </Div>
                                    <Div>
                                       <Link to="/signup">
                                       <p>Free to SignUp</p>
                                       </Link>
                                    </Div>
                                </Forgot>
                            </MainDiv>
                            </form>

                        </FormC>
                    </FormCard>
                    : ""
                }

        </Form>
        <Heading>
            <h1>Trusted Matrimony & Matchmaking Service</h1>
        </Heading>
        <Nav>
            <Look>
                <h1>I'm looking for a</h1>
                {/* <input type="text" /> */}
                <select>
                    <option>Women</option>
                    <option>men</option>
                </select>
            </Look>
            <Age>
                <h1>Aged</h1>
                <select>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                </select>to
                <select>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                </select>
            </Age>
            <Religion>
                <h1>of religion</h1>
                <select>
                    <option>Hindu</option>
                    <option>Muslim</option>
                </select>
            </Religion>
            <Mother>
                <h1>and mother tongue</h1>
                <select>
                    <option>Marathi</option>
                    <option>Hindi</option>
                </select>
            </Mother>
            <Let>
                <h1>.</h1>
                <button>Lest Go</button>
            </Let>
        </Nav>
    </Head>
    </>
  )
}
const Head = styled.div`
   background-image:url(${Banner});
   height:630px;
   background-size:100% 650px;
   position:relative;
   align-items:center;
`
const Navbar = styled.div`
   display:flex;
   justify-content:space-around;
   position:relative;
   padding-top:40px;
`
const Logo = styled.div`
   color:black;
   margin-right:20px;`
const Login = styled.div`
   color:black;
   >h1 >a {
       font-size:24px;
       text-decoration: underline;
   }`
const Heading = styled.div`
   text-align:center;
   margin-top:260px;
   position: relative;
   color:black;;
`
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
const Nav = styled.div`
   position:relative;
   display:flex;
   justify-content:center;
   justify-items:center;
   flex-wrap:wrap;
   background-color:#000000;
   padding:4px;
   padding-bottom:30px;
   margin:58px 90px 18px 100px;
   opacity:0.9;
`
const Look = styled.div`
   margin:4px;
h1{
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color:#FFF; 
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
}
select{
    width:200px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease;
}`
const Age = styled.div`
   margin:4px;
h1{
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
}
select{
    width:120px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease;
}`
const Religion = styled.div`
   margin:4px;
h1{
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
}
select{
    width:200px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease;
}`
const Mother = styled.div`
   margin:4px;
h1{
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
}
select{
    width:260px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease;
}`
const Let = styled.div`
   margin:4px;
>h1{
    font-size: 1em;
    visibility: visible;
    font-weight: 400;
    line-height: 1em;
    color:black;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
}
button{
    width:150px;
    background-color:aqua;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease;
}`
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

export default Header