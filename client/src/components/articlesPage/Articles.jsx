import { useContext } from "react";
import { Link } from "react-router-dom";
import "./articles.scss";
import { Context } from "../../context/ContextProvider";
import moment from "moment";

function ArticleSection() {
  const { externalData, userData, user } = useContext(Context);

  const allData = user ? [...externalData, ...userData] : externalData;

  allData.sort((a, b) => {
    const dateA = moment(a.pubDate || a.createdAt);
    const dateB = moment(b.pubDate || b.createdAt);
    return dateB.diff(dateA);
  });

  return (
    <div className="article-section">
      {allData.map((article, index) => (
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
              {article.pubDate || article.createdAt ? (
                <Link to={`/article/${article.pubDate || article.createdAt}`}>
                  read more
                </Link>
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

export default ArticleSection;
