import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'web',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'RxJS', level: 85 },
        { name: 'SCSS/Sass', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'NestJS', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Database',
      icon: 'storage',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'build',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'AWS', level: 65 },
        { name: 'Linux', level: 75 }
      ]
    }
  ];

  protected readonly softSkills = [
    { icon: 'groups', label: 'Team Collaboration' },
    { icon: 'psychology', label: 'Problem Solving' },
    { icon: 'schedule', label: 'Time Management' },
    { icon: 'chat', label: 'Communication' },
    { icon: 'lightbulb', label: 'Creative Thinking' },
    { icon: 'trending_up', label: 'Continuous Learning' }
  ];

  protected readonly tools = [
    'VS Code', 'WebStorm', 'Figma', 'Postman', 'Jira', 'Confluence',
    'Slack', 'GitHub', 'GitLab', 'npm', 'Webpack', 'Jest'
  ];
}
