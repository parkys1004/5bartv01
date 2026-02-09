import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Box, Sparkles, Video, Calendar, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

type ServiceType = 'fashion' | 'product' | 'ai' | 'video';

const SERVICES = [
  { id: 'fashion', label: 'Fashion Editorial', icon: Camera, desc: '화보, 룩북, 인물 촬영' },
  { id: 'product', label: 'Product & Brand', icon: Box, desc: '제품 누끼, 연출컷' },
  { id: 'ai', label: 'AI Generation', icon: Sparkles, desc: 'AI 이미지, 복원, 합성' },
  { id: 'video', label: 'Commercial Film', icon: Video, desc: '광고 영상, 숏폼' },
];

const QuoteForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('unknown');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !date) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-surface border-t border-gray-900 flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 max-w-lg"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4 italic">Request Received</h3>
          <p className="text-gray-400 mb-8 font-sans">
            견적 요청이 성공적으로 전송되었습니다.<br/>
            검토 후 24시간 이내에 기재해주신 이메일로<br/>상세 견적서를 보내드리겠습니다.
          </p>
          <button 
            onClick={() => { setIsSuccess(false); setSelectedService(null); setDate(''); }}
            className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors font-sans"
          >
            새로운 견적 요청하기
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-surface border-t border-gray-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4 font-sans">Project Inquiry</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 italic">Get a Quote</h3>
          <p className="text-gray-400 text-sm md:text-base font-sans">
            프로젝트의 대략적인 정보를 알려주시면 빠르게 견적을 확인해 드립니다.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* 1. Service Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider font-sans">
              01. 촬영 종류 선택 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id as ServiceType)}
                  className={`
                    relative p-6 rounded-xl border cursor-pointer transition-all duration-300 group
                    ${selectedService === service.id 
                      ? 'bg-white/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                      : 'bg-black/40 border-gray-800 hover:border-gray-600 hover:bg-black/60'}
                  `}
                >
                  <div className="flex items-start justify-between mb-2">
                    <service.icon 
                      className={`w-6 h-6 ${selectedService === service.id ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`} 
                    />
                    {selectedService === service.id && (
                      <motion.div layoutId="check" className="text-blue-500">
                        <CheckCircle2 size={20} />
                      </motion.div>
                    )}
                  </div>
                  <h4 className={`text-lg font-bold mb-1 font-serif ${selectedService === service.id ? 'text-white' : 'text-gray-300'}`}>
                    {service.label}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 2. Date Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider flex items-center gap-2 font-sans">
                <Calendar size={16} /> 02. 희망 촬영일 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-black/50 border border-gray-800 rounded-lg p-4 text-base text-white focus:outline-none focus:border-blue-500 transition-colors [color-scheme:dark] font-sans"
              />
              <p className="text-xs text-gray-600 mt-2 font-sans">* 일정 조율이 필요한 경우 추후 변경 가능합니다.</p>
            </div>

            {/* 3. Budget & Details */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider flex items-center gap-2 font-sans">
                <DollarSign size={16} /> 03. 예산 범위
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/50 border border-gray-800 rounded-lg p-4 text-base text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer font-sans"
                >
                  <option value="unknown">미정 (상담 후 결정)</option>
                  <option value="small">~ 100만원</option>
                  <option value="medium">100만원 ~ 300만원</option>
                  <option value="large">300만원 ~ 500만원</option>
                  <option value="enterprise">500만원 이상</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ↓
                </div>
              </div>
            </div>
          </div>

           {/* 4. Contact Info */}
           <div>
              <label className="block text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider font-sans">
                04. 연락처 (이메일) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full bg-black/50 border border-gray-800 rounded-lg p-4 text-base text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700 font-sans"
              />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting || !selectedService || !date}
              className={`
                w-full md:w-auto px-12 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 font-sans
                ${isSubmitting || !selectedService || !date
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-lg shadow-white/10'}
              `}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>Request Estimate <ArrowRight size={20} /></>
              )}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default QuoteForm;