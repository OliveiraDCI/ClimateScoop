import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import "./singleArticle.scss";

function SingleArticle() {
  const { externalData } = useContext(Context);
  const { id } = useParams();

  const article = externalData.find((article) => article.pubDate === id);
  console.log("article in single page", article);

  return (
    <div className="single-article">
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.description} />
      <div className="article-info">
        <p>Category: {article.category.join(", ")}</p>
        <p>Country: {article.country.join(", ")}</p>
        <p>Published: {new Date(article.pubDate).toLocaleDateString()}</p>
      </div>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
      <div className="references">
        <p>Original Source:</p>
        <ul>
          <li>
            <a href={article.link}>{article.link}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SingleArticle;
