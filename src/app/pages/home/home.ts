import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, About, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly roles = ['Full-Stack Developer', 'Angular & Spring Boot'];
  protected readonly sections = ['hero', 'about', 'skills', 'projects'];
  protected currentSectionIndex = signal(0);
  protected rippleKey = signal(0);

  protected readonly highlights = [
    { icon: 'code', label: 'Clean Code' },
    { icon: 'speed', label: 'Performance' },
    { icon: 'devices', label: 'Responsive' },
    { icon: 'security', label: 'Secure' },
  ];

  constructor() {
    let previousIndex = 0;
    effect(() => {
      const currentIndex = this.currentSectionIndex();
      if (currentIndex !== previousIndex) {
        previousIndex = currentIndex;
        this.rippleKey.update(k => k + 1);
      }
    });
  }

  ngOnInit(): void {
    const onScroll = () => this.updateCurrentSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
  }

  private updateCurrentSection(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.currentSectionIndex.set(i);
        break;
      }
    }
  }

  scrollToSection(direction: 'up' | 'down'): void {
    const currentIndex = this.currentSectionIndex();
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < this.sections.length) {
      const targetSection = document.getElementById(this.sections[newIndex]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  getRippleDelay(index: number): string {
    const distance = Math.abs(index - this.currentSectionIndex());
    return `${distance * 0.08}s`;
  }
}
