import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Rocket, Sparkles, Satellite, Moon } from 'lucide-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background (Stars, Sparkles, Planets) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 4 + 2) + 's'
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute text-yellow-300 animate-ping"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 2 + 1) + 's'
            }}
          >
            ✨
          </div>
        ))}
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-bounce shadow-2xl"
          style={{ animationDuration: '3s', filter: 'blur(0.5px)' }} />
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70 animate-bounce shadow-2xl"
          style={{ animationDuration: '4s', filter: 'blur(0.5px)' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-60 animate-bounce shadow-2xl"
          style={{ animationDuration: '5s', filter: 'blur(0.5px)' }} />
        <div className="absolute top-1/3 right-1/4 w-18 h-18 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-50 animate-bounce shadow-2xl"
          style={{ animationDuration: '6s', filter: 'blur(0.5px)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-45 animate-bounce shadow-2xl"
          style={{ animationDuration: '7s', filter: 'blur(0.5px)' }} />
        <div className="absolute top-16 left-1/4 text-gray-300 animate-spin" style={{ animationDuration: '20s' }}>
          <Satellite size={32} />
        </div>
        <div className="absolute bottom-20 right-1/3 text-gray-300 animate-bounce" style={{ animationDuration: '8s' }}>
          <Rocket size={36} />
        </div>
        <div className="absolute top-2/3 right-1/6 text-gray-300 animate-pulse" style={{ animationDuration: '4s' }}>
          <Moon size={28} />
        </div>
        <div className="absolute top-1/5 left-1/5 text-yellow-400 animate-spin" style={{ animationDuration: '10s' }}>
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-1/3 left-2/3 text-cyan-400 animate-spin" style={{ animationDuration: '15s' }}>
          <Sparkles size={20} />
        </div>
      </div>


      <App />
    </div>
  </StrictMode>,
)
