

import redis from '@/lib/redis'; // ⬅️ à ajouter en haut du fichier

async function getPosts() {
  const cacheKey = 'posts_cache';

  // Essayer de récupérer depuis Redis
  const cached = await redis.get(cacheKey);
  if (cached) {
    console.log('✅ Données récupérées depuis Redis');
    return JSON.parse(cached);
  }

  // Sinon, fetch depuis l'API
  console.log('🌐 Données récupérées depuis l\'API');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // Stocker dans Redis pendant 60 secondes
  await redis.set(cacheKey, JSON.stringify(data), 'EX', 60);

  return data;
}

  
  export default async function PostsPage() {
    const posts = await getPosts();
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Liste des Posts 📚</h1>
        <ul>
          {posts.slice(0, 10).map((post: any) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  