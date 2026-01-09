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
      // Các icon liên quan tới 7 viên ngọc rồng / Dragon Ball vibe
      const emojis = ['🟠', '⭐', '🐉', '💥', '⚡️'];
      
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
      {/* Base gradient - Dragon Ball / Ngọc Rồng themed */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 via-amber-400 to-sky-500"></div>
      
      {/* Soft gradient aura giống khí năng lượng */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-soft-light"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-900/60 via-transparent to-transparent mix-blend-soft-light"></div>
      
      {/* Subtle pattern giống các viên ngọc rồng */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(251,191,36,0.25) 0%, transparent 55%),
            radial-gradient(circle at 80% 15%, rgba(252,211,77,0.3) 0%, transparent 55%),
            radial-gradient(circle at 20% 80%, rgba(249,115,22,0.35) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, rgba(56,189,248,0.25) 0%, transparent 55%)
          `,
        }}
      ></div>
    </div>
  );
};

// Component tạo hiệu ứng glow tinh tế
const SoftGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vầng sáng như khí Ki xung quanh */}
      <div className="absolute -top-10 left-1/4 w-80 h-80 bg-amber-300/40 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/40 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-300/35 rounded-full blur-3xl mix-blend-screen"></div>
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Hero */}
        <section
          className={`w-full max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 border border-pink-200/60 shadow-sm shadow-pink-500/10 mb-6">
            <span className="text-xs text-gray-500">Nick tự động • Giao dịch 24/7</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          SHOP BÁN NICK NGỌC RỒNG ONLINE UY TÍN
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Kho nick Ngọc Rồng Online đa dạng, đầy đủ hành tinh, mọi mức giá. Tài khoản rõ nguồn gốc,
            bảo mật, hỗ trợ sau bán hàng tận tâm để bạn yên tâm cày cuốc, săn boss, PK cực đã.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://nickdaoquan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg shadow-pink-500/40 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
            >
            BẤM VÀO ĐÂY ĐỂ LỰA NICK NGAY
            </a>
          </div>
        </section>

        {/* Features / Lý do chọn */}
        <section
          className={`w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-pink-100 shadow-md shadow-pink-500/10 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Uy tín & minh bạch</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thông tin nick, hành tinh, đồ đạc, sức mạnh, hình ảnh được mô tả rõ ràng. Cam kết đúng
              như mô tả, sai hoàn tiền.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-pink-100 shadow-md shadow-pink-500/10 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Tự động giao dịch 24/7</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thanh toán xong nhận nick ngay tại web, không cần chờ đợi. Hệ thống hoạt động liên tục
              kể cả đêm khuya.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-pink-100 shadow-md shadow-pink-500/10 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Hỗ trợ tận tâm</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Có admin hỗ trợ khi cần đổi thông tin, khôi phục, giải đáp thắc mắc. Ưu tiên quyền lợi
              khách hàng lâu dài.
            </p>
          </div>
        </section>

        {/* Note / Cam kết */}
        <section
          className={`w-full max-w-3xl mx-auto transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-pink-200/60 shadow-xl shadow-pink-500/10 text-left">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Cam kết từ shop nick Ngọc Rồng
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Chúng tôi luôn đặt sự uy tín và trải nghiệm của anh em game thủ lên hàng đầu. Mọi giao
              dịch đều được lưu lại lịch sử, bảo mật thông tin và không can thiệp vào tài khoản sau khi
              đã bàn giao.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Nếu bạn đang tìm nơi mua nick Ngọc Rồng Online an toàn, giá hợp lý để chơi lâu dài, hãy
              truy cập ngay <a href="https://nickdaoquan.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-500">nickdaoquan.com</a> để chọn
              cho mình một tài khoản ưng ý nhé!
            </p>
          </div>
        </section>
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
