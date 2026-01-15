import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '10+', label: 'Technologies' }
  ];

  protected readonly timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of enterprise Angular applications with focus on scalability and performance.'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Agency',
      description: 'Built custom web solutions for various clients using Angular, Node.js, and cloud technologies.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Startup',
      description: 'Developed responsive web applications and contributed to the company\'s design system.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'Software House',
      description: 'Started professional journey building web applications and learning best practices.'
    }
  ];

  protected readonly interests = [
    { icon: 'code', label: 'Open Source' },
    { icon: 'school', label: 'Learning' },
    { icon: 'sports_esports', label: 'Gaming' },
    { icon: 'music_note', label: 'Music' }
  ];
}
