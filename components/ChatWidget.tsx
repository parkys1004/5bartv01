import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 김지훈의 AI 어시스턴트입니다. 포트폴리오나 기술 스택에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponseText = await generateAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: aiResponseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '오류가 발생했습니다.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-zinc-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 font-sans"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-black/50 backdrop-blur">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-white text-sm">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white text-black rounded-tr-none' 
                        : 'bg-zinc-800 text-gray-200 rounded-tl-none border border-gray-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-gray-700">
                     <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-black/50 backdrop-blur">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="무엇이든 물어보세요..."
                  className="flex-1 bg-zinc-800 border-none rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-4 bg-white text-black rounded-full shadow-lg hover:shadow-white/20 z-50 flex items-center justify-center transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};

export default ChatWidget;