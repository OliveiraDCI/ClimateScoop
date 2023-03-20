import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

function ContextProvider({ children }) {
  const [externalData, setExternalData] = useState(null);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_180089098407af05742bc64588e14bd077ab6&category=environment&language=en"
          // "https://global-warming.org/api/ocean-warming-api"
        );

        // console.log("External data ", response.data.results);

        console.log("External data ", response.data.results);

        // setExternalData(response.data.results);
        setExternalData(response.data.results);
      } catch (err) {
        console.log("Error on setExternalData useEffect: ", err.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const response = await axios.get("/api/articles/list", user);

          console.log("User data ", response.data.user);

          setUserData(response?.data.user);
        } catch (err) {
          console.log("Error on setUserData useEffect: ", err.message);
        }
      })();
    }
  }, [user]);

  if (!externalData) return <div>Loading...</div>;

  return (
    <Context.Provider value={{ user, setUser, userData, externalData }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
