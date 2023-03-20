import { useContext, useState } from "react";
import { Context } from "../../context/ContextProvider";

function ArticleForm({ setNewArticle, setEditArticle, editArticle }) {
  const { user } = useContext(Context);

  const [formData, setFormData] = useState(
    editArticle
      ? editArticle
      : {
          topic: "",
          region: "",
          title: "",
          img: "",
          imgDescription: "",
          article: "",
          references: "",
          likes: [],
          owner: "",
        }
  );

  const handleInputChange = (e) => {
    // create special handler for img input using Claudinary

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      owner: user._id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to submit form data to backend here

    setNewArticle(false);
    setEditArticle(false);
  };

  return (
    <form onSubmit={handleSubmit} className="new-article-form">
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          name="topic"
          id="topic"
          value={formData.topic}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region</label>
        <input
          type="text"
          name="region"
          id="region"
          value={formData.region}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Upload Image</label>
        <input
          type="file"
          name="img"
          id="img"
          accept="image/*"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imgDescription">Image Description</label>
        <textarea
          name="imgDescription"
          id="imgDescription"
          value={formData.imgDescription}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="article">Article Text</label>
        <textarea
          name="article"
          id="article"
          value={formData.article}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="references">References</label>
        <textarea
          name="references"
          id="references"
          value={formData.references}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
export default ArticleForm;
