import { useState , useEffect } from "react";

function useCurrencyInfo (currency) {

    useEffect(() => {

        const [data , setData] = useState({});

        let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_uCVALhiPHt9OKc9p3rpzuBwrOMVoB37rBvxBDh8d&${currency}`;
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));

    } , [currency])

    return data;

}

export default useCurrencyInfo;