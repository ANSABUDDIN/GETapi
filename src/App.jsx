import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  const [data, setdata] = useState({})

  useEffect(() => {
    axios({
       method: 'get',
      url: 'https://fakestoreapi.com/products/1',
      // data: {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // }
    }).then((response ) => {
      setdata(response)
      console.log(data);
    });
  
    
  }, [])
  

  return (
    <>
      <div className='text-center'>
        <h1>{data.data?.category}</h1>
        <p>
          {data.data?.description}
        </p>
        <div className="card w-25" style={{width:"13rem"}} >
          <img src={data.data?.image} className="card-img-top" alt="" />
            <div className="card-body">
            <h5 className="card-title"> {data.data?.id}</h5>
            <p className="card-text"> {data.data?.price}</p>
              <a href="#" className="btn btn-primary">Press Me </a>
            </div>
        </div>
      </div>
      <div>
       
      </div>
      
     
    </>
  )
}

export default App
