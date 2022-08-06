import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Signin from './Signin';




function App() {

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [msg, setmsg] = useState("");
  const [token, settoken] = useState("");

 
  // function Signin() {
  //   axios.post('https://pixelmentor.herokuapp.com/signup', {
  //     email: email,
  //     password: pass
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       setmsg(response.data.msg);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });


  // }
  function login() {
    axios.post('https://pixelmentor.herokuapp.com/login', {
      email: email,
      password: pass
    })
      .then(function (response) {
        console.log(response);
        setmsg(response.data.msg);
        settoken(response.data.data.token)
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="container t-5 pt-5 text-center">
        <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} name='Email' />
        <br />
        <br />
        <input type="Password" onChange={(e) => { setpass(e.target.value) }} name='pass' value={pass} />
        <br />
        <br />
        <button onClick={login} className="btn btn-danger"  >Login</button>
        <p className='mt-5 fw-bolder text-danger'>{msg}</p>
        <p className='mt-5'>{token}</p>
      </div>
      {/* <div className="container t-5 pt-5 text-center">
        <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} name='email' />
        <br />
        <br />
        <input type="Password" onChange={(e) => { setpass(e.target.value) }} name='pass' value={pass} />
        <br />
        <br />
        <button onClick={Signin} className="btn btn-danger"  >Signin</button>
        <p className='mt-5 fw-bolder text-danger'>{msg}</p>
      </div> */}



    </>
  )
}

export default App
