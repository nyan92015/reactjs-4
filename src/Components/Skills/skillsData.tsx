export type skill = {
  skill: string;
  level: string;
};

const skillsData_FE: skill[] = [
  {
    skill: "HTML",
    level: "結構使える",
  },
  {
    skill: "CSS",
    level: "結構使える",
  },
  {
    skill: "SASS",
    level: "基本的な書き方がわかる",
  },
  {
    skill: "Javascript",
    level: "結構使える",
  },
  {
    skill: "Typescript",
    level: "覚えたて",
  },
  {
    skill: "React",
    level: "結構使える",
  },
  {
    skill: "Redux",
    level: "結構使える",
  },
  {
    skill: "cypress",
    level: "覚えたて",
  },
  {
    skill: "Jest",
    level: "覚えたて",
  },
];

const skillsData_BE: skill[] = [
  {
    skill: "PHP",
    level: "覚えたて",
  },
  {
    skill: "Larvel",
    level: "覚えたて",
  },
];

const skillsData_other: skill[] = [
  {
    skill: "C",
    level: "基本的な書き方がわかる",
  },
  {
    skill: "C++",
    level: "基本的な書き方がわかる",
  },
  {
    skill: "JAVA",
    level: "基本的な書き方がわかる",
  },
  {
    skill: "Python",
    level: "基本的な書き方がわかる",
  },
];

export type skills = {
  skillType: string;
  skills: skill[];
};

export const skillsDataList: skills[] = [
  {
    skillType: "フロントエンド",
    skills: skillsData_FE,
  },
  {
    skillType: "バックエンド",
    skills: skillsData_BE,
  },
  {
    skillType: "その他",
    skills: skillsData_other,
  },
];
