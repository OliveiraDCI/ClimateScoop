import { useContext, useState } from "react";
import { Context } from "../../context/ContextProvider";
import axios from "axios";
import DOMPurify from "dompurify";

function ArticleForm({ setNewArticle, setEditArticle, editArticle }) {
  const { user, setUpdate } = useContext(Context);

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
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData({
      ...formData,
      [name]: sanitizedValue,
      owner: user._id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editArticle) {
      (async () => {
        try {
          const response = await axios.put("/api/articles/edit", {
            formData,
            id: editArticle._id,
          });

          console.log("Submiting EDIT form data: ", response.data);

          if (response.data.success) {
            setUpdate(false);
            setUpdate(true);
          }
        } catch (err) {
          console.log("Error on form submit: ", err.message);
        }
      })();
    }

    if (!editArticle) {
      (async () => {
        try {
          const response = await axios.post("/api/articles/add", formData);

          console.log("Submiting NEW form data: ", response.data);

          if (response.data.success) {
            setUpdate(false);
            setUpdate(true);
          }
        } catch (err) {
          console.log("Error on form submit: ", err.message);
        }
      })();
    }

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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="imgDescription">Image Description</label>
        <textarea
          name="imgDescription"
          id="imgDescription"
          value={formData.imgDescription}
          onChange={(e) => handleInputChange(e)}
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="article">Article Text</label>
        <textarea
          name="article"
          id="article"
          value={formData.article}
          onChange={(e) => handleInputChange(e)}
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="references">References</label>
        <textarea
          name="references"
          id="references"
          value={formData.references}
          onChange={(e) => handleInputChange(e)}
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
export default ArticleForm;
