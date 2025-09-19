# 🚗 Uber Clone – Full-Stack Ride-Hailing Web App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

**A modern ride-hailing platform built with Next.js and Express.js**

[🚀 Quick Start](#-quick-start) • [📖 Features](#-features) • [📡 API Reference](#-api-endpoints) • [🛡️ Security](#️-security-features) • [🚀 Deploy](#-deployment)

</div>

---

## 📖 About

Our Uber Clone is a comprehensive full-stack web application that replicates the core functionality of modern ride-hailing services. Built with cutting-edge technologies:

- **Frontend**: [Next.js](https://nextjs.org) - The React framework for production
- **Backend**: [Express.js](https://expressjs.com) - Fast, unopinionated Node.js framework
- **Database**: [MongoDB Atlas](https://www.oracle.com/database/mongodb/) - Cloud-hosted NoSQL database
- **Authentication**: [JWT](https://auth0.com/docs/secure/tokens/json-web-tokens) - Secure token-based authentication
- **Maps**: [Google Maps API](https://developers.google.com/maps) - Interactive mapping and geolocation
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## 🌟 Features

### 🔐 Authentication & Security
- ✅ User registration and login with email verification
- ✅ JWT-based authentication with refresh tokens
- ✅ Password hashing using bcrypt
- ✅ Protected API endpoints
- ✅ Automatic logout on token expiration

### 🚗 Ride Booking & Management
- ✅ Complete CRUD operations for ride requests
- ✅ Real-time ride status tracking (requested → accepted → in-progress → completed)
- ✅ Intelligent driver-passenger matching
- ✅ Comprehensive ride history
- ✅ Confirmation dialogs for all critical actions

### 📍 Mapping & Geolocation
- ✅ Interactive map integration for pickup/dropoff selection
- ✅ Live route calculation and display
- ✅ Real-time driver location tracking via WebSockets
- ✅ Address autocomplete with place search
- ✅ Dynamic route optimization

### 🎨 User Interface & Experience
- ✅ Fully responsive design optimized for all devices
- ✅ Light/Dark theme toggle
- ✅ Interactive UI components (forms, dialogs, notifications)
- ✅ Mobile-first approach with smooth animations
- ✅ Real-time loading states and feedback

### ⚡ Performance & Architecture
- ✅ Server-side rendering with Next.js
- ✅ RESTful API architecture
- ✅ Optimized MongoDB queries
- ✅ TypeScript support for enhanced development
- ✅ Environment-based configuration

## 🏗️ Project Structure

```
Uber-Clone/
├── 📁 uber-frontend/           # Next.js Frontend Application
│   ├── 📁 pages/              # Next.js pages and routing
│   ├── 📁 components/         # Reusable React components
│   │   ├── Map.jsx            # Interactive map component
│   │   ├── RideCard.jsx       # Ride display component
│   │   └── Layout.jsx         # App layout wrapper
│   ├── 📁 styles/             # Tailwind CSS and global styles
│   ├── 📁 public/             # Static assets (images, icons)
│   ├── 📁 lib/                # Utility functions and API calls
│   ├── .env.local             # Frontend environment variables
│   ├── next.config.js         # Next.js configuration
│   └── package.json           # Frontend dependencies
│
├── 📁 uber-backend/            # Express.js Backend API
│   ├── 📁 controllers/        # Business logic handlers
│   │   ├── authController.js  # Authentication logic
│   │   └── rideController.js  # Ride management logic
│   ├── 📁 routes/             # API route definitions
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── rideRoutes.js      # Ride endpoints
│   ├── 📁 models/             # MongoDB schemas
│   │   ├── User.js            # User data model
│   │   └── Ride.js            # Ride data model
│   ├── 📁 middleware/         # Custom middleware
│   │   ├── authMiddleware.js  # JWT validation
│   │   └── errorHandler.js    # Error handling
│   ├── 📁 config/             # Configuration files
│   ├── .env                   # Backend environment variables
│   ├── server.js              # Express server setup
│   └── package.json           # Backend dependencies
│
├── 📁 docs/                   # Additional documentation
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **MongoDB Atlas account** (or local MongoDB)
- **Google Maps API key**

### 1. Clone the Repository

```bash
git clone https://github.com/Soniji5504/UBER---CLONE.git
cd "UBER---CLONE"
```

### 2. Backend Setup

```bash
cd uber-backend
npm install
```

Create a `.env` file in `uber-backend/`:

```env
PORT=5000
ACCESS_TOKEN_SECRET=your_super_secret_jwt_key_here
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/uberclone?retryWrites=true&w=majority
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../uber-frontend
npm install
```

Create a `.env.local` file in `uber-frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 4. Start Development Servers

**Option 1: Separate terminals**
```bash
# Terminal 1 - Backend
cd uber-backend
npm run dev

# Terminal 2 - Frontend  
cd uber-frontend
npm run dev
```

**Option 2: Concurrent (from root directory)**
```bash
npm install
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

## 🔧 Configuration

### API Proxy Setup

Configure `next.config.js` for seamless API integration:

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*'
      },
    ];
  },
};
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | ✅ |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | ✅ |
| `ACCESS_TOKEN_SECRET` | JWT signing secret | ✅ |
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `PORT` | Server port (default: 5000) | ⚠️ |
| `NODE_ENV` | Environment mode | ⚠️ |

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `GET` | `/api/auth/logout` | User logout | ✅ |
| `GET` | `/api/auth/current` | Get current user | ✅ |

### Ride Management Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/rides` | Get user's rides | ✅ |
| `POST` | `/api/rides` | Create ride request | ✅ |
| `GET` | `/api/rides/:id` | Get specific ride | ✅ |
| `PUT` | `/api/rides/:id` | Update ride status | ✅ |
| `DELETE` | `/api/rides/:id` | Cancel/delete ride | ✅ |

### Example API Usage

```javascript
// Login request
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'securePassword123'
  })
});

// Create ride request
const rideResponse = await fetch('/api/rides', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    pickupLocation: { lat: 40.7128, lng: -74.0060 },
    dropoffLocation: { lat: 40.7589, lng: -73.9851 },
    rideType: 'standard'
  })
});
```

## 🛡️ Security Features

### JWT Authentication
- **Short-lived tokens** (15 minutes) with refresh capability
- **HTTP-only cookies** or secure localStorage implementation
- **Signature validation** on all protected routes

### Password Security
- **bcrypt hashing** with salt for password storage
- **Strong password policies** enforced on registration
- **Generic error messages** to prevent account enumeration

### API Protection
- **Authentication middleware** on all protected routes
- **Input validation** using Joi or Express Validator
- **Rate limiting** to prevent abuse
- **CORS configuration** for trusted origins only

### Data Security
- **Environment variables** for all sensitive data
- **No hardcoded credentials** in source code
- **Proper error handling** without sensitive data leaks

## 🎨 UI Components

### Core Components
- **Interactive Maps**: Google Maps integration with custom markers
- **Ride Cards**: Beautiful ride display with status indicators  
- **Forms**: Validated forms with real-time feedback
- **Modals**: Confirmation dialogs for critical actions
- **Notifications**: Toast alerts for user feedback

### Design System
- **Responsive Design**: Mobile-first approach
- **Theme Support**: Light/Dark mode toggle
- **Modern Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant components

## 🔍 Error Handling

### Frontend Error Management
- **API Interceptors**: Centralized error handling for all API calls
- **Form Validation**: Real-time validation with user-friendly messages
- **Loading States**: Skeleton loaders and progress indicators
- **Global Notifications**: Toast system for success/error feedback

### Backend Error Management
- **Centralized Middleware**: Express error handler for all routes
- **HTTP Status Codes**: Proper status codes (400, 401, 404, 500)
- **Structured Responses**: Consistent JSON error format
- **Logging**: Server-side error logging for debugging

## 📊 User Flows

### 🚶 Passenger Journey
1. **Registration/Login** → Email verification and secure authentication
2. **Location Selection** → Interactive map for pickup/dropoff
3. **Ride Request** → Submit request with preferred ride type
4. **Driver Matching** → Real-time driver assignment and tracking
5. **Trip Monitoring** → Live location updates during ride
6. **Trip Completion** → Payment processing and ride rating

### 🚘 Driver Journey
1. **Driver Login** → Access driver dashboard
2. **Ride Notifications** → Receive nearby ride requests
3. **Trip Acceptance** → Accept rides and view passenger details
4. **Navigation** → GPS navigation to passenger location
5. **Trip Execution** → Track trip progress and communicate
6. **Trip Completion** → Complete ride and receive earnings

## 🔄 Real-Time Features

- **WebSocket Integration**: Socket.IO for live updates
- **Location Tracking**: Real-time driver/passenger positioning
- **Status Updates**: Instant ride status notifications
- **Chat System**: In-app messaging between users
- **Push Notifications**: Background notifications for mobile users

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
cd uber-frontend
npm run build

# Deploy to Vercel
vercel --prod
```

**Environment Variables in Vercel:**
- `NEXT_PUBLIC_API_URL`: Production backend URL
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Production Maps API key

### Backend Deployment (Railway/Heroku)

```bash
cd uber-backend

# For Railway
railway login
railway link
railway up

# For Heroku
heroku create your-app-name
git push heroku main
```

**Production Environment Variables:**
- `ACCESS_TOKEN_SECRET`: Strong JWT secret
- `MONGODB_URI`: Production MongoDB connection
- `NODE_ENV`: `production`
- `PORT`: Provided by hosting platform

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 👨‍💻 Author

**Dhruv Soni**
- GitHub: [@Soniji5504](https://github.com/Soniji5504)
- Email: dhruvsoniji0505@gmail.com

*Made with ❤️ by Dhruv Soni*

## 🙏 Acknowledgments

Special thanks to the amazing open-source communities behind:

- [Next.js](https://nextjs.org) - The React Framework for Production
- [Express.js](https://expressjs.com) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com) - Modern database for modern applications
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Google Maps Platform](https://developers.google.com/maps) - Mapping and location services



<div align="center">

**⭐ Star this repository if you found it helpful!**

[🐛 Report Bug](https://github.com/Soniji5504/UBER---CLONE/issues) • [💡 Request Feature](https://github.com/Soniji5504/UBER---CLONE/issues) • [📖 Documentation](https://github.com/Soniji5504/UBER---CLONE/wiki)

</div>
