import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpiredNotice() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 토큰 삭제 후 로그인 페이지로 이동
    localStorage.removeItem('firebase-token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary relative overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-red-500">Access Expired</h1>
        <p className="text-secondary mb-10 max-w-md">
          Your access period has expired. Please contact support to renew your subscription.
        </p>
        <button 
          onClick={handleLogout}
          className="px-8 py-3 border border-border text-primary font-medium rounded-full hover:bg-accent transition-colors duration-300"
        >
          Return to Login
        </button>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </div>
  );
}
