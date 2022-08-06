import {useEffect ,useState} from 'react'
import './App.css'
import axios from 'axios'
const Card = () => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
        
        }).then((response) => {
            setproduct(response)
            console.log(product);
        });

    }, [])
  return (
      <div className="container">
          <div className="row">
              <div className="col-4">
                  <div className="card "  >
                      <img src={product.data?.[4].image} className="card-img-top" alt="" />
                      <div className="card-body">
                          <h5 className="card-title"> {product.data?.[4].id}</h5>
                          <p className="card-text"> {product.data?.[4].title}</p>
                          <a href="#" className="btn btn-primary">Press Me </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card