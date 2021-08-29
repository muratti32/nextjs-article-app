import React from "react";
import { server } from "../../../config";

import Link from "next/link";
import styles from "../../../styles/article.module.scss";
/**
 * Shows article detail
 * @param {article} props provided by getStaticProps and getStaticPaths
 * @returns
 */

const Article = ({ article }) => {
  return (
    <div className={styles.articleDetail}>
      <h3> {article.title} </h3>
      <p> {article.body} </p>
      <br />
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

/**
 * get value from local api
 * @param {context} includes id value
 * @returns each article to Component props
 */
export const getStaticProps = async (context) => {
  const result = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

/**
 *
 * @returns articles paths to getStaticProps
 */
export const getStaticPaths = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: false,
  };
};

/**
 *
 * @param {context} includes id value
 * @returns each article to Component props
 */
// export const getStaticProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await result.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

/**
 *
 * @returns articles as array
 */
// export const getStaticPaths = async () => {
//   const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await result.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

export default Article;
