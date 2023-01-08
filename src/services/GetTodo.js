import React, { useState, useEffect, useContext, createContext } from 'react';
import DataContext from './DataContext';

export const useGetTodo = () => {
    const context = useContext(DataContext);
    const { todo, error } = context;
    return  { todo, error }
}

const GetTodo = ({children}) => {
    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://my-json-server.typicode.com/herulhidayat/todos-db/todos');
          const json = await response.json();
          setTodo(json);
        } catch (err) {
          setError(err);
        }
      }
  
      if (!todo) {
        fetchData();
      }
    }, [todo]);
    // console.log("bbb",todo)
  
    return (
      <DataContext.Provider value={{ todo, error }}>
        {children}
      </DataContext.Provider>
    );
  }
  
  export default GetTodo;