import React, { useState, useEffect, useContext, createContext } from 'react';
import DataContext from './DataContext';

export const useGetInbox = () => {
  const context = useContext(DataContext);
  const { chat, error } = context;
  return  { chat, error }
}

const GetInbox = ({children}) => {
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/herulhidayat/todos-db/message');
        const json = await response.json();
        setChat(json);
      } catch (err) {
        setError(err);
      }
    }

    if (!chat) {
      fetchData();
    }
  }, [chat]);
  console.log("aaaa",chat)

  return (
    <DataContext.Provider value={{ chat, error }}>
      {children}
    </DataContext.Provider>
  );
}

export default GetInbox;