import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

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
  imports: [MatIconModule, MatChipsModule, MatExpansionModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly categories = ['All', 'Web App', 'API'];
  protected readonly selectedCategory = signal('All');

  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'URLShortener',
      description:
        'A REST API for shortening URLs with redirect functionality. Built with clean architecture and comprehensive endpoint documentation.',
      image: 'link',
      technologies: ['Java', 'Maven'],
      category: 'API',
      githubUrl: 'https://github.com/JakobNopworx/URLShortener',
      featured: true,
    },
    {
      id: 2,
      title: 'Animal Welfare App',
      description:
        'A web application for animal welfare organizations to manage and showcase animals available for adoption.',
      image: 'pets',
      technologies: ['Angular', 'TypeScript', 'Material'],
      category: 'Web App',
      githubUrl: 'https://github.com/JakobNopworx/AnimalWelfareApp',
      featured: true,
    },
  ];

  protected readonly practiceProjects: Project[] = [
    {
      id: 101,
      title: 'DesignPatterns',
      description: 'Implementation examples of common software design patterns in Java.',
      image: 'architecture',
      technologies: ['Java', 'Maven'],
      category: 'Practice',
      githubUrl: 'https://github.com/JakobNopworx/DesignPatterns',
      featured: false,
    },
    {
      id: 102,
      title: 'AngularAufgaben',
      description: 'Collection of Angular exercises and learning projects.',
      image: 'school',
      technologies: ['Angular 13', 'TypeScript'],
      category: 'Practice',
      githubUrl: 'https://github.com/JakobNopworx/AngularAufgaben',
      featured: false,
    },
    {
      id: 103,
      title: 'goggles-needed',
      description: 'Experimental Angular project for trying out new features and concepts.',
      image: 'code',
      technologies: ['Angular 17', 'TypeScript'],
      category: 'Practice',
      githubUrl: 'https://github.com/JakobNopworx/goggles-needed',
      featured: false,
    },
  ];

  protected get filteredProjects(): Project[] {
    if (this.selectedCategory() === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === this.selectedCategory());
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
