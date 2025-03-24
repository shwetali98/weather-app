# 📊 Analytics Dashboard

A full-stack real-time cloud monitoring Analytics Dashboard for visualizing and managing performance metrics of cloud-based applications. 
This project showcases scalable architecture, interactive UI, Dockerized deployment, and robust backend APIs.

 🚀 Features

- ⏱️ Real-time performance metrics (CPU, memory, API latency, etc.)
- 📈 Interactive charts using Chart.js
- 🔍 Filter by metric type and time range
- ⚠️ Dynamic alerts and suggestions
- 📊 Responsive dashboard UI
- 🛠️ Modular frontend and backend architecture


 🧱 Tech Stack

 Frontend:
- `React.js` (with Hooks + Context)
- `Chart.js` for metric visualizations
- `Bootstrap` for UI components
- Unit Testing: `Jest`, `React Testing Library`

 Backend:
- `C# .NET Core Web API`
- `RESTful API` structure
- `MySQL` for persistence
- `Swagger` API documentation
- Unit Testing: `xUnit`

 DevOps / Deployment:
- `Docker` & `Docker Compose`
- Deployed on [Render.com](https://weather-app-eqdt.onrender.com/)
- `SQL Workbench` for local database queries

---
 📦 Project Structure

```bash
.
├── analytics-dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── Dockerfile
│   ├── package.json
├── AnalyticsAPI/ (.NET Core Backend)
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   └── Dockerfile
├── docker-compose.yml

📚 Use Cases
✅ Monitor cloud app performance in real-time
📉 Detect bottlenecks and latency issues
📤 Export and analyze trend data
⚠️ Receive actionable suggestions (e.g., memory spikes)

🌟 Highlights
Built with real-world deployment in mind
Fully Dockerized and cloud-ready
Modular, scalable, and extensible architecture
CI/CD enabled via GitHub-Render integration
