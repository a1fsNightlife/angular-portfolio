import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatChipsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly categories = ['All', 'Web App', 'Mobile', 'API', 'Open Source'];
  protected readonly selectedCategory = signal('All');

  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.',
      image: 'shopping_cart',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and project analytics.',
      image: 'task_alt',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Material'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'REST API Framework',
      description: 'A scalable REST API framework with authentication, rate limiting, and comprehensive documentation.',
      image: 'api',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
      category: 'API',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication and real-time transaction tracking.',
      image: 'account_balance',
      technologies: ['Ionic', 'Angular', 'Node.js', 'MongoDB'],
      category: 'Mobile',
      featured: true
    },
    {
      id: 5,
      title: 'Open Source UI Library',
      description: 'A collection of reusable Angular components with accessibility features and comprehensive documentation.',
      image: 'widgets',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Storybook'],
      category: 'Open Source',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'A real-time analytics dashboard with customizable widgets, data visualization, and export features.',
      image: 'analytics',
      technologies: ['Angular', 'D3.js', 'WebSocket', 'Redis'],
      category: 'Web App',
      liveUrl: '#',
      featured: false
    }
  ];

  protected get filteredProjects(): Project[] {
    if (this.selectedCategory() === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory());
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
