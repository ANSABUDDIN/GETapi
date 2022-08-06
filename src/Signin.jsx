
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


const Signin = () => {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")


    function Singup() {
        axios.post('https://pixelmentor.herokuapp.com/signup', {
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} name='Email' />
            <br />
            <br />
            <input type="Password" onChange={(e) => { setpass(e.target.value) }} name='pass' value={pass} />
            <br />
            <br />
            <button onClick={Singup} >Singup</button>
        </div>

  )
}

export default Signin