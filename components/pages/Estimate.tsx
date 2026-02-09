import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Box, Layers, Video, Calendar, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

type ServiceType = 'fashion' | 'product' | 'post' | 'video';

const SERVICES = [
  { id: 'fashion', label: 'Fashion Editorial', icon: Camera, desc: '화보, 룩북, 인물 촬영', basePrice: 1000000 },
  { id: 'product', label: 'Product & Brand', icon: Box, desc: '제품 누끼, 연출컷', basePrice: 800000 },
  { id: 'post', label: 'Post Production', icon: Layers, desc: '색보정, 편집, CG 합성', basePrice: 500000 },
  { id: 'video', label: 'Commercial Film', icon: Video, desc: '광고 영상, 숏폼', basePrice: 2000000 },
];

const TIERS = [
  { id: 'basic', label: 'Basic', multiplier: 1, desc: '기본 촬영 및 컷편집' },
  { id: 'standard', label: 'Standard', multiplier: 1.5, desc: '디테일 보정 및 모션그래픽' },
  { id: 'premium', label: 'Premium', multiplier: 2.5, desc: '올인원 크리에이티브 디렉팅' },
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
      <div className="min-h-screen pt-32 pb-24 px-6 bg-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 max-w-lg bg-surface border border-gray-800 rounded-2xl"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4 italic">Request Received</h3>
          <p className="text-gray-400 mb-8 font-sans">
            견적 요청이 성공적으로 전송되었습니다.<br/>
            담당자가 내용을 확인 후 24시간 이내에 연락드리겠습니다.
          </p>
          <button 
            onClick={() => { setIsSuccess(false); setSelectedService(null); setName(''); setEmail(''); }}
            className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors font-sans"
          >
            새로운 견적 요청하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-2">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-12"
           >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 italic">Get an Estimate</h1>
            <p className="text-gray-400">프로젝트 규모에 따른 예상 견적을 실시간으로 확인하세요.</p>
           </motion.div>

           <form onSubmit={handleSubmit} className="space-y-12">
             
             {/* Service Selection */}
             <div>
                <label className="block text-sm font-bold text-red-500 mb-6 uppercase tracking-wider">01. Select Service</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id as ServiceType)}
                      className={`
                        p-6 rounded-xl border cursor-pointer transition-all duration-300
                        ${selectedService === service.id 
                          ? 'bg-red-900/20 border-red-500' 
                          : 'bg-surface border-gray-800 hover:border-gray-600'}
                      `}
                    >
                      <service.icon className={`w-6 h-6 mb-4 ${selectedService === service.id ? 'text-red-500' : 'text-gray-500'}`} />
                      <h4 className="text-lg font-bold text-white font-serif">{service.label}</h4>
                      <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
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
                    <label className="block text-sm font-bold text-red-500 mb-6 uppercase tracking-wider">02. Project Scale</label>
                    <div className="grid grid-cols-3 gap-4">
                      {TIERS.map((tier) => (
                        <div
                          key={tier.id}
                          onClick={() => setSelectedTier(tier.id)}
                          className={`
                            p-4 rounded-xl border cursor-pointer text-center transition-all
                            ${selectedTier === tier.id 
                              ? 'bg-white text-black border-white' 
                              : 'bg-surface border-gray-800 text-gray-400 hover:border-gray-600'}
                          `}
                        >
                          <span className="block text-lg font-bold font-serif mb-1">{tier.label}</span>
                          <span className="text-[10px] uppercase tracking-wider opacity-70">x{tier.multiplier}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-500 text-sm">* {TIERS.find(t => t.id === selectedTier)?.desc}</p>
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
                      className="w-full bg-surface border border-gray-800 rounded-lg p-4 text-base text-white focus:outline-none focus:border-red-500 transition-colors [color-scheme:dark]"
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
                      className="w-full bg-surface border border-gray-800 rounded-lg p-4 text-base text-white mb-4 focus:outline-none focus:border-red-500"
                    />
                   <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface border border-gray-800 rounded-lg p-4 text-base text-white focus:outline-none focus:border-red-500"
                    />
                </div>
             </div>

             <button
              type="submit"
              disabled={isSubmitting || !selectedService || !date}
              className={`
                w-full py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all
                ${isSubmitting || !selectedService || !date
                  ? 'bg-gray-900 text-gray-600 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-900/30'}
              `}
            >
              {isSubmitting ? 'Processing...' : 'Submit Request'}
            </button>

           </form>
        </div>

        {/* Right Column: Sticky Estimate Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div className="bg-surface border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
               
               <h3 className="text-xl font-serif font-bold text-white mb-6 italic border-b border-gray-800 pb-4">Estimated Cost</h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-gray-400">
                   <span>Base Price</span>
                   <span>₩ {base.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-gray-400">
                   <span>Scale Multiplier</span>
                   <span>x {multiplier}</span>
                 </div>
               </div>

               <div className="flex justify-between items-end text-white pt-6 border-t border-gray-800">
                 <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Total</span>
                 <span className="text-3xl font-bold font-sans text-red-500">
                   ₩ {estimatedCost.toLocaleString()}
                 </span>
               </div>
               
               <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                 * 위 견적은 예상 금액이며, 프로젝트 세부 내용에 따라 최종 견적은 달라질 수 있습니다.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Estimate;