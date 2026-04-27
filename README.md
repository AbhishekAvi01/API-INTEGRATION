## API INTEGRATION

*COMPANY* : CODTECH IT SOLUTION

*NAME* : ABHISHEK KUMAR

*INTERN ID* : CTIS4271

*DOMAIN* : FULL STACK WEB DEVELOPMENT

*DURATION* : 16 WEEKS

*MENTOR* :NEELA SANTOSH KUMAR 


# Premium Full-Stack Weather Application 

A visually stunning, full-stack weather dashboard built with a modern React frontend and a robust Node.js/Express backend. The application fetches real-time weather data and daily forecasts from the [Open-Meteo API](https://open-meteo.com/).

##  Features

- **Premium UI/UX**: Clean layout using **Glassmorphism**, soft shadows, and vibrant gradient backgrounds.
- **Dark Mode Support **: Seamless light/dark theme toggling with smooth transitions.
- **Live Search with Autocomplete**: Search for any city worldwide; suggestions are powered by a geocoding API.
- **Skeleton Loaders**: High-quality loading states that prevent UI jumps while data is fetching.
- **Fully Responsive**: Adapts perfectly to mobile, tablet, and desktop screens using modern CSS Grid and Flexbox.

##  Tech Stack

### Frontend
- **React.js** (Bootstrapped with Vite)
- **Vanilla CSS** (CSS Variables, Flexbox/Grid for custom styling)
- **Lucide React** (Icons)
- **Axios** (HTTP Client)

### Backend
- **Node.js & Express.js**
- **Axios** (For server-side API requests to bypass CORS)
- **dotenv** (Environment variable management)
- **CORS** (Cross-Origin Resource Sharing)

##  Project Structure

```
.
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components (SearchBar, WeatherCard, Skeleton)
│   │   ├── App.jsx         # Main Layout & State Management
│   │   └── index.css       # Global Styles, Themes, and Glassmorphism
│   └── package.json
└── server/                 # Node.js Backend
    ├── index.js            # Express Server & API Routes
    ├── .env                # Environment Variables
    └── package.json
```

##  Getting Started

Follow these steps to run the application locally.

### 1. Backend Setup

1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   *The API will run on `http://localhost:5000`.*

### 2. Frontend Setup

1. Open a **new** terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The React app will be available at `http://localhost:5173`.*

##  API Reference

The backend exposes the following endpoints:

- `GET /api/weather?lat={latitude}&lon={longitude}&city={cityName}`
  Fetches current weather and a 7-day forecast for the given coordinates.
  
- `GET /api/search?q={query}`
  Returns a list of city suggestions matching the search query.

---
*Built to impress with a focus on design and user experience.*


## Output
<img width="1918" height="881" alt="Image" src="https://github.com/user-attachments/assets/aac91227-eb7f-4889-8fab-6fb65d7ad301" />
