# Multi-Service Docker Application with Monitoring and Logging

This project demonstrates a multi-service application using Docker, including various services like:

- A React-based Web Frontend
- A Node.js Express Backend API
- MongoDB for data storage
- Redis for caching
- Nginx as a reverse proxy
- Prometheus for monitoring and Grafana for visualization
- Loki and Promtail for log aggregation
- Swagger for API documentation
- Nginx with rate limiting and security headers

## Requirements

- Docker and Docker Compose installed on your machine.
- Node.js, MongoDB, Redis, and Nginx should be properly set up inside their respective Docker containers.
- Prometheus, Grafana, Loki, and Promtail are integrated for monitoring and logging.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/PeymanSohi/multi-service-application
cd multi-service-application
```

### 2. Environment Configuration

Create a `.env` file for storing environment-specific variables:

```env
MONGO_URI=mongodb://mongo:27017/mydb
REDIS_URI=redis://redis:6379
SECRET_KEY=your-secret-key
```

### 3. Build the Docker Containers

Ensure you have the required directories and files in place (`nginx`, `prometheus`, `loki`, etc.). Then, build the Docker containers:

```bash
docker-compose up --build
```

This will build all services and start them in containers, including:

- React frontend (`web` service)
- Node.js backend API (`api` service)
- MongoDB and Redis services
- Prometheus and Grafana services for monitoring
- Loki and Promtail for logs

### 4. Accessing the Application

- **Frontend**: Visit [http://localhost](http://localhost) for the React application.
- **API**: The Node.js API can be accessed at [http://localhost:8080](http://localhost:8080).
- **Prometheus**: Visit [http://localhost:9090](http://localhost:9090) for Prometheus.
- **Grafana**: Visit [http://localhost:3000](http://localhost:3000) for Grafana (default credentials: `admin`/`admin`).
- **Loki Logs**: Logs can be accessed from Grafana as well.

### 5. API Documentation with Swagger

Swagger UI is configured for API documentation. You can access the API documentation by visiting [http://localhost:8080/docs](http://localhost:8080/docs).

## Services Breakdown

### 1. **Frontend (React)**

- The frontend is a simple React application running on the `/` route.
- Built using Docker's multi-stage build for optimized production images.

### 2. **Backend (Node.js Express API)**

- Provides RESTful API endpoints for the application.
- Exposes Swagger documentation at `/docs`.

### 3. **Nginx (Reverse Proxy)**

- Handles incoming requests and routes them to the appropriate backend or frontend services.
- Configured with rate limiting and security headers.

### 4. **MongoDB**

- Stores data for the application.
- Docker volumes are used to persist data.

### 5. **Redis**

- Used as a caching layer to improve performance.

### 6. **Prometheus**

- Collects and stores metrics from the application and system.
- Configured with exporters to collect system-level metrics and application-level metrics.

### 7. **Grafana**

- Provides a dashboard for visualizing the metrics collected by Prometheus.
- Default dashboards can be customized for both system and application metrics.

### 8. **Loki and Promtail**

- Loki collects logs from the services.
- Promtail is responsible for shipping logs from containers to Loki.

## Monitoring & Logging

### Prometheus Configuration

Prometheus collects system and application metrics. It scrapes data at defined intervals from the services:

- **system metrics** (CPU, memory, disk usage)
- **application metrics** (request count, response time)

### Grafana Configuration

Grafana is connected to Prometheus as a data source. You can access Grafana at `http://localhost:3000` and use the built-in dashboards to monitor:

- **System Health**: CPU usage, memory usage, disk space.
- **Application Health**: Response times, request counts, error rates.

### Loki and Promtail

Loki collects logs from all services, and Promtail is configured to push logs to Loki. You can visualize logs in Grafana as well.

### Log Aggregation

Logs are aggregated and can be viewed from the Grafana interface by querying Loki data.

## Security and Rate Limiting

Nginx is configured with:

- **Security Headers**: For better security and protection against attacks.
- **Rate Limiting**: To protect the API from too many requests.

## GitHub Actions

GitHub Actions is set up for CI/CD. It will automatically build and test the Docker containers on every push. The `.github/workflows/docker-build.yml` file contains the configuration for this workflow:

## Conclusion

This project sets up a fully containerized application with integrated monitoring and logging. By using Docker Compose, you can easily manage multi-container setups for development and production. Prometheus, Grafana, Loki, and Nginx make it scalable and easy to monitor, while GitHub Actions provides CI/CD automation.

