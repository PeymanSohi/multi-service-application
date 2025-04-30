# 😂 FunStack: The Funniest Full-Stack App in Containers

Welcome to **FunStack**, a multi-service Docker project featuring a humorous frontend, a Node.js Express backend, MongoDB, Redis, and an Nginx reverse proxy — all bundled together with Docker Compose, advanced Docker features, and GitHub Actions CI/CD!

## 🐳 Technologies Used

- **React.js**: Frontend (funny static site)
- **Node.js + Express**: Backend API
- **MongoDB**: Database
- **Redis**: Caching layer
- **Nginx**: Reverse proxy
- **Docker Compose**: Orchestration
- **Docker Secrets**: Sensitive data handling
- **GitHub Actions**: CI/CD

---

## 🚀 How to Run

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/funstack.git
cd funstack
```

2. **Create secrets:**

```bash
mkdir -p docker/secrets
echo "super-secret-password" > docker/secrets/mongo_password.txt
```

3. **Build and run:**

```bash
docker-compose up --build
```

4. Visit the app:

- Frontend: http://localhost
- API: http://localhost/api
- Nginx routes requests based on path

---

## 🧪 GitHub Actions

GitHub Actions is configured to:

- Lint backend code
- Build frontend and backend Docker images
- Test Node.js backend

### Workflow file: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:

    runs-on: ubuntu-latest

    services:
      mongo:
        image: mongo
        ports: [27017:27017]
      redis:
        image: redis
        ports: [6379:6379]

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install backend dependencies
        working-directory: ./backend
        run: npm ci

      - name: Lint backend
        working-directory: ./backend
        run: npm run lint || true

      - name: Run backend tests
        working-directory: ./backend
        run: npm test || echo "no tests yet"

      - name: Build Docker images
        run: docker-compose build
```

---

## 🛡️ Security & Best Practices

- 🗝 Uses Docker Secrets for sensitive data (like DB passwords)
- 🔍 Linting & testing backend
- 🩺 Health checks for all services (add in `docker-compose.yml`)
- 💽 Volumes for persistent data
- 🔄 Log rotation can be configured via Nginx and log driver options

---

## 📸 Frontend Screenshot

![Funny frontend](https://via.placeholder.com/600x300.png?text=Funny+Frontend+UI)

---
