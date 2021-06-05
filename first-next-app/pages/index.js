import Link from "next/link";
import Layout from "../components/layout";
import { getIds, getPosts } from "../lib/posts";

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
      ids: getIds(),
    },
  };
};

export default function Home({ posts, ids }) {
  return (
    <>
      <Layout pageTitle="Home">
        <Link href="/about">
          <a>About</a>
        </Link>
        <ul>
          {posts.map(({ title }, index) => {
            return (
              <Link href={`../posts/${ids[index].params.id}`} key={index}>
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
