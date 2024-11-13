'use client'
import { useState, useEffect, useCallback } from 'react';
import background from "../../video/background.mp4"; 
import '../header/header.css';
import { Mail, Phone, Menu, ArrowRight } from 'lucide-react';
import logo from '../../imgs/logo.png'


function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const animateTyping = useCallback(() => {
    let i = 0;
    setDisplayedText('');
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    const cleanup = animateTyping();
    return cleanup;
  }, [animateTyping]);

  return { displayedText, isTypingComplete };
}

export default function Header() {
  const { displayedText, isTypingComplete } = useTypingEffect("  Descubra Soluções Inovadoras em Tecnologia.", 50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderTextWithHighlight = (text: string) => {
    return text.split(" ").map((word, index) => {
      if (word === "Tecnologia.") {
        return (
          <span key={index} className="bg-special text-white p-1 rounded-md">
            {word}
          </span>
        );
      }
      return <span className='' key={index}>{word} </span>;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden h-full bg-fixed">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-50"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="relative z-20 h-full flex flex-col ">
        <header className="container mx-auto px-4 ">
          <nav className="flex items-center justify-between py-6">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" width={96} height={96} className='w-24 ' />
            </a>
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center justify-center space-x-8 w-full">
                <a href="/" className="text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-[#714BDB] to-[#714BDB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>HOME</span></a>
                <a href="/" className="text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-[#714BDB] to-[#714BDB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>CLIENTES</span></a>
                <a href="/" className="text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-[#714BDB] to-[#714BDB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>PRODUTOS</span></a>
                <a href="/" className="text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out"><span className='bg-left-bottom bg-gradient-to-r from-[#714BDB] to-[#714BDB] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>QUEM SOMOS?</span></a>
              </div>
              <div className="flex items-center ml-auto space-x-4">
                <button className="flex items-center text-white hover:text-gray-300 hover:scale-110 transition-transform">
                  <Mail className="mr-2 text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out" /> 
                </button>
                <button className="flex items-center text-white hover:text-gray-300 hover:scale-110 transition-transform">
                  <Phone className="mr-2 text-white hover:text-gray-300 hover:scale-110 group transition-all duration-300 ease-in-out" /> 
                </button>
              </div>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </button>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden bg-transparent bg-opacity-90 p-4">
            <a href="/" className="block text-white py-2">HOME</a>
            <a href="/" className="block text-white py-2">CLIENTES</a>
            <a href="/" className="block text-white py-2">PRODUTOS</a>
            <a href="/" className="block text-white py-2">QUEM SOMOS?</a>
            <div className="flex justify-between mt-4">
              <button className="flex items-center text-white">
                <Mail className="mr-2" /> Contato
              </button>
              <button className="flex items-center text-white">
                <Phone className="mr-2" /> Telefone
              </button>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 mt-16 md:mt-16">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white text-center md:text-center md:pl-40 md:pr-40">
            {renderTextWithHighlight(displayedText)}
            {!isTypingComplete && <span className="animate-blink">|</span>}
          </h1>
        </div>

        <main className="container mx-auto flex items-center flex-grow">
          <div className="mt-8 flex flex-col justify-center items-center md:items-center gap-8 w-full text-center md:text-center">
            <p className='font-semibold text-white text-xl sm:text-lg'>Avance para o futuro com soluções tecnológicas sob medida. Agende sua consulta gratuita agora!</p>
            <button className="bg-[#714ADC] text-white px-6 py-3 text-base rounded flex items-center hover:scale-105 transition-transform hover:bg-[#4B53DB] hover:text-white">
              Solicite uma consulta gratuita
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}