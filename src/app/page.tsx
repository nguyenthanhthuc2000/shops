'use client';

import { useEffect, useState } from 'react';
// https://lixi.momo.vn/lixi/EpLBlyPZ6E7VY1y thay thơ bằng qr và ảnh 
// 140baa847f48f216ab59.jpg thay thế ảnh ở trên
// Component tạo hiệu ứng floating elements tinh tế
const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    emoji: string;
  }>>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      const emojis = ['🌸', '🌺', '🌷', '💖', '✨', '🌟'];
      
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          delay: Math.random() * 5,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-60"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}rem`,
            animation: `gentleFloat 6s ease-in-out ${element.delay}s infinite`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
};

// Component tạo background đẹp mắt và tinh tế
const BeautifulBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - Soft and elegant */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
      
      {/* Soft gradient layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-pink-100/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-transparent via-purple-100/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-rose-100/25 to-transparent"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(236,72,153,0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(168,85,247,0.1) 0%, transparent 50%)
        `,
      }}></div>
    </div>
  );
};

// Component tạo hiệu ứng glow tinh tế
const SoftGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-200/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Beautiful Background */}
      <BeautifulBackground />
      <SoftGlow />
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Chinese Text Section */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-pink-200/50 shadow-xl shadow-pink-500/10">
              <div className="space-y-6 text-center">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  月落金杯映玉光，
                </p>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  一朵花笑散烟霜。
                </p>
                <p className="text-xl md:text-2xl text-pink-600 font-light leading-relaxed">
                  十月二十香满路，
                </p>
                <p className="text-xl md:text-2xl text-purple-600 font-light leading-relaxed">
                  愿君留艳在人间。
                </p>
              </div>
            </div>
          </div>

          {/* Image and QR Section */}
          <div className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-pink-200/50 shadow-xl shadow-pink-500/10">
              <div className="text-center space-y-6">
                <img 
                  src="/140baa847f48f216ab59.jpg" 
                  alt="Women's Day" 
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 font-medium">
                    Chỉ Trâm, Như và Trúc <br />
                    Khánh vui lòng không quét QR
                  </p>
                  <a 
                    href="https://lixi.momo.vn/lixi/EpLBlyPZ6E7VY1y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Nhận lì xì 🧧
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) rotate(5deg);
            opacity: 0.8;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
