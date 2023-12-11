import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setTimeout(() => {

        axios
            .get(url)
    //   .then(res => {        

    //     if (!res.ok) { // error coming back from server
    //       throw Error('could not fetch the data for that resource');
    //     } 
    //     return res.data;

    //   })
      .then(data => {
        console.log(data);
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    // }, 1000);
  }, [url])

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         } 
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//     }, 1000);
//   }, [url])

  return { data, isPending, error };
}

export default useFetch;