import React, { useState, useContext, useEffect } from "react";
import "./Article.scss";
import Navigation from "./Navigation";
import natureImage from "../images/nature.jpg";
import CommentCards from "./CommentCards";
import DisplayCommentCards from "./DisplayCommentCards";
import { ArticleContext } from "../Context/ArticleContext.js";
import { useLocation } from "react-router-dom";

function Article(props) {
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useContext(ArticleContext);
  const [currentArticle, setCurrentArticle] = useState({});
  let articleID = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("article");
    if (data) {
      setCurrentArticle(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("article", JSON.stringify(currentArticle));
  });

  useEffect(() => {
    article.map((el) => {
      if (el._id === articleID.data) {
        return setCurrentArticle(el);
      }
    });

    console.log(currentArticle);
  }, []);

  function addComment(newComment) {
    setComments((prevComment) => {
      return [...prevComment, newComment];
    });
  }

  return (
    <div className="article-section">
      <div className="article-cont">
        <div className="article">
          <h1>{currentArticle.title}</h1>
          <p>{currentArticle.date}</p>
          <p>Subject: {currentArticle.subject}</p>
          <img className="article-image" src={natureImage} alt="user-pic" />
          <p className="body-text">{currentArticle.content}</p>
        </div>
      </div>
      <div className="comment-section">
        <CommentCards onAdd={addComment} articleID={currentArticle._id} />
        <DisplayCommentCards
          newComments={comments}
          articleID={currentArticle._id}
        />
      </div>
    </div>
  );
}

export default Article;
