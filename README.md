# Tutors Tuition 📚

**Expert Home Tutoring - Empowering Minds, Shaping Futures**

A comprehensive web-based tutoring platform that connects students with expert tutors for personalized, one-on-one home instruction.

## 🌟 Features

- **Personalized Learning**: One-on-one tutoring sessions tailored to individual student needs
- **Expert Tutors**: Highly qualified and certified tutors across multiple subjects
- **Flexible Scheduling**: Convenient home tutoring sessions that fit your schedule
- **AI-Powered Chatbot**: Interactive chatbot "Slime" for instant support and inquiries
- **Wide Subject Coverage**: Math, Sciences, English, Languages, and more
- **Offline Home Services**: Direct tutoring at your home location

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **AI Integration**: Google Gemini API for chatbot functionality
- **Additional Libraries**: 
  - CORS for cross-origin requests
  - dotenv for environment variable management
  - node-fetch for API calls

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muqeeth542/Tutors-Tution.git
   cd Tutors-Tution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   For local development, create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **Note**: For Render deployment, add environment variables in the Render dashboard instead of using a `.env` file.

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
Tutors-Tution/
├── images/                     # Static images and assets
│   ├── Logo.png
│   ├── Tab logo.jpg
│   ├── Certified.webp
│   ├── Flexible Schedule.jpeg
│   ├── Highly qualified tutors.jpg
│   └── personalized learning.png
├── index.html                  # Main landing page
├── cht_bt.html                # Chatbot interface
├── gdt.html                   # Additional page
├── test3.css                  # Main stylesheet
├── server.js                  # Express.js server
├── package.json               # Dependencies and scripts
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## 🎯 Key Pages

- **Home (`index.html`)**: Main landing page with service overview and navigation
- **Chatbot (`cht_bt.html`)**: Interactive AI assistant "Slime" for user support
- **Additional Pages**: Extended functionality and information pages

## 🤖 AI Chatbot Integration

The platform features "Slime", an AI-powered chatbot that assists with:
- Information about tutoring services and subjects
- Details about tutor qualifications
- Booking process and scheduling
- Teaching methodology inquiries
- General platform support

## 🔧 API Endpoints

### POST /generateContent
Proxy endpoint for Google Gemini API integration
- **Purpose**: Handles chatbot interactions
- **Authentication**: Requires GEMINI_API_KEY environment variable
- **Content-Type**: application/json

## 🚀 Deployment on Render

This project is configured for deployment on [Render.com](https://render.com), a modern cloud platform.

### Render Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Render
2. **Create Web Service**: 
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`
3. **Configure Environment Variables**:
   - Add `GEMINI_API_KEY` in Render dashboard
4. **Deploy**: Render will automatically deploy on every push to main branch

### Environment Configuration
- **Port**: Render automatically provides `PORT` environment variable
- **Node Version**: Specified in `package.json` engines field
- **Auto-Deploy**: Enabled for continuous deployment

### Live Demo
🌐 **Live Site**: [Your Render URL will appear here after deployment]

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for chatbot functionality | Yes |

## 📱 Features Overview

### For Students
- Browse available tutors and subjects
- Schedule personalized tutoring sessions
- Access flexible home tutoring services
- Get instant support through AI chatbot

### For Tutors
- Join our expert tutor network
- Flexible scheduling options
- Direct home tutoring opportunities

## 🎨 Design Highlights

- **Responsive Design**: Mobile-first approach for all devices
- **Modern UI/UX**: Clean, professional interface
- **Interactive Elements**: Engaging user experience
- **Brand Identity**: Consistent visual design with custom logo

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

- **Owner**: [muqeeth542](https://github.com/muqeeth542)

## 🐛 Bug Reports & Feature Requests

For bug reports and feature requests, please visit our [Issues Page](https://github.com/muqeeth542/Tutors-Tution/issues).

## 🗂️ Files to Remove for Render Deployment

When deploying to Render, you should remove or exclude these files:

### ❌ Files to Remove:
- `.env` - Contains sensitive API keys (use Render's environment variables instead)
- `node_modules/` - Will be automatically installed by Render during build
- Any local development files or test files
- IDE-specific files (`.vscode/`, `.idea/`, etc.)

### ✅ Files to Keep:
- All `.html`, `.css`, `.js` files
- `images/` directory and all assets
- `package.json` and `package-lock.json`
- `server.js` (main application file)
- `README.md`

### 📋 Pre-Deployment Checklist:
1. ✅ Remove `.env` file from repository
2. ✅ Add `.env` to `.gitignore`
3. ✅ Configure `GEMINI_API_KEY` in Render dashboard
4. ✅ Update `package.json` with proper start script
5. ✅ Test locally before deployment

**⚠️ Important**: Never commit `.env` files to your repository. Use `.gitignore` to exclude them.

---

**Tutors Tuition** - Transforming education through personalized home tutoring experiences. 🎓