import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=6bcc10ffbc88079e27225a3a9dee718c";

     const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news. Try again later!");
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-4">Fetching news...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  return (
    <>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Latest News</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              {article.image && (
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description
                    ? article.description.substring(0, 120) + "..."
                    : "No description available."}
                </p>
                <a
                  href={article.url}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
