import { Project, Skill } from './types';

export const PORTFOLIO_DATA = {
  name: "5barTV",
  title: "Creative Visual Director",
  bio: "순간을 영원으로 기록하는 비주얼 디렉터입니다. 감각적인 촬영과 섬세한 편집으로 당신만의 스토리를 시네마틱하게 완성합니다.",
  aboutDetailed: `
    안녕하세요, 5barTV의 메인 디렉터입니다.

    영상은 단순한 기록을 넘어, 그 날의 온도와 감정까지 담아내는 매체라고 생각합니다.
    CF, 뮤직비디오, 브랜드 필름 등 다양한 필드에서의 경험을 바탕으로
    단 한 컷에도 의미를 담는 밀도 높은 작업을 추구합니다.

    최고의 장비와 트렌디한 감각으로, 클라이언트가 상상하는 그 이상의 결과물을 약속드립니다.
  `
};

export const SKILLS: Skill[] = [
  {
    category: "Cinematography",
    items: ["Sony FX6/A7S3", "Ronin 4D", "Drone Lighting", "Anamorphic Lens"]
  },
  {
    category: "Post-Production",
    items: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Final Cut Pro"]
  },
  {
    category: "Directing",
    items: ["Storyboarding", "Location Scouting", "Art Direction", "Sound Design"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Midnight Seoul",
    description: "서울의 밤거리를 주제로 한 시네마틱 브이로그. 네온사인과 도시의 고독을 4K 120fps로 포착.",
    techStack: ["Sony FX3", "DaVinci Resolve", "Color Grading"],
    imageUrl: "https://picsum.photos/800/600?random=10",
    link: "#"
  },
  {
    id: "2",
    title: "Vogue Editorial",
    description: "패션 매거진 화보 촬영 스케치 필름. 모델의 역동적인 움직임과 의상의 질감을 강조.",
    techStack: ["Canon R5", "Premiere Pro", "Slow Motion"],
    imageUrl: "https://picsum.photos/800/600?random=11",
    link: "#"
  },
  {
    id: "3",
    title: "Essence of Coffee",
    description: "프리미엄 카페 브랜드 광고 영상. 커피 추출 과정의 디테일을 매크로 렌즈로 담아냄.",
    techStack: ["Red Komodo", "Macro Lens", "Sound Design"],
    imageUrl: "https://picsum.photos/800/600?random=12",
    link: "#"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the AI assistant for 5barTV, a creative visual director portfolio.
Your role is to answer questions about 5barTV's services, skills, portfolio, and contact information.
You should be professional, creative, and helpful.

Use the following information to answer user queries:

Portfolio Name: ${PORTFOLIO_DATA.name}
Title: ${PORTFOLIO_DATA.title}
Bio: ${PORTFOLIO_DATA.bio}
About: ${PORTFOLIO_DATA.aboutDetailed}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

If you are asked about something not related to the portfolio or video production, politely guide the conversation back to 5barTV's services.
Answer in Korean unless asked in another language.
`;
