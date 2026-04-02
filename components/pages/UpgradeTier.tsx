import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpgradeTier() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    // 임시 업그레이드 처리: localStorage의 등급을 'gold'로 변경
    localStorage.setItem('dummy-tier', 'gold');
    navigate('/'); // 메인 페이지로 재시도
  };

  const handleLogout = () => {
    localStorage.removeItem('firebase-token');
    localStorage.removeItem('dummy-tier');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary relative overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center px-4">
        <div className="w-16 h-16 mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50">
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight text-yellow-500">Upgrade Required</h1>
        <p className="text-secondary mb-2 max-w-md">
          This application requires a <strong className="text-white">Gold Tier</strong> subscription.
        </p>
        <p className="text-secondary mb-10 max-w-md text-sm">
          Your current tier is Silver. Please upgrade your account to access premium features.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleUpgrade}
            className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Simulate Upgrade to Gold
          </button>
          <button 
            onClick={handleLogout}
            className="px-8 py-3 border border-border text-primary font-medium rounded-full hover:bg-accent transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </div>
  );
}
