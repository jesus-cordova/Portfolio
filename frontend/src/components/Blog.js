import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Blog.scss";
import PreviewCard from "./PreviewCard.js";
import { ArticleContext } from "../Context/ArticleContext.js";
function Blog() {
  const [article, setArticle] = useContext(ArticleContext);

  return (
    <div>
      <div className="cont">
        {article.map((el) => {
          return (
            <div>
              <PreviewCard
                id={el._id}
                title={el.title}
                subject={el.subject}
                date={el.date}
                author={el.author}
                content={el.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
