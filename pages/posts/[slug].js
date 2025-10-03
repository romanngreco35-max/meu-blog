import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import SEO from '../../components/SEO';

export default function PostPage({ post }) {
  const url = typeof window !== 'undefined' ? window.location.href : null;
  return (
    <Layout>
      <SEO title={post.meta.title} description={post.meta.description} url={url} datePublished={post.meta.date}/>
      <article>
        <h1 className="post-title">{post.meta.title}</h1>
        <div className="post-meta">{post.meta.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
