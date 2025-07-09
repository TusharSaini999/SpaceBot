import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, Satellite, Rocket, Moon, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ISROChat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages([{
            id: 1,
            text: "🚀 Welcome to ISRO's AI Assistant! I'm here to help you explore India's space achievements, missions, and the fascinating world of space technology. What would you like to know about our cosmic journey?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString()
        }]);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: getBotResponse(inputMessage),
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (message) => {
        const lower = message.toLowerCase();
        if (lower.includes("chandrayaan") || lower.includes("mission")) {
            return "🌙 Chandrayaan is a key mission that proves India's lunar capabilities!";
        } else if (lower.includes("mangalyaan") || lower.includes("mars")) {
            return "🔴 Mangalyaan was a historic Mars mission launched by ISRO!";
        } else {
            return "That's a fascinating question! 🚀 Please ask more specifically.";
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div >
            {/* Cosmic Animated Background */}
            <div className="absolute inset-0 overflow-hidden z-0 backdrop-blur-md">
                {[...Array(150)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 4 + 2}s`
                        }}
                    />
                ))}

                <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-32 left-16 w-12 h-12 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '8s' }} />
                <div className="absolute top-1/2 left-10 w-10 h-10 bg-red-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '10s' }} />

                <div className="absolute top-16 left-1/4 text-gray-300 animate-spin" style={{ animationDuration: '20s' }}>
                    <Satellite size={32} />
                </div>
                <div className="absolute bottom-20 right-1/3 text-gray-300 animate-bounce" style={{ animationDuration: '8s' }}>
                    <Rocket size={36} />
                </div>
                <div className="absolute top-2/3 right-1/6 text-gray-300 animate-pulse" style={{ animationDuration: '4s' }}>
                    <Moon size={28} />
                </div>
            </div>

            {/* Navbar */}
            <div className="z-10 bg-black/40 backdrop-blur-md p-4 flex justify-between items-center border-b border-purple-800 shadow-md">
                {/* Left Side - App Title */}
                <div className="flex items-center space-x-2 text-white text-xl font-bold tracking-wide bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow">
                    <Rocket size={24} className="text-orange-400" />
                    <span>SpaceBOT ISRO</span>
                </div>

                {/* Right Side - Home Icon */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                >
                    <Home />
                    <span className="text-sm font-medium">Home</span>

                </button>
            </div>


            {/* Chat Area */}
            <div className="z-10 flex-1 overflow-y-auto p-4 pb-32 max-w-4xl mx-auto w-full">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`mb-4 animate-fade-in-up ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                    >
                        <div className={`inline-block px-4 py-3 rounded-2xl shadow ${msg.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-800 text-white border border-gray-700'}`}>
                            <p>{msg.text}</p>
                            <span className="text-xs opacity-70 block mt-1">{msg.timestamp}</span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="animate-fade-in-up text-left">
                        <div className="inline-block px-4 py-3 rounded-2xl bg-gray-800 text-white border border-gray-700">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Footer / Input */}
            <div className="z-10 fixed bottom-0 left-0 right-0 p-4">
                <div className="flex max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 px-4 py-3 rounded-l-2xl bg-gray-800 text-white focus:outline-none"
                        placeholder="Ask me about ISRO missions..."
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="px-6 py-3 bg-orange-500 text-white rounded-r-2xl hover:bg-orange-600 disabled:opacity-50"
                    >
                        <Send />
                    </button>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
        </div>
    );
};

export default ISROChat;
