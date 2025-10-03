const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'posts');

function getPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { data } = matter(raw);
    return { slug, date: data.date || new Date().toISOString() };
  });
}

(function generate() {
  const posts = getPosts();
  const baseUrl = 'https://SEU_DOMINIO.com'; // substitua depois
  let xml = <?xml version="1.0" encoding="UTF-8"?>\n;
  xml += <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n;
  xml += <url><loc>${baseUrl}</loc></url>\n;
  posts.forEach(p => {
    xml += <url><loc>${baseUrl}/posts/${p.slug}</loc><lastmod>${new Date(p.date).toISOString()}</lastmod></url>\n;
  });
  xml += </urlset>;
  if (!fs.existsSync('public')) fs.mkdirSync('public');
  fs.writeFileSync(path.join('public', 'sitemap.xml'), xml);
  console.log('sitemap.xml gerado em /public/sitemap.xml');
})();
