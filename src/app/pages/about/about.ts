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
  protected readonly timeline: TimelineItem[] = [
    {
      year: '2025',
      title: 'Frontend Developer',
      company: 'Keycon Informations GmbH',
      description:
        'Built embedded web applications using Angular as well as implementing modern UI/UX specifications for R+V Versicherung AG.',
    },
    {
      year: '2023',
      title: 'Junior Frontend Developer',
      company: 'Keycon Informations GmbH',
      description:
        'Development of Angular based, embedded, standalone applications for Atruvia AG, deepening Frontend knownledge.',
    },
    {
      year: '2021',
      title: 'Junior Full-Stack Developer',
      company: 'CompuSafe DataSystems AG',
      description:
        'Started learning and deep diving into enterprise software development by building web solutions for Allianz Technology SE using Angular, Spring Boot, and cloud technologies.',
    },
  ];

  protected readonly interests = [
    { icon: 'code', label: 'Open Source' },
    { icon: 'school', label: 'Learning' },
    { icon: 'sports_esports', label: 'Gaming' },
    { icon: 'music_note', label: 'Music' },
  ];
}
