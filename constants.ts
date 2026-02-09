import { Project, Skill } from './types';

export const PORTFOLIO_DATA = {
  name: "김지훈",
  title: "Creative Frontend Engineer",
  bio: "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 모던 웹 기술과 감각적인 디자인을 결합하여 몰입감 있는 디지털 경험을 만듭니다.",
  aboutDetailed: `
    안녕하세요, 김지훈입니다.
    
    코드는 단순한 기능 구현을 넘어, 사용자와 브랜드가 소통하는 가장 직관적인 언어라고 믿습니다.
    React, TypeScript, 그리고 WebGL을 활용한 인터랙티브 웹 개발에 깊은 관심을 가지고 있으며,
    성능 최적화와 접근성 준수에도 타협하지 않는 디테일을 추구합니다.
    
    끊임없이 변화하는 웹 생태계에서, 변하지 않는 가치는 '사용자 중심의 사고'라는 신념으로 개발합니다.
  `
};

export const SKILLS: Skill[] = [
  {
    category: "Core",
    items: ["React", "TypeScript", "Next.js", "Node.js"]
  },
  {
    category: "Styling & Motion",
    items: ["Tailwind CSS", "Framer Motion", "Three.js", "GSAP"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Figma"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Project Nexus",
    description: "실시간 데이터 시각화 대시보드. 대규모 트래픽 처리를 위한 WebSocket 최적화 및 D3.js 차트 구현.",
    techStack: ["React", "TypeScript", "D3.js", "Socket.io"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: "2",
    title: "Aura Commerce",
    description: "헤드리스 커머스 아키텍처를 기반으로 한 프리미엄 쇼핑몰. 3D 제품 뷰어 통합.",
    techStack: ["Next.js", "Three.js", "Tailwind", "Shopify API"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: "3",
    title: "Cinematic Archive",
    description: "영화 애호가를 위한 큐레이션 플랫폼. 넷플릭스 스타일의 UX/UI 및 개인화 추천 알고리즘 적용.",
    techStack: ["React", "Framer Motion", "Firebase", "TMDB API"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
너는 포트폴리오 웹사이트의 주인인 개발자 '김지훈'을 대신하는 AI 어시스턴트야.
방문자가 김지훈의 경력, 기술 스택, 프로젝트에 대해 물어보면 친절하고 전문적으로 한국어로 답변해줘.

김지훈의 정보:
- 직군: 프론트엔드 엔지니어
- 주요 기술: React, TypeScript, Tailwind CSS, WebGL
- 철학: 사용자 경험 중심, 디테일 추구
- 프로젝트: Nexus(데이터 시각화), Aura Commerce(3D 커머스), Cinematic Archive(영화 플랫폼)

답변은 200자 이내로 간결하게 핵심만 전달하고, 공손한 '해요'체를 사용해.
`;
