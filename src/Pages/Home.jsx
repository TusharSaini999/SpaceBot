import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const ISROHome = () => {
  const navigate = useNavigate();

  const startChat = () => {
    navigate('/chat');
  };

  return (
    <>
      <div className="relative z-10 px-4 py-8 h-screen flex flex-col items-center justify-center text-center">
        <div className="mb-16 animate-fade-in-up max-w-7xl w-full">
          {/* Rocket Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-full shadow-2xl animate-float">
                <Rocket size={56} className="text-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-glow">
            SpaceBot ISRO – AI Assistant
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-slide-in-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Your AI Guide to
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Satellite Data & Information Retrieval
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            SpaceBot is an AI-powered assistant that helps you explore information from{' '}
            <span className="text-orange-400 font-semibold">mosdac.gov.in</span> — including satellite missions, data formats, geospatial details, and more.
          </p>

          {/* Button */}
          <button
            onClick={startChat}
            className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center space-x-4 mx-auto animate-pulse hover:animate-none overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-3 group">
              <Rocket className="-rotate-90 group-hover:-translate-x-1 transition-transform duration-300" size={24} />
              <span>Start Asking Questions</span>
              <Rocket className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.5); }
          50% { text-shadow: 0 0 30px rgba(251, 146, 60, 0.8), 0 0 40px rgba(239, 68, 68, 0.6); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default ISROHome;
