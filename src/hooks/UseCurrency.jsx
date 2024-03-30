import React, { useEffect, useState } from 'react'

const UseCurrency = (currency) => {
    const [data, setData] = useState({})
    useEffect(() => {
    let currInfo=    async()=>{
        console.log(`https://v6.exchangerate-api.com/v6/1ccd8083fc82020b1b3cb251/latest/${currency}`)
      let res=  await fetch(`https://v6.exchangerate-api.com/v6/1ccd8083fc82020b1b3cb251/latest/${currency}`)
      
      let t= await res.json();
      setData(t.conversion_rates)
      console.log(t);

        }
        currInfo();
        
   
    }, [currency])
   
    return data
}



export default UseCurrency;
