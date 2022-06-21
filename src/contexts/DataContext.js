import { createContext, useState, useEffect } from "react";
import { getMockedData } from '../helpers';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://dog.ceo/api/breeds/image/random/50')
      .then(response => response.json())
      .then(({ message }) => setData(getMockedData(message)))
      .catch(error => console.log("An error occured"));
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
