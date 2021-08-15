import React from "react";
import styles from "../styles/article.module.scss";
import Link from "next/link";

const ArticleList = ({ articles }) => {
  const ArticleItem = ({ article }) => {
    return (
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={styles.article_card}>
          <h3> {article.title} &rarr; </h3>
          <p>{article.body} </p>
        </a>
      </Link>
    );
  };

  const List = () => {
    if (articles)
      return articles.map((article, index) => (
        <ArticleItem key={article.id} article={article} />
      ));
    else return null;
  };

  return (
    <div className={styles.article_grid}>
      <List />
    </div>
  );
};

export default ArticleList;
