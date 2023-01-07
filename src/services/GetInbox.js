import React, { useState, useEffect, useContext, createContext } from 'react';
import DataContext from './DataContext';

export const useGetInbox = () => {
    const context = useContext(DataContext);
    const { data, error } = context;
    return  { data, error }
}

const GetInbox = ({children}) => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
  
    useEffect(() => {
      async function fetchData1() {
        try {
          const response1 = await fetch('https://jsonplaceholder.typicode.com/users/');
          const json1 = await response1.json();
          setData1(json1);
          console.log("data1",json1)
        } catch (err) {
          setError(err);
        }
      }
  
      if (!data1) {
        fetchData1();
      }
    }, [data1]);
    useEffect(() => {
        async function fetchData2() {
          try {
            const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const json2 = await response2.json();
            setData2(json2);
            console.log("data2",json2)
          } catch (err) {
            setError(err);
          }
        }
    
        if (!data2) {
            fetchData2();
          }
    }, [data2]);
    useEffect(() => {
        data1?.forEach(item => {
          setData(prevData => ({ ...prevData, [item.id]: item }));
        });
    }, [data1]);
    useEffect(() => {
        data2?.forEach(item => {
          const id = item.userId;
          const obj = data[id];
          if (obj) {
            setData(prevData => ({
              ...prevData,
              [id]: {
                ...obj,
                ...item,
              },
            }));
          }
        });
      }, [data2]);
    // console.log("aaaa",data)
  
    return (
      <DataContext.Provider value={{ data, error }}>
        {children}
      </DataContext.Provider>
    );
  }
  
  export default GetInbox;