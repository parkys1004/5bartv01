import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 임시 로그인 처리: localStorage에 더미 토큰 저장
    localStorage.setItem('firebase-token', 'dummy-token-123');
    // 테스트를 위해 초기 등급을 silver로 설정 (업그레이드 페이지 유도)
    localStorage.setItem('dummy-tier', 'silver');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary relative overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Login Required</h1>
        <p className="text-secondary mb-10 max-w-md">
          Please log in to access the application. This is a simulated login page for the protected route demonstration.
        </p>
        <button 
          onClick={handleLogin}
          className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Simulate Login
        </button>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </div>
  );
}
