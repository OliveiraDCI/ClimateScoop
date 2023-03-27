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
        <h1>{article.title}</h1>
        <div className="article-info">
          <p>Category: {article.category.join(", ")}</p>
          <p>Country: {article.country.join(", ")}</p>
          <p>Published: {date}</p>
        </div>
      </header>
      <figure>
        <img
          src={
            article.image_url
              ? article.image_url
              : `https://source.unsplash.com/random/200x200?sig=${id}`
          }
          alt={article.description}
        />
      </figure>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
      <footer>
        <p>Original Source:</p>
        <ul>
          <li>
            <a href={article.link}>{article.link}</a>
          </li>
        </ul>
      </footer>
    </article>
  );
}

export default SingleArticle;
