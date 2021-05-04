import React, { useState, createContext, useEffect } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("/articles");
      response = await response.json();
      console.log(response);
      setArticle(response);
    }

    fetchMyAPI();
  }, []);
  return (
    <ArticleContext.Provider value={[article, setArticle]}>
      {props.children}
    </ArticleContext.Provider>
  );
};
