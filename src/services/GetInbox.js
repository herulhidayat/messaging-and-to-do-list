import React, { useState, useEffect, useContext, createContext } from 'react';
import DataContext from './DataContext';

export const useGetInbox = () => {
    const context = useContext(DataContext);
    const { data, data2, comments, error } = context;
    return  { data, data2, comments, error }
}

const GetInbox = ({children}) => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [comments, setComments] = useState(null);
  
    useEffect(() => {
      async function fetchData1() {
        try {
          const response1 = await fetch('https://jsonplaceholder.typicode.com/users/');
          const json1 = await response1.json();
          setData1(json1);
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

      useEffect(() => {
        async function fetchData3() {
          try {
            const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/');
            const json3 = await response3.json();
            setComments(json3);
          } catch (err) {
            setError(err);
          }
        }
    
        if (!comments) {
            fetchData3();
          }
      }, [comments]);
  
    return (
      <DataContext.Provider value={{ data, data2, comments, error }}>
        {children}
      </DataContext.Provider>
    );
  }
  
  export default GetInbox;