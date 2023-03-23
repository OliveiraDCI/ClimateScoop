import "./ExternalArticles.scss";
// import context
import Searchbox from "./Searchbox"
import Articles from "./Articles"

function ExternalArticles() {
  return <div className="external-articles">
    <Searchbox />
    <Articles />
  </div>;
}

export default ExternalArticles;
