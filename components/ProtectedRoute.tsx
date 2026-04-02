import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// 앱에서 요구하는 최소 등급 (예시)
const APP_REQUIRED_TIER = 'gold';

// 등급 우선순위 맵핑 (비교용)
const TIER_LEVELS: Record<string, number> = {
  'free': 0,
  'silver': 1,
  'gold': 2,
  'platinum': 3
};

// 의사 코드용 더미 함수 (실제 구현 필요)
async function fetchUserFromFirebase(token: string): Promise<{ subscriptionEndDate: Date, tier: string }> {
  // 시뮬레이션을 위해 약간의 지연 추가
  return new Promise((resolve) => {
    setTimeout(() => {
      // 테스트를 위해 만료일을 미래로 설정
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      
      // 테스트를 위해 로컬 스토리지에서 등급을 가져옴 (기본값 silver)
      const storedTier = localStorage.getItem('dummy-tier') || 'silver';
      
      resolve({ 
        subscriptionEndDate: futureDate, 
        tier: storedTier 
      });
    }, 500);
  });
}

export default function ProtectedRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState<'authenticated' | 'unauthenticated' | 'expired' | 'upgrade_required'>('unauthenticated');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 1. 토큰 확인
        const token = localStorage.getItem('firebase-token');

        if (!token) {
          setAuthStatus('unauthenticated');
          setIsLoading(false);
          return;
        }

        // 2. Firebase DB에서 유저 정보 가져오기
        const user = await fetchUserFromFirebase(token);

        // 3. 만료 기간 및 등급 체크
        const now = new Date();
        
        if (now > user.subscriptionEndDate) {
          setAuthStatus('expired');
        } else if (TIER_LEVELS[user.tier] < TIER_LEVELS[APP_REQUIRED_TIER]) {
          setAuthStatus('upgrade_required');
        } else {
          setAuthStatus('authenticated');
        }
      } catch (error) {
        console.error("Auth check failed", error);
        setAuthStatus('unauthenticated');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary">
        <div className="animate-pulse-slow text-lg tracking-widest">AUTHENTICATING...</div>
      </div>
    );
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to="/login" replace />;
  }

  if (authStatus === 'expired') {
    return <Navigate to="/expired-notice-page" replace />;
  }

  if (authStatus === 'upgrade_required') {
    return <Navigate to="/upgrade-tier-page" replace />;
  }

  return <Outlet />;
}
