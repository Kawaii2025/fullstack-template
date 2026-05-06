import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import pkg from '../package.json'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">🚀 {pkg.name}</h1>
      <div className="h-1 w-32 bg-blue-500 mb-6 rounded"></div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">About This Template</h2>
        <p className="text-gray-600 mb-4">
          This is a complete full stack template that includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Frontend:</strong> React + TypeScript + Vite + Tailwind CSS</li>
          <li><strong>Backend:</strong> Express.js + Node.js</li>
          <li><strong>Database:</strong> SQLite (with PostgreSQL support)</li>
          <li><strong>Deployment:</strong> GitHub Pages (frontend) + Vercel (backend)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Quick Start</h2>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700">
          <p>npm run dev:full</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Scripts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800">npm run dev</p>
            <p className="text-sm text-blue-600">Start frontend dev server</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800">npm run dev:backend</p>
            <p className="text-sm text-green-600">Start backend dev server</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold text-purple-800">npm run dev:full</p>
            <p className="text-sm text-purple-600">Start both frontend &amp; backend</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-semibold text-orange-800">npm run build</p>
            <p className="text-sm text-orange-600">Build for production</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
