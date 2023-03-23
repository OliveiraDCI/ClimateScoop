import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

function ContextProvider({ children }) {
  const [externalData, setExternalData] = useState(null);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_180089098407af05742bc64588e14bd077ab6&category=environment&language=en"
          // "https://global-warming.org/api/ocean-warming-api"
        );

        console.log("External data ", response.data.results);

        // console.log("External data ", response.data);

        setExternalData(response.data.results);
        // setExternalData(response.data);
      } catch (err) {
        console.log("Error on setExternalData useEffect: ", err.message);
      }
    })();
  }, []);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const response = await axios.post("/api/articles/list", user);

          if (response.data) setUserData(response.data.articles);
          console.log(
            "ContextProvider /api/articles/list: ",
            response.data.articles
          );
        } catch (err) {
          console.log("Error on setUserData: ", err.message);
        }
      })();
    }
  }, [user, update]);

  if (!externalData) return <div>Loading...</div>;

  return (
    <Context.Provider
      value={{ setUser, user, userData, setUserData, setUpdate, externalData }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
