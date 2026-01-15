import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly roles = [
    'Full-Stack Developer',
    'Angular Specialist',
    'Problem Solver'
  ];

  protected readonly highlights = [
    { icon: 'code', label: 'Clean Code' },
    { icon: 'speed', label: 'Performance' },
    { icon: 'devices', label: 'Responsive' },
    { icon: 'security', label: 'Secure' }
  ];
}
