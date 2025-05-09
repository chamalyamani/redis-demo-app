# Redis Demo App

Ce projet est une démonstration d'application Next.js utilisant Redis comme cache pour améliorer les performances de récupération de données depuis une API publique.

## 🚀 Fonctionnalités

- Récupération de posts depuis `https://jsonplaceholder.typicode.com/posts`
- Mise en cache avec Redis (TTL = 60 secondes)
- Server-Side Rendering via App Router (`app/posts/page.tsx`)
- Logique de fallback si les données n’existent pas dans le cache
- Comparaison des performances avant/après cache

## ⚙️ Installation et Lancement

1. **Cloner le projet**
```bash
git clone https://github.com/chamalyamani/redis-demo-app.git
cd redis-demo-app
2. ***Installer les dépendances*
npm install
3. **Lancer Redis avec Docker**
docker run --name redis-dev -p 6379:6379 -d redis
4. **Lancer le projet**
npm run dev
5 . **Aller sur http://localhost:3000/posts**

🔍 Structure du projet
app/posts/page.tsx : page affichant les posts avec SSR + cache Redis
lib/redis.ts : configuration de Redis avec ioredis

🧪 Résultats de performance
🌐 Sans cache : ~118 ms
✅ Avec cache Redis : ~81 ms
Mesuré avec le terminal Next.js (npm run dev)

6 . **Capture des logs**
(./public/logs.png)

📈 Vision de Scalabilité
Voici comment je prévoirais de faire évoluer cette application pour des milliers voire millions d’utilisateurs :

Horizontal Scaling : Déployer l’app sur plusieurs serveurs via Docker ou Vercel pour équilibrer la charge.

Redis Cluster : Utiliser un cluster Redis pour répartir le cache entre plusieurs nœuds et assurer une haute disponibilité.

Microservices : Séparer les responsabilités (frontend, cache, API) pour une meilleure maintenabilité.

Load Balancer : Mettre un équilibrage de charge (NGINX ou AWS ELB) pour répartir les requêtes efficacement.

CDN : Utiliser un Content Delivery Network pour tout contenu statique, ce que Next.js supporte très bien via Vercel.

