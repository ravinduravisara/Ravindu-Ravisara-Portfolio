# MERN Portfolio

A simple MERN-stack portfolio app with an Express/MongoDB backend and a React + Vite + Tailwind frontend.

## Prerequisites
- Node.js 18+
- MongoDB running locally (`mongodb://localhost:27017`)

## Setup

### Backend
1. Configure environment in `backend/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
```
2. Install deps and run:
```powershell
cd c:\Users\Ravindu\Desktop\portfolio\backend
npm install
npm run dev
```
3. Seed sample projects (optional):
```powershell
cd c:\Users\Ravindu\Desktop\portfolio\backend
npm run seed
```

### Frontend
1. Install deps and run dev server:
```powershell
cd c:\Users\Ravindu\Desktop\portfolio\frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. Projects are fetched from `http://localhost:5000/api/projects`.

## Project Structure
- Backend: Express API with Mongoose models and controllers
- Frontend: React components styled with Tailwind CSS

## Next Steps
- Add authentication for admin editing
- Add image upload (Cloudinary)
- Deploy backend (Render) and frontend (Netlify/Vercel)
