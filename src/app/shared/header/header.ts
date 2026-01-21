import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface NavLink {
  label: string;
  fragment?: string;
  path?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { fragment: 'hero', label: 'Home' },
    { fragment: 'about', label: 'About' },
    { fragment: 'skills', label: 'Skills' },
    { fragment: 'projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  navigateToSection(link: NavLink): void {
    this.closeMenu();
    if (link.fragment) {
      // If we're on contact page, navigate to home first
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => this.scrollToFragment(link.fragment!), 100);
        });
      } else {
        this.scrollToFragment(link.fragment);
      }
    }
  }

  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
