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
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Angular Material', level: 80 },
        { name: 'RxJS', level: 75 }
      ]
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Maven', level: 80 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Database',
      icon: 'storage',
      skills: [
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 75 },
        { name: 'JPA/Hibernate', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'build',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'VS Code', level: 85 }
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
    'IntelliJ IDEA', 'VS Code', 'Postman', 'GitHub', 'Maven',
    'npm', 'Angular CLI', 'Git', 'Docker', 'Swagger'
  ];
}
