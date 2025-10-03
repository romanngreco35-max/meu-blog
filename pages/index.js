import Link from 'next/link';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/posts';
import SEO from '../components/SEO';

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Home" description="Meu blog" />
      <h2>Últimos posts</h2>
      <ul style={{paddingLeft: 0}}>
        {posts.map((p) => (
          <li key={p.slug} style={{listStyle: 'none', marginBottom: 12}}>
            <Link href={/posts/${p.slug}}>
              <a style={{fontSize: '1.1rem', fontWeight: 600}}>{p.title}</a>
            </Link>
            <div className="post-meta">{p.date}</div>
            {p.description && <p>{p.description}</p>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}
