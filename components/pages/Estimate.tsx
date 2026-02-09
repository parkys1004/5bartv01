import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Wand2, Image, Video, Calendar, CheckCircle2 } from 'lucide-react';

type ServiceType = 'portrait' | 'commercial' | 'restoration' | 'video';

const SERVICES = [
  { id: 'portrait', label: 'Fine Art Portrait', icon: Camera, desc: '개인화보, 프로필, 룩북 촬영', basePrice: 500000 },
  { id: 'commercial', label: 'Product & Brand', icon: Image, desc: '제품 촬영, 누끼 및 합성', basePrice: 800000 },
  { id: 'restoration', label: 'AI Restoration', icon: Wand2, desc: '사진 복원, 화질 개선, AI 리터칭', basePrice: 300000 },
  { id: 'video', label: 'Sketch Film', icon: Video, desc: '촬영 현장 스케치 영상', basePrice: 600000 },
];

const TIERS = [
  { id: 'basic', label: 'Basic', multiplier: 1, desc: '촬영 원본 + 기본 색감 보정' },
  { id: 'retouch', label: 'Pro Retouch', multiplier: 1.5, desc: '정밀 피부 보정 + 톤앤매너 작업' },
  { id: 'ai_art', label: 'AI Creative', multiplier: 2.5, desc: 'AI 배경 합성 + 창작 아트웍 리터칭' },
];

const Estimate: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('basic');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate Estimate
  const base = selectedService ? SERVICES.find(s => s.id === selectedService)?.basePrice || 0 : 0;
  const multiplier = TIERS.find(t => t.id === selectedTier)?.multiplier || 1;
  const estimatedCost = base * multiplier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !date) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 bg-background flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 max-w-lg bg-surface border border-border rounded-2xl"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-primary mb-4 italic">Request Received</h3>
          <p className="text-secondary mb-8 font-sans">
            촬영 및 AI 작업 요청이 접수되었습니다.<br/>
            내용 확인 후 24시간 이내에 포트폴리오와 견적서를 보내드립니다.
          </p>
          <button 
            onClick={() => { setIsSuccess(false); setSelectedService(null); setName(''); setEmail(''); }}
            className="px-6 py-3 bg-primary text-background rounded-full font-bold hover:opacity-80 transition-colors font-sans"
          >
            추가 문의하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-2">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-12"
           >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4 italic">Start Project</h1>
            <p className="text-secondary">사진 촬영부터 AI 아트웍 작업까지, 맞춤형 견적을 확인하세요.</p>
           </motion.div>

           <form onSubmit={handleSubmit} className="space-y-12">
             
             {/* Service Selection */}
             <div>
                <label className="block text-sm font-bold text-red-500 mb-6 uppercase tracking-wider">01. Service Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id as ServiceType)}
                      className={`
                        p-6 rounded-xl border cursor-pointer transition-all duration-300
                        ${selectedService === service.id 
                          ? 'bg-red-900/10 border-red-500' 
                          : 'bg-surface border-border hover:border-secondary'}
                      `}
                    >
                      <service.icon className={`w-6 h-6 mb-4 ${selectedService === service.id ? 'text-red-500' : 'text-secondary'}`} />
                      <h4 className="text-lg font-bold text-primary font-serif">{service.label}</h4>
                      <p className="text-xs text-secondary mt-1">{service.desc}</p>
                    </div>
                  ))}
                </div>
             </div>

             {/* Tier Selection (Only shows if service selected) */}
             <AnimatePresence>
               {selectedService && (
                 <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                 >
                    <label className="block text-sm font-bold text-red-500 mb-6 uppercase tracking-wider">02. Retouching Level</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {TIERS.map((tier) => (
                        <div
                          key={tier.id}
                          onClick={() => setSelectedTier(tier.id)}
                          className={`
                            p-4 rounded-xl border cursor-pointer text-center transition-all
                            ${selectedTier === tier.id 
                              ? 'bg-primary text-background border-primary' 
                              : 'bg-surface border-border text-secondary hover:border-secondary'}
                          `}
                        >
                          <span className="block text-lg font-bold font-serif mb-1">{tier.label}</span>
                          <span className="text-[10px] uppercase tracking-wider opacity-70 block mb-2">x{tier.multiplier}</span>
                          <p className="text-[11px] opacity-60 leading-tight">{tier.desc}</p>
                        </div>
                      ))}
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>

             {/* Details */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <label className="block text-sm font-bold text-red-500 mb-4 uppercase tracking-wider">03. Date</label>
                   <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg p-4 text-base text-primary focus:outline-none focus:border-red-500 transition-colors [color-scheme:light] dark:[color-scheme:dark]"
                    />
                </div>
                <div>
                   <label className="block text-sm font-bold text-red-500 mb-4 uppercase tracking-wider">04. Contact</label>
                   <input
                      type="text"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg p-4 text-base text-primary mb-4 focus:outline-none focus:border-red-500"
                    />
                   <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg p-4 text-base text-primary focus:outline-none focus:border-red-500"
                    />
                </div>
             </div>

             <button
              type="submit"
              disabled={isSubmitting || !selectedService || !date}
              className={`
                w-full py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all
                ${isSubmitting || !selectedService || !date
                  ? 'bg-surface text-secondary cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-900/30'}
              `}
            >
              {isSubmitting ? 'Processing...' : 'Request Estimate'}
            </button>

           </form>
        </div>

        {/* Right Column: Sticky Estimate Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-colors duration-300">
               {/* Background Glow */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
               
               <h3 className="text-xl font-serif font-bold text-primary mb-6 italic border-b border-border pb-4">Estimated Cost</h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-secondary">
                   <span>Service Base</span>
                   <span>₩ {base.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-secondary">
                   <span>Retouch Level</span>
                   <span>x {multiplier}</span>
                 </div>
               </div>

               <div className="flex justify-between items-end text-primary pt-6 border-t border-border">
                 <span className="text-sm font-bold uppercase tracking-wider text-secondary">Total</span>
                 <span className="text-3xl font-bold font-sans text-red-500">
                   ₩ {estimatedCost.toLocaleString()}
                 </span>
               </div>
               
               <p className="text-xs text-secondary mt-6 leading-relaxed">
                 * AI 복원 작업의 경우 사진 손상도에 따라 추가 비용이 발생할 수 있습니다.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Estimate;