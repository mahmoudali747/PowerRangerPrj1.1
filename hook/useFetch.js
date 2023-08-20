import { useState ,useEffect  } from "react";
import axios from 'axios';

const useFetch = (endpoint , query) => {
    const [data ,setData] = useState ([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);
    
    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://api-football-v1.p.rapidapi.com/${endpoint}` ,
  headers: {
    'X-RapidAPI-Key':'08a400a399mshe47e4a1878df787p120cbbjsn76d1a34fb76c',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  },
  prams: {...query},
};
const fetchData = async () =>{
    setIsLoading(true);

        try{
            const response = await axios.request
             (options);

             setData(response.data.data)
             setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('Thre is an error')
        }finally{
            setIsLoading(false);
        }

}

        useEffect (() => {
            fetchData();
        },[]);
        const refetch = () => {
            setIsLoading(true);
            fetchData();
        }
        return {data , isLoading , error , refetch};
    }   
export default useFetch;