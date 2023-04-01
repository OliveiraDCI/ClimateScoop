import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./articles.scss";
import { Context } from "../../context/ContextProvider";
import moment from "moment";
import Fuse from "fuse.js";
import SearchBox from "./Searchbox";

function Articles() {
  const { externalData, userData, user } = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(user));
  const [allData, setAllData] = useState(externalData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoggedIn(Boolean(user));
  }, [user]);

  useEffect(() => {
    setAllData([...externalData, ...(Array.isArray(userData) ? userData : [])]);
  }, [externalData, userData, user]);

  useEffect(() => {
    const fuseOptions = {
      includeScore: true,
      keys: [
        { name: "title", weight: 0.6 },
        { name: "article", weight: 0.4 },
        { name: "content", weight: 0.4 },
        { name: "description", weight: 0.5 },
        { name: "imgDescription", weight: 0.2 },
      ],
    };

    const fuse = new Fuse(allData, fuseOptions);
    const results = fuse.search(searchTerm);

    setSearchResults(results.map((result) => result.item));
  }, [allData, searchTerm]);

  allData.sort((a, b) => {
    const dateA = moment(a.pubDate || a.createdAt);
    const dateB = moment(b.pubDate || b.createdAt);
    return dateB.diff(dateA);
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="article-section">
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      {searchTerm.length > 0
        ? searchResults.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={
                  article.image_url
                    ? article.image_url
                    : article.img ||
                      `https://source.unsplash.com/random/200x200?sig=${index}`
                }
                alt={article.title}
              />
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className="article-links">
                  <Link to={`/article/${article.title}`}>read more</Link>
                </div>
              </div>
            </div>
          ))
        : isLoggedIn
        ? allData.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={
                  article.image_url
                    ? article.image_url
                    : article.img ||
                      `https://source.unsplash.com/random/200x200?sig=${index}`
                }
                alt={article.title}
              />
              <div className="article-content">
                {article.title && <h2>{article.title}</h2>}
                {article.description && <p>{article.description}</p>}
                <div className="article-links">
                  {article.title ? (
                    <Link to={`/article/${article.title}`}>read more</Link>
                  ) : (
                    <p>Article not available</p>
                  )}
                </div>
              </div>
            </div>
          ))
        : externalData.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={
                  article.image_url
                    ? article.image_url
                    : article.img ||
                      `https://source.unsplash.com/random/200x200?sig=${index}`
                }
                alt={article.title}
              />
              <div className="article-content">
                {article.title && <h2>{article.title}</h2>}
                {article.description && <p>{article.description}</p>}
                <div className="article-links">
                  {article.title ? (
                    <Link to={`/article/${article.title}`}>read more</Link>
                  ) : (
                    <p>Article not available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
export default Articles;
