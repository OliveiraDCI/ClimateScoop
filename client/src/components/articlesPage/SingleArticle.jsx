import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import "./singleArticle.scss";
import moment from "moment";

function SingleArticle() {
  const { externalData, userData } = useContext(Context);
  const { id } = useParams();

  let article = externalData.find((article) => article.pubDate === id);

  if (!article) {
    article = userData.find((article) => article.createdAt === id);
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  const date = article.createdAt
    ? moment(article.createdAt).format("MMMM Do YYYY")
    : new Date(article.pubDate).toLocaleDateString();

  return (
    <article className="single-article">
      <header>
        {article.title && <h1>{article.title}</h1>}
        <div className="article-info">
          {(article.category || article.topic) && (
            <p>Category: {article.category || article.topic}</p>
          )}
          {(article.country || article.region) && (
            <p>Country: {article.country || article.region}</p>
          )}
          {(date && <p>Published: {date}</p>) || (
            <p>Published date not available</p>
          )}
        </div>
      </header>
      <figure>
        <img
          src={
            article.image_url
              ? article.image_url
              : article.image ||
                `https://source.unsplash.com/random/200x200?sig=${id}`
          }
          alt={article.title || "img"}
        />
      </figure>
      <div className="article-content">
        {article.content && <p>{article.content}</p>}
        {article.article && <p>{article.article}</p>}
        {!article.content && !article.article && (
          <p>Article content not available</p>
        )}
      </div>
      <footer>
        <p>Original Source:</p>
        <ul>
          {article.link && (
            <li>
              <a href={article.link}>Click here</a>
            </li>
          )}
          {article.references && (
            <li>
              <a href={article.references}>{article.references}</a>
            </li>
          )}
          {!article.link && !article.references && (
            <li>Original source not available</li>
          )}
        </ul>
      </footer>
    </article>
  );
}

export default SingleArticle;
