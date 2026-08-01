"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lalezar, Vazirmatn } from "next/font/google";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

function CoffeeCup({ isDark }: { isDark: boolean }) {
  const steamParticles = Array.from({ length: 12 }).map((_, i) => {
    const xOffset = (Math.sin(i * 12.9898) * 40);
    const delay = (i * 0.4) % 4;
    const duration = 3 + (i % 3) * 0.5;
    return { id: `steam-${i}`, xOffset, delay, duration };
  });

  const boilingBubbles = Array.from({ length: 8 }).map((_, i) => {
    const leftPos = 25 + (Math.sin(i * 17.34) * 25);
    const delay = (i * 0.3) % 1.5;
    const duration = 1.2 + (i % 3) * 0.3;
    const size = i % 2 === 0 ? "w-2 h-2" : "w-1.5 h-1.5";
    return { id: `bubble-${i}`, leftPos, delay, duration, size };
  });

  return (
    <div className="relative w-[300px] h-[380px] flex justify-center items-end pb-8">
      <div className={`absolute bottom-8 w-[260px] h-[40px] rounded-full blur-2xl transform scale-y-50 transition-colors duration-700 ${
        isDark ? "bg-black/40" : "bg-black/20"
      }`} />

      <div className="relative z-10">
        <div className={`w-[260px] h-[260px] rounded-full flex justify-center items-center relative transition-colors duration-700 shadow-[0_15px_40px_rgba(0,0,0,0.15),inset_0_-15px_30px_rgba(0,0,0,0.05)] ${
          isDark ? "bg-slate-800" : "bg-[#f0f0f0]"
        }`}>
          
          <div className={`w-[180px] h-[180px] rounded-full flex justify-center items-center transition-colors duration-700 shadow-[inset_0_8px_20px_rgba(0,0,0,0.1)] ${
            isDark ? "bg-slate-700" : "bg-[#e6e6e6]"
          }`}>
            
            <div className="relative w-[140px] h-[160px] z-20">
              
              <div className={`absolute bottom-0 w-full h-full rounded-b-[40%] rounded-t-[10%] shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.1),inset_15px_15px_30px_rgba(255,255,255,0.4)] transition-colors duration-700 ${
                isDark 
                  ? "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800" 
                  : "bg-gradient-to-br from-white via-[#f5f5f5] to-[#dcdcdc]"
              }`}>
                
                <div className={`absolute -top-5 left-[-12px] w-[165px] h-[40px] rounded-[50%] shadow-[0_8px_15px_rgba(0,0,0,0.1)] z-30 flex justify-center items-center transition-colors duration-700 ${
                  isDark 
                    ? "bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800" 
                    : "bg-gradient-to-r from-white via-[#f0f0f0] to-[#dcdcdc]"
                }`}>
                  
                  <div className={`w-[135px] h-[28px] rounded-[50%] shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] flex justify-center items-center overflow-hidden relative transition-colors duration-700 ${
                    isDark ? "bg-slate-900" : "bg-[#e8e8e8]"
                  }`}>
                    
                    <motion.div 
                      className={`w-[120px] h-[20px] rounded-[50%] shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)] relative transition-colors duration-700 ${
                        isDark ? "bg-amber-950" : "bg-[#6f4e37]"
                      }`}
                      animate={{
                        scaleY: [1, 1.04, 0.97, 1.02, 1],
                        scaleX: [1, 0.98, 1.01, 0.99, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                       <motion.div 
                         className="absolute top-1 left-2 w-10 h-2 bg-white/20 rounded-full blur-[2px]"
                         animate={{ x: [0, 2, -1, 0], opacity: [0.2, 0.4, 0.2] }}
                         transition={{ duration: 1.5, repeat: Infinity }}
                       />

                       {boilingBubbles.map((bubble) => (
                         <motion.span
                           key={bubble.id}
                           className={`absolute bottom-1 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)] ${
                             isDark 
                               ? "bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.7)]" 
                               : "bg-white/90 shadow-[0_0_10px_rgba(255,255,255,1)]"
                           } ${bubble.size}`}
                           style={{ left: `${bubble.leftPos}%` }}
                           initial={{ y: 0, opacity: 0, scale: 0 }}
                           animate={{
                             y: -10,
                             opacity: [0, 1, 0],
                             scale: [0, 1.3, 0.3],
                           }}
                           transition={{
                             duration: bubble.duration,
                             repeat: Infinity,
                             delay: bubble.delay,
                             ease: "easeOut",
                           }}
                         />
                       ))}
                    </motion.div>
                  </div>

                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-28 h-28 flex justify-center pointer-events-none z-40">
                    {steamParticles.map((particle) => (
                      <motion.span
                        key={particle.id}
                        className={`absolute bottom-0 w-4 h-12 rounded-full blur-md transition-colors duration-700 ${
                          isDark ? "bg-slate-200/70" : "bg-white/80"
                        }`}
                        initial={{ y: 0, opacity: 0, scale: 0.5, x: 0 }}
                        animate={{
                          y: -80,
                          opacity: [0, 0.9, 0],
                          scale: [0.5, 1.3, 2],
                          x: particle.xOffset,
                        }}
                        transition={{
                          duration: particle.duration,
                          repeat: Infinity,
                          delay: particle.delay,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>

                </div>
              </div>

              <div className="absolute top-[40px] -right-[45px] w-[60px] h-[95px] z-10 transform rotate-[-15deg]">
                <div className="absolute top-2 left-2 w-full h-full rounded-r-[50%] rounded-l-[10px] bg-black/10 blur-md z-0" />
                <div className={`absolute inset-0 rounded-r-[50%] rounded-l-[10px] transition-colors duration-700 ${
                  isDark ? "bg-slate-800" : "bg-[#d1d1d1]"
                }`} />
                <div className={`absolute inset-1 rounded-r-[45%] rounded-l-[8px] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] transition-colors duration-700 ${
                  isDark 
                    ? "bg-gradient-to-br from-slate-600 to-slate-700" 
                    : "bg-gradient-to-br from-white to-[#eaeaea]"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[55px] rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] transition-colors duration-700 ${
                    isDark ? "bg-slate-900" : "bg-[#e0e5ec]"
                  }`} />
                </div>
                <div className="absolute top-3 left-2 w-2 h-[65px] bg-white/40 blur-[2px] rounded-full transform rotate-2 pointer-events-none" />
                <div className={`absolute -top-2 left-1 w-6 h-5 rounded-b-full shadow-sm transition-colors duration-700 ${
                   isDark ? "bg-slate-700" : "bg-[#eaeaea]"
                }`} />
                <div className={`absolute -bottom-2 left-1 w-6 h-5 rounded-t-full shadow-sm transition-colors duration-700 ${
                   isDark ? "bg-slate-700" : "bg-[#eaeaea]"
                }`} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const slides = [
  {
    id: 1,
    title: "صبح خود را با قهوه تازه آغاز کنید",
    description: "هر روز صبح، یک فنجان قهوه تازه دم، انرژی و انگیزه‌ای بی‌نظیر به شما می‌دهد. طعمی که روزتان را می‌سازد.",
    buttonText: "سفارش صبحگاهی",
  },
  {
    id: 2,
    title: "طعمی که هرگز فراموش نمی‌کنید",
    description: "دانه‌های قهوه ما از بهترین مزارع جهان انتخاب شده‌اند. هر جرعه، یک تجربه منحصر به فرد از طعم و عطر.",
    buttonText: "کشف طعم‌ها",
  },
  {
    id: 3,
    title: "لحظات خاص با قهوه خاص",
    description: "قهوه ما فقط یک نوشیدنی نیست، یک همراه برای لحظات خاص زندگی شماست. با ما، هر لحظه ارزشمند است.",
    buttonText: "عضویت در باشگاه",
  },
];

export default function RealisticCoffeeCup() {
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen transition-colors duration-700 overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-[#e0e5ec]"
      }`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isDark
            ? "bg-slate-800 text-yellow-300 hover:bg-slate-700"
            : "bg-white text-orange-500 hover:bg-gray-100"
        }`}
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        )}
      </button>

      <div className="relative w-full max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1 text-center md:text-left space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-4xl md:text-5xl font-bold leading-tight transition-colors duration-700 ${lalezar.className} ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`text-lg md:text-xl leading-relaxed transition-colors duration-700 ${vazirmatn.className} ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ${vazirmatn.className} ${
                  isDark
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <CoffeeCup isDark={isDark} />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? `w-12 h-3 ${isDark ? "bg-orange-500" : "bg-orange-500"}`
                  : `w-3 h-3 ${isDark ? "bg-slate-600 hover:bg-slate-500" : "bg-slate-300 hover:bg-slate-400"}`
              }`}
            />
          ))}
        </div>
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-20 py-12 px-6"
      >
        <div className="max-w-4xl mx-auto">
       
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-12" />

         
          <div className="flex flex-col items-center space-y-6">
         
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
           
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 animate-spin-slow blur-sm" />
              
           
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 blur-xl opacity-50 animate-pulse" />
              
             
              <div className="relative w-32 h-32 rounded-full animate-bounce p-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  isDark ? "bg-slate-800" : "bg-white"
                }`}>
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 ">
                    <img className=" object-cover w-full h-full " src='./Gemini_Generated_Image_qcbkmuqcbkmuqcbk.png' alt="amir" />
                   
                   
                  </div>
                </div>
              </div>
            </motion.div>

      
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <a href="https://amirresume.netlify.app" className={`text-2xl md:text-3xl font-bold ${lalezar.className} ${
                isDark ? "text-white" : "text-slate-800"
              }`}>
           امیرعلی محمدی
              </a>
              <br />
              <a href="https://amirresume.netlify.app" className={`text-sm md:text-base ${vazirmatn.className} ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                طراح و توسعه‌دهنده
              </a>
            </motion.div>

          
          
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-sm ${vazirmatn.className} ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              © 2026 تمامی حقوق محفوظ است
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}