import { img } from '../lib/img';
// Portfolio Data Configuration
// 所有作品集数据的集中管理

export interface WorkExperience {
  period: string;
  duration: string;
  company: string;
  position: string;
  level?: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  image: string; // deprecated, keep for compatibility
  category: 'business' | 'mobile' | 'personal' | 'ai';
  link?: string;
  images: string[]; // multi-image gallery for each project
}

export interface KeyProject {
  id: string;
  title: string;
  tag: string;
  tagType: 'iteration' | 'new';
  background: string;
  process: string;
  dataValidation: string;
  dataHighlights: string[];
}

export interface Illustration {
  id: string;
  title: string;
  image: string;
  tags: string[];
  width: number; // for masonry layout
  height: number;
}

export interface VideoWork {
  id: string;
  title: string;
  bandName?: string;
  description: string;
  cover: string;
  tags: string[];
  videoUrl?: string;
}

export interface CatMember {
  id: string;
  name: string;
  personality: string;
  age: string;
  favorite: string;
  images: string[];
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // icon component name
}

export interface Education {
  type: string;
  school: string;
  major: string;
  period: string;
  certification: string;
}

export interface ProfessionalAchievement {
  title: string;
  description: string;
  dataHighlights: string[];
}

// ========================================
// 个人信息
// ========================================
export const personalInfo = {
  name: '陈益',
  gender: '男',
  birthdate: '1998.05.25',
  age: 27,
  phone: '137-1846-0105',
  email: 'chen252213@163.com',
  education: '本科：工业设计',
  city: '北京',
  experience: 'B端设计经验：4.5年以上',
  jobIntention: '求职意向：B端 / AI 体验设计师',
  title: 'B端 / AI 体验设计师',
  location: '北京',
  bio: `深耕B端设计领域4.5年，专注AI产品设计与人机交互体验优化。
        主导过企业级AI应用平台从0-1搭建，具备全流程设计与数据验证能力。
        工作之余热爱音乐，弹奏Fender电吉他。`,
  slogan: `"设计不仅是视觉呈现，更是解决问题的思维方式。"`,
};

// ========================================
// 社交链接
// ========================================
export const socialLinks: SocialLink[] = [
  { name: 'Behance', url: 'https://behance.net/chenyi', icon: 'behance' },
  { name: 'Notion', url: 'https://notion.so/chenyi', icon: 'notion' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/chenyi', icon: 'bilibili' },
  { name: 'YouTube', url: 'https://youtube.com/@chenyi', icon: 'youtube' },
  { name: '小红书', url: 'https://xiaohongshu.com/user/profile/chenyi', icon: 'xiaohongshu' },
  { name: '抖音', url: 'https://douyin.com/user/chenyi', icon: 'douyin' },
  { name: 'X (Twitter)', url: 'https://x.com/chenyi_design', icon: 'twitter' },
  { name: 'Trend', url: 'https://trend.com/chenyi', icon: 'trend' },
  { name: 'Instagram', url: 'https://instagram.com/chenyi.design', icon: 'instagram' },
  { name: 'Pixiv', url: 'https://pixiv.net/users/chenyi', icon: 'pixiv' },
];

// ========================================
// 工作经历
// ========================================
export const workExperiences: WorkExperience[] = [
  {
    period: '2023.12 - 至今',
    duration: '2年+',
    company: '北京三快在线科技有限公司',
    position: 'B端 体验设计师',
    level: 'L6 职级（高级）',
    description: '协同团队主导 2 个企业级 AI 应用平台从 0-1 搭建，负责 7 次核心功能改版迭代，优化核心流程 40+，为质效技术部 1100+ 测试工程师提供 AI 应用开发服务',
    achievements: [
      '主导建立部门 AI 产品级设计规范与组件库，推动设计标准化，提升团队效率 30%+',
      '熟练运用用户访谈、可用性测试、数据分析挖掘 B 端用户需求',
      '从业务效能出发解决痛点、推动方案落地，提升测试效率及产研效能质量',
      '具备全流程设计与数据验证能力',
    ],
  },
  {
    period: '2021.04 - 2023.09',
    duration: '2年5个月',
    company: '企家有道网络技术（北京）有限公司',
    position: 'B端 体验设计师',
    level: 'T4 职级（中级）',
    description: '负责「薪人薪事 HRSaaS 人力资源管理平台」的多个核心模块全流程交互设计',
    achievements: [
      '任职期间独立完成工资/招聘/考勤/绩效等多个核心模块 10+ 次重点改版',
      '深度理解 B 端 HRSaaS 业务逻辑，主导 PC 端与 App 端设计组件库的搭建、迭代及维护',
      '与 TL 共同申请 4 项外观设计专利',
    ],
  },
  {
    period: '2020.07 - 2021.04',
    duration: '8个月',
    company: '北京润宇信息科技股份有限公司',
    position: 'B端 UI 设计师',
    description: '主要为航空五院提供「大型云计算管理平台」的 UI/UX 设计',
    achievements: [
      '交互设计文档的产出、交互动效的设计',
      '项目已成功上线',
    ],
  },
];

// ========================================
// 重点项目经验
// ========================================
export const keyProjects: KeyProject[] = [
  {
    id: 'project-bots',
    title: 'Bots 工作流编排 - 支持 UI自动化类型',
    tag: '业务迭代',
    tagType: 'iteration',
    background: '为解决 QA 用户琐碎测试任务多、成本高、效率低及设备切换繁琐的痛点，通过 Bots - 智能测试平台，支持 UI 自动化能力，使 QA 通过在工作流模式下编排 UI 指令、并能自主搭建完成自动化测试用例，助力提效降本、提升产研效能',
    process: '开展了 10+ 测试工程师的深度访谈、3次 可用性测试，基于用户痛点梳理出4条设计策略，并做了4款 竞品的调研报告，输出交互原型 30+，指令图标视觉设计 180+，并与产品进行了多轮测试验收，积极收集反馈并进行了数据验证',
    dataValidation: '上线后1个月，用户满意度平均为 6.1分（7分制），工作效率提升 45%，测试用例编写时间缩短了 60%，测试缺陷排查准确率提升 45%，产研效能显著提升，获得测试部门领导的高度认可',
    dataHighlights: ['用户满意度 6.1分', '工作效率提升 45%', '编写时间缩短 60%', '缺陷排查准确率提升 45%'],
  },
  {
    id: 'project-miaoche',
    title: '妙策 - 移动端智能测试助手',
    tag: '0-1新产品',
    tagType: 'new',
    background: '依托美团移动端产品质量测试的核心需求，本项目将 Bots-PC 端 AI 应用适配移动端测试场景，通过智能化测试实现效率提升、质量保障与人力成本优化，赋能 QA 团队聚焦创新业务',
    process: '开展了 10+ 测试工程师的深度访谈、将业务目标拆解为可量化的12条设计指标，并组织开展了 MVP 产品快速验证方案；在项目时间有限的情况下，对设计点进行了优先级排序，并根据美团内部现有的设计规范进行原型设计，并在此过程中进行了 3次 可用性测试，最终共产出了 40+ 设计稿，并沉淀了移动端 AI 对话交互范式',
    dataValidation: '上线后1个月，用户满意度平均为 5.57分（7分制），官方应用的任务平均完成率高达 97%，功能体验类工单的平均发起率低至 8%，首页推荐卡片的任务完成率达到 66%，如期达成预定目标，大幅节省了 QA 用户的工作效率与成本',
    dataHighlights: ['用户满意度 5.57分', '任务完成率 97%', '工单发起率 8%', '卡片完成率 66%'],
  },
];

// ========================================
// 专业沉淀
// ========================================
export const professionalAchievements: ProfessionalAchievement[] = [
  {
    title: '《AI 时代-企业内部工具研发的协作方法论》',
    description: '组织内部研发团队全员使用 Cursor-VibeCoding，基于平台设计规范及前端样式 Token，测试沉淀各角色适配系统规范的提示词模板，可直接复用。目前小型迭代优化项目已投入到实际项目流程当中',
    dataHighlights: ['研发成本至少降低 50%'],
  },
];

// ========================================
// 教育背景
// ========================================
export const educationBackground: Education[] = [
  {
    type: '统招本科',
    school: '北京印刷学院',
    major: '工业设计专业（智能产品方向）',
    period: '2016.09.01 - 2020.07.01',
    certification: '英语 CET-4',
  },
  {
    type: '短期交换',
    school: '日本千叶大学',
    major: 'Top-D 项目（工业设计专业）',
    period: '2019.04.01 - 2019.08.01',
    certification: '日语 N1',
  },
];

// ========================================
// 设计作品
// ========================================
export const designProjects: Project[] = [
  {
    id: 'project-1',
    title: 'AI Workflow Orchestration Platform',
    subtitle: '业务项目',
    description: 'An enterprise-grade AI workflow platform enabling non-technical users to build complex automation pipelines through intuitive drag-and-drop interface.',
    tags: ['AI/ML', 'Enterprise SaaS', 'Workflow'],
    image: img('/images/project 1/1@2x.png'),
    category: 'business',
    images: [
      img('/images/project 1/1@2x.png'),
      img('/images/project 1/2@2x.png'),
      img('/images/project 1/3@2x.png'),
      img('/images/project 1/4@2x.png'),
      img('/images/project 1/5@2x.png'),
      img('/images/project 1/6@2x.png'),
      img('/images/project 1/9@2x.png'),
      img('/images/project 1/11@2x.png'),
      img('/images/project 1/12@2x.png'),
      img('/images/project 1/13@2x.png'),
      img('/images/project 1/14@2x.png'),
      img('/images/project 1/15@2x.png'),
      img('/images/project 1/16@2x.png'),
      img('/images/project 1/17@2x.png'),
      img('/images/project 1/18@2x.png'),
      img('/images/project 1/19@2x.png'),
    ],
  },
  {
    id: 'project-2',
    title: 'Mobile Decision Assistant',
    subtitle: '移动端项目',
    description: 'A mobile-first decision support app leveraging AI to provide real-time business insights and recommendations on the go.',
    tags: ['Mobile', 'AI Assistant', 'Data Viz'],
    image: img('/images/project 2/1@2x.png'),
    category: 'mobile',
    images: [
      img('/images/project 2/1@2x.png'),
      img('/images/project 2/2@2x.png'),
      img('/images/project 2/3@2x.png'),
      img('/images/project 2/4@2x.png'),
      img('/images/project 2/5@2x.png'),
      img('/images/project 2/6@2x.png'),
      img('/images/project 2/7@2x.png'),
      img('/images/project 2/8@2x.png'),
      img('/images/project 2/9@2x.png'),
      img('/images/project 2/10@2x.png'),
      img('/images/project 2/11@2x.png'),
      img('/images/project 2/12@2x.png'),
      img('/images/project 2/13@2x.png'),
      img('/images/project 2/14@2x.png'),
      img('/images/project 2/15@2x.png'),
      img('/images/project 2/16@2x.png'),
      img('/images/project 2/17@2x.png'),
      img('/images/project 2/18@2x.png'),
      img('/images/project 2/19@2x.png'),
    ],
  },
  {
    id: 'project-3',
    title: 'Personal Design System',
    subtitle: '自驱项目',
    description: 'A comprehensive design system built from scratch, featuring reusable components, documentation, and design tokens for rapid prototyping.',
    tags: ['Design System', 'Components', 'Documentation'],
    image: img('/images/project 3/1@2x.png'),
    category: 'personal',
    images: [
      img('/images/project 3/1@2x.png'),
      img('/images/project 3/2@2x.png'),
      img('/images/project 3/3@2x.png'),
      img('/images/project 3/4@2x.png'),
      img('/images/project 3/5@2x.png'),
      img('/images/project 3/6@2x.png'),
      img('/images/project 3/7@2x.png'),
      img('/images/project 3/8@2x.png'),
      img('/images/project 3/9@2x.png'),
      img('/images/project 3/10@2x.png'),
      img('/images/project 3/11@2x.png'),
      img('/images/project 3/12@2x.png'),
      img('/images/project 3/13@2x.png'),
      img('/images/project 3/14@2x.png'),
    ],
  },
];

// ========================================
// 插画作品
// ========================================
export const illustrations: Illustration[] = [
  { id: 'ill-1', title: 'Digital Dreams', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop', tags: ['Digital Art', 'Fantasy'], width: 1, height: 0.67 },
  { id: 'ill-2', title: 'Neon City Nights', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=900&fit=crop', tags: ['Cyberpunk', 'Urban'], width: 1, height: 1.5 },
  { id: 'ill-3', title: 'Ocean Whispers', image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=600&h=500&fit=crop', tags: ['Nature', 'Abstract'], width: 1, height: 0.83 },
  { id: 'ill-4', title: 'Mechanical Heart', image: 'https://images.unsplash.com/photo-1614851099511-773054f4db30?w=600&h=750&fit=crop', tags: ['Sci-Fi', 'Character'], width: 1, height: 1.25 },
  { id: 'ill-5', title: 'Autumn Memories', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&h=450&fit=crop', tags: ['Landscape', 'Warm'], width: 1, height: 0.75 },
  { id: 'ill-6', title: 'Cosmic Wanderer', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=850&fit=crop', tags: ['Space', 'Surreal'], width: 1, height: 1.42 },
  { id: 'ill-7', title: 'Urban Jungle', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=550&fit=crop', tags: ['Urban', 'Nature'], width: 1, height: 0.92 },
  { id: 'ill-8', title: 'Electric Soul', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=700&fit=crop', tags: ['Portrait', 'Neon'], width: 1, height: 1.17 },
  { id: 'ill-9', title: 'Floating Gardens', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=480&fit=crop', tags: ['Fantasy', 'Garden'], width: 1, height: 0.80 },
];

// ========================================
// 演奏视频
// ========================================
export const performanceVideos: VideoWork[] = [
  {
    id: 'perf-1',
    title: 'Purple Rain Reimagined',
    bandName: 'Solo Session',
    description: 'An instrumental interpretation of Prince\'s masterpiece on my beloved Fender Stratocaster.',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=720&h=480&fit=crop',
    tags: ['Blues Rock', 'Fender Strat', 'Cover'],
  },
  {
    id: 'perf-2',
    title: 'Midnight Jazz Improvisation',
    bandName: 'Jazz Collective',
    description: 'Late night jam session with local jazz musicians at a hidden Beijing jazz bar.',
    cover: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=720&h=480&fit=crop',
    tags: ['Jazz', 'Improvisation', 'Live'],
  },
  {
    id: 'perf-3',
    title: 'Neon Lights Solo',
    bandName: 'Solo Session',
    description: 'Original composition blending electronic ambient sounds with raw guitar tones.',
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=720&h=480&fit=crop',
    tags: ['Original', 'Ambient', 'Electronic'],
  },
  {
    id: 'perf-4',
    title: 'Weekend Jam',
    bandName: 'The Weekend Warriors',
    description: 'Casual weekend gathering with friends, playing our favorite rock classics.',
    cover: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=720&h=480&fit=crop',
    tags: ['Rock', 'Jam Session', 'Classic'],
  },
];

// ========================================
// 动画视频
// ========================================
export const animationVideos: VideoWork[] = [
  {
    id: 'anim-1',
    title: 'Particle Life',
    description: 'A generative animation exploring emergent behaviors through thousands of interacting particles.',
    cover: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=720&h=480&fit=crop',
    tags: ['Generative', 'Particles', 'GLSL'],
  },
  {
    id: 'anim-2',
    title: 'Morphing Geometry',
    description: 'Abstract shapes continuously morphing between forms in a hypnotic dance of color and light.',
    cover: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=720&h=480&fit=crop',
    tags: ['Abstract', 'Motion Graphics', '3D'],
  },
  {
    id: 'anim-3',
    title: 'Data Flow Visualization',
    description: 'Real-time data streams visualized as flowing rivers of information through digital landscapes.',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&h=480&fit=crop',
    tags: ['Data Viz', 'Interactive', 'Real-time'],
  },
  {
    id: 'anim-4',
    title: 'Rhythmic Patterns',
    description: 'Audio-reactive visuals that pulse and transform in sync with musical beats.',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=720&h=480&fit=crop',
    tags: ['Audio Reactive', 'Visuals', 'Music'],
  },
];

// ========================================
// 音画视频
// ========================================
export const musicVideoVideos: VideoWork[] = [
  {
    id: 'mv-1',
    title: 'Ethereal Journey',
    description: 'A visual poem combining original music with surreal imagery, taking viewers through dreamlike landscapes.',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=720&h=480&fit=crop',
    tags: ['Music Video', 'Surreal', 'Original'],
  },
  {
    id: 'mv-2',
    title: 'City Pulse',
    description: 'Urban rhythms captured through timelapse cinematography paired with electronic soundscapes.',
    cover: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=720&h=480&fit=crop',
    tags: ['Timelapse', 'Urban', 'Electronic'],
  },
  {
    id: 'mv-3',
    title: 'Quiet Moments',
    description: 'Intimate visual stories celebrating the beauty found in everyday stillness and solitude.',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=720&h=480&fit=crop',
    tags: ['Cinematic', 'Emotional', 'Storytelling'],
  },
  {
    id: 'mv-4',
    title: 'Digital Dreamscape',
    description: 'A journey through virtual spaces where light and shadow tell their own story.',
    cover: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=720&h=480&fit=crop',
    tags: ['Digital Art', 'Atmospheric', 'Experimental'],
  },
];

// ========================================
// 家庭成员（猫咪）
// ========================================
export const familyMembers: CatMember[] = [
  {
    id: 'cat-1',
    name: 'Mochi',
    personality: 'The Gentle Leader',
    age: '4 years old',
    favorite: 'Sunbeams & Chin Scratches',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&h=650&fit=crop',
    ],
    description: 'Mochi is the eldest and wisest of the household. With a calm demeanor and watchful eyes, this fluffy guardian oversees all household activities from the best sunbeam spot in the apartment. Mochi\'s favorite pastime is judging humans while looking majestic.',
  },
  {
    id: 'cat-2',
    name: 'Pudding',
    personality: 'The Mischievous Explorer',
    age: '2.5 years old',
    favorite: 'Cardboard Boxes & Midnight Zoomies',
    images: [
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1573865526739-10c1dd85fd14?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&h=650&fit=crop',
    ],
    description: 'Pudding never met a box they didn\'t want to sit in or a shelf too high to climb. This curious explorer keeps everyone on their toes with unexpected appearances and midnight sprints through the hallway.',
  },
  {
    id: 'cat-3',
    name: 'Tofu',
    personality: 'The Cuddle Champion',
    age: '1.5 years old',
    favorite: 'Laps & Warm Blankets',
    images: [
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1573865526739-10c1dd85fd14?w=500&h=650&fit=crop',
    ],
    description: 'If there\'s a lap available, Tofu will find it. This affectionate little soul believes every moment is an opportunity for snuggles. Tofu\'s purr can be heard from across the room and has been known to cure bad days instantly.',
  },
  {
    id: 'cat-4',
    name: 'Bean',
    personality: 'The Tiny Terror',
    age: '8 months old',
    favorite: 'Chasing Laser Dots & Attacking Toes',
    images: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&h=650&fit=crop',
      'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&h=650&fit=crop',
    ],
    description: 'The youngest and smallest but definitely the mightiest. Bean brings chaos and joy in equal measure, keeping the older cats young at heart (or exhausted). Every day is a new adventure when Bean is around.',
  },
];
