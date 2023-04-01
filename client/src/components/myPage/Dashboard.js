import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/ContextProvider";
import axios from "axios";
import ArticleForm from "./ArticleForm";
import "./myPage.scss";

function Dashboard() {
  const { userData, setUserData } = useContext(Context);
  const [newArticle, setNewArticle] = useState(null);
  const [editArticle, setEditArticle] = useState(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      window.scrollTo(0, btnRef.current.offsetTop);
    }
  }, [newArticle, editArticle]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/articles/delete/${id}`);

      if (response.data.success)
        setUserData(userData.filter((el) => el._id !== id));
    } catch (err) {
      console.log("Error on form submit: ", err.message);
    }
  };

  // return (
  //   <div className="dashboard">
  //     <table className="dashboard-table">
  //       <thead>
  //         <tr>
  //           <th>Title</th>
  //           <th>Likes</th>
  //           <th>Edit</th>
  //           <th>Delete</th>
  //         </tr>
  //       </thead>
  //       {!userData ? (
  //         <tbody>
  //           <tr>
  //             <td colSpan="4">There are no articles to display.</td>
  //           </tr>
  //         </tbody>
  //       ) : (
  //         <tbody>
  //           {userData &&
  //             userData.map((article) => (
  //               <tr key={article._id}>
  //                 <td>{article.title}</td>
  //                 <td>{article.likes.length}</td>
  //                 <td>
  //                   <button
  //                     className="dashboard-edit-button"
  //                     onClick={() => setEditArticle(article)}
  //                   >
  //                     Edit
  //                   </button>
  //                 </td>
  //                 <td>
  //                   <button
  //                     className="dashboard-delete-button"
  //                     onClick={() => handleDelete(article._id)}
  //                   >
  //                     Delete
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //         </tbody>
  //       )}
  //     </table>
  //     <button
  //       className="dashboard-new-article-button"
  //       onClick={() => setNewArticle(true)}
  //       ref={btnRef}
  //     >
  //       + New Article
  //     </button>

  //     {(newArticle || editArticle) && (
  //       <ArticleForm
  //         setNewArticle={setNewArticle}
  //         setEditArticle={setEditArticle}
  //         editArticle={editArticle}
  //       />
  //     )}
  //   </div>
  // );
  return (
    <div className="dashboard dashboard-container">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th className="dashboard-table-header">Title</th>
            <th className="dashboard-table-header">Likes</th>
            <th className="dashboard-table-header">Edit</th>
            <th className="dashboard-table-header">Delete</th>
          </tr>
        </thead>
        {!userData ? (
          <tbody>
            <tr>
              <td colSpan="4" className="dashboard-table-cell">
                There are no articles to display.
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {userData &&
              userData.map((article) => (
                <tr key={article._id}>
                  <td className="dashboard-table-cell">{article.title}</td>
                  <td className="dashboard-table-cell">
                    {article.likes.length}
                  </td>
                  <td className="dashboard-table-cell">
                    <button
                      className="dashboard-edit-button"
                      onClick={() => setEditArticle(article)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="dashboard-table-cell">
                    <button
                      className="dashboard-delete-button"
                      onClick={() => handleDelete(article._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
      <button
        className="dashboard-new-article-button"
        onClick={() => setNewArticle(true)}
        ref={btnRef}
      >
        + New Article
      </button>

      {(newArticle || editArticle) && (
        <ArticleForm
          setNewArticle={setNewArticle}
          setEditArticle={setEditArticle}
          editArticle={editArticle}
        />
      )}
    </div>
  );
}

export default Dashboard;
