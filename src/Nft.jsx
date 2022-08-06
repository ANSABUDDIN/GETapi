import React, { useState } from 'react'


function Nft() {
    const [nft, setnft] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://pixelmentor.herokuapp.com/wallet/signature',

        }).then((response) => {
            setnft(response)
            console.log(product);
        });

    }, [])





  return (
    <div>Nft</div>
  )
}

export default Nft