import React from "react";
import { server } from "../config";
import ArticleList from "../components/ArticleList";

/**
 *
 * @param {articles} value provided by getStaticProps
 */
const index = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  /**
   * Rest Api Sample
   */
  // const result = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=6"
  // );

  /**
   * local api sample
   */
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};
export default index;
