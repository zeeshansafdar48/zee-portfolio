interface ISkills {
  [category: string]: string[];
}

export const skills: ISkills = {
  all: [], // 💥 very important to make it empty array as logic define in code to populate it with All
  technologies: [
    'HTML5',
    'CSS3',
    'Sass',
    'JavaScript',
    'TypeScript',
    'GraphQL',
    'ES6',
    '.Net',
    'Node Js',
    'C#',
    'React',
    'Express Js',
    'Gatsby',
    'Redux',
  ],
  frameworks_libraries: ['Bootstrap', 'Tailwind CSS', 'Ant Design', 'Material-UI'],
  databases: ['MSSQL', 'MongoDB'],
  cms: ['WordPress', 'Strapi', 'Netlify CMS'],
  various: ['Scrum', 'Jira', 'MVC', 'Git'],
};
