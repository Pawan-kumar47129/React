import {useState,useEffect} from "react";

const useCurrencyInfo=(currency)=>{
    let [data,setData]=useState({});
    console.log(currency);
    useEffect(()=>{
        let url=`https://v6.exchangerate-api.com/v6/9d39da9032d89e5616b11f50/latest/${currency}`
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        setData(result["conversion_rates"])
    });
    },[currency])//when when currency change useEffect method called and when page load
    return data;
}
export default useCurrencyInfo;