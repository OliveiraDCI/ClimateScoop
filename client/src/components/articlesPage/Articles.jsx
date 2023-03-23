import { useContext } from 'react';
import './articles.scss';
import {Context} from '../../context/ContextProvider'


function ArticleSection() {
  // const articles = props.articles;
const {externalData} = useContext(Context)

  return (
    <div className="article-section">
      {externalData.map((article, index) => (
        <div className="article" key={index}>
          <img src={article.image_url? article.image_url:'https://media.istockphoto.com/id/1361668534/es/foto/el-cambio-clim%C3%A1tico-y-los-j%C3%B3venes-en-el-futuro.jpg?s=612x612&w=0&k=20&c=l7ZWQZwyZtZXEl9_6i3mj4HSTo_JAbXMoutOmcs39Lk='} alt={article.title} />
          <div className="article-content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link}>Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleSection;
