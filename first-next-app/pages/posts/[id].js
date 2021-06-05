import Layout from "../../components/layout";
import { getIds, getPostById } from "../../lib/posts";
import marked from "marked";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

export default function Post({ post }) {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <span dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </Layout>
  );
}
