# 🐾 Paw Adoption - Pet Adoption System

A React-based pet adoption platform that connects loving families with pets in need of homes. Users can browse available pets, submit adoption applications, and surrender pets through an intuitive interface.

## ✨ Features

- Browse available pets with search and filter functionality
- View detailed pet profiles with photos and information
- Submit adoption applications through secure forms
- Pet surrender system for owners who need to rehome their pets
- Responsive design with Tailwind CSS
- Client-side routing with React Router

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pet-adoption-system-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: JSON Server (for development)

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── forms/         # Form components
└── App.jsx        # Main application component
```

## 🤝 Contributors

- Martin Mwangi - Full Stack Developer

## 🌐 Deployment

**Live Demo**: [Coming Soon]

**Frontend**: Deployed on Netlify  
**Backend**: Deployed on Render

## 📝 API Endpoints

- `GET /pets` - Fetch all available pets
- `POST /pets` - Add a new pet for adoption
- `POST /applications` - Submit adoption application

## 🔧 Development

To run the backend server:
```bash
json-server --watch db.json --port 3001
```

## 📄 License

This project is licensed under the MIT License.
