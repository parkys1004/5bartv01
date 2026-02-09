import { Project, Skill } from './types';

export const PORTFOLIO_DATA = {
  name: "5barTV",
  title: "Visual Director & AI Specialist",
  bio: "셔터가 닫히는 순간 예술이 시작됩니다. 하이엔드 포토그래피와 생성형 AI의 결합으로 현실 그 이상의 비주얼을 완성합니다.",
  aboutDetailed: `
    5barTV는 단순한 스튜디오가 아닙니다.
    우리는 광학적 렌즈로 포착한 '결정적 순간'에 최첨단 AI 기술을 더해 시각적 한계를 뛰어넘습니다.

    인물 사진의 미세한 피부 질감 복원부터, 상업 사진의 배경 생성 및 합성, 
    그리고 손상된 과거 사진의 완벽한 4K 복원까지.

    아날로그의 감성과 디지털의 정밀함이 만나는 곳,
    5barTV가 당신의 이미지를 완벽하게 재정의합니다.
  `
};

export const SKILLS: Skill[] = [
  {
    category: "High-End Photography",
    items: ["Phase One IQ4", "Sony A7R5", "Profoto Lighting", "Fine Art Portrait"]
  },
  {
    category: "AI & Retouching",
    items: ["Generative Fill", "Stable Diffusion", "Frequency Separation", "Old Photo Restoration"]
  },
  {
    category: "Creative Direction",
    items: ["Concept Art", "Set Design", "Visual Storytelling", "Color Grading"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Editorial Vogue",
    description: "스튜디오 인물 촬영본에 AI 배경 확장을 적용하여 초현실적인 패션 화보 완성.",
    techStack: ["Photography", "Generative Fill", "Retouching"],
    imageUrl: "https://picsum.photos/800/600?random=20",
    link: "#"
  },
  {
    id: "2",
    title: "Legacy Restoration",
    description: "1950년대 흑백 손상 사진을 4K 컬러로 복원. AI 노이즈 제거 및 디테일 재구성 기술 적용.",
    techStack: ["Restoration AI", "Colorization", "Detail Enhance"],
    imageUrl: "https://picsum.photos/800/600?random=21",
    link: "#"
  },
  {
    id: "3",
    title: "Product Surrealism",
    description: "제품 누끼 촬영 후 Stable Diffusion을 활용하여 브랜드 아이덴티티에 맞는 가상 공간 합성.",
    techStack: ["Commercial Photo", "Stable Diffusion", "Compositing"],
    imageUrl: "https://picsum.photos/800/600?random=22",
    link: "#"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the AI assistant for 5barTV, a studio specializing in High-End Photography and AI Retouching.
Your role is to explain how 5barTV combines traditional photography with modern AI technology to create perfect images.

Use the following information:
Portfolio Name: ${PORTFOLIO_DATA.name}
Title: ${PORTFOLIO_DATA.title}
Bio: ${PORTFOLIO_DATA.bio}
About: ${PORTFOLIO_DATA.aboutDetailed}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

Emphasize the synergy between human artistic direction (Photography) and AI precision (Retouching/Restoration).
Answer in Korean unless asked in another language.
`;