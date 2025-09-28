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
   Create a `.env` file in the root directory and add your API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

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

## 🚀 Deployment

1. **Environment Setup**: Ensure all environment variables are configured
2. **Production Build**: The application serves static files directly
3. **Server Configuration**: Configure your hosting platform to run `npm start`
4. **Domain Setup**: Point your domain to the deployed server

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

---

**Tutors Tuition** - Transforming education through personalized home tutoring experiences. 🎓