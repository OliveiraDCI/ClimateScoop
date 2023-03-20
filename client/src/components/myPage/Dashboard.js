import { useEffect, useRef, useState } from "react";
import ArticleForm from "./ArticleForm";
import "./myPage.scss";

const articles = [
  {
    id: 1,
    topic: "climate change",
    region: "North America",
    title: "The Impact of Climate Change on Arctic Ecosystems",
    img: "https://picsum.photos/id/237/300/200",
    imgDescription: "A polar bear standing on an ice floe.",
    article:
      "The Arctic is warming at a rate twice as fast as the global average. This rapid warming is causing significant changes to Arctic ecosystems, such as melting sea ice and rising sea levels, which can have devastating effects on the plants and animals that call the Arctic home. Some species may be able to adapt to the changing conditions, while others may not be able to survive. This has the potential to cause a ripple effect throughout the entire food chain, impacting humans as well. It is important that we take action to mitigate the effects of climate change on the Arctic and its inhabitants.",
    references:
      "https://www.nationalgeographic.com/environment/2019/07/arctic-is-warming-twice-as-fast/",
    likes: [1, 3],
    owner: 1,
  },
  {
    id: 2,
    topic: "climate change",
    region: "Europe",
    title: "The Impact of Climate Change on Agriculture",
    img: "https://picsum.photos/id/247/300/200",
    imgDescription: "A field of wheat under a blue sky.",
    article:
      "Climate change is having a significant impact on agriculture around the world. Rising temperatures, changes in rainfall patterns, and more frequent extreme weather events are making it increasingly difficult to grow crops and raise livestock. This has the potential to cause food shortages and higher prices for consumers. Farmers are having to adapt to these changing conditions by implementing new practices, such as planting crops that are more drought-resistant and using more efficient irrigation systems. It is important that we continue to support these efforts and invest in research to find new solutions to the challenges posed by climate change.",
    references: "https://www.ipcc.ch/report/ar6/wg2/",
    likes: [2, 3, 4],
    owner: 2,
  },
  {
    id: 3,
    topic: "climate change",
    region: "Asia",
    title: "The Impact of Climate Change on Human Health",
    img: "https://picsum.photos/id/257/300/200",
    imgDescription:
      "A person wearing a mask standing in front of a polluted skyline.",
    article:
      "Climate change is not just an environmental issue, it is also a human health issue. Rising temperatures and changing weather patterns can lead to an increase in air pollution, which can have negative effects on respiratory health. Extreme weather events, such as heatwaves and floods, can also lead to injuries and illnesses. Climate change can also impact food and water security, which can have ripple effects on public health. It is important that we take action to address the root causes of climate change in order to protect the health and well-being of people around the world.",
    references:
      "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health",
    likes: [1, 4],
    owner: 3,
  },
  {
    id: 4,
    topic: "Technology",
    region: "North America",
    title: "The Latest Advancements in AI",
    img: "https://example.com/image1.jpg",
    imgDescription: "An image of an AI robot",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    references: "https://example.com/reference1",
    likes: [10],
    owner: "user1",
  },
  {
    id: 5,
    topic: "Health",
    region: "Europe",
    title: "The Benefits of Meditation",
    img: "https://example.com/image2.jpg",
    imgDescription: "An image of a person meditating",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    references: "https://example.com/reference2",
    likes: [5],
    owner: "user1",
  },
  {
    id: 6,
    topic: "Politics",
    region: "Asia",
    title: "The Rise of Populism",
    img: "https://example.com/image3.jpg",
    imgDescription: "An image of a protest",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    references: "https://example.com/reference3",
    likes: [2],
    owner: "user2",
  },
];

const likes = articles.reduce((acc, el) => acc + el.likes.length, 0);

const sentimentScore = 0.8;

function Dashboard() {
  // change above dummydata to the data from logged in user and his respective articles imported from context
  const [newArticle, setNewArticle] = useState(null);
  const [editArticle, setEditArticle] = useState(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      window.scrollTo(0, btnRef.current.offsetTop);
    }
  }, [newArticle, editArticle]);

  const handleEditBtnClick = (id) => setEditArticle(id);

  return (
    <div className="dashboard">
      <div className="dashboard-overview">
        <p className="dashboard-articles-count">
          {articles ? articles.length : "0"} articles
        </p>
        <p className="dashboard-likes-count">{likes ? likes : "0"} likes</p>
        <p className="dashboard-sentiment-score">
          Sentiment score: {sentimentScore ? sentimentScore : "0"}
        </p>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Likes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {!articles || articles.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan="4">There are no articles to display.</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.likes.length}</td>
                <td>
                  <button
                    className="dashboard-edit-button"
                    onClick={() => handleEditBtnClick(article.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="dashboard-delete-button">Delete</button>
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
          editArticle={articles.find((el) => el.id === editArticle)}
        />
      )}
    </div>
  );
}

export default Dashboard;
