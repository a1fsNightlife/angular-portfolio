import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly formData = signal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  protected readonly isSubmitting = signal(false);

  protected readonly contactInfo: ContactInfo[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'hello@jakobNopens.dev',
      link: 'mailto:hello@jakobNopens.dev'
    },
    {
      icon: 'location_on',
      label: 'Location',
      value: 'Germany'
    },
    {
      icon: 'schedule',
      label: 'Availability',
      value: 'Open for opportunities'
    }
  ];

  protected readonly socialLinks = [
    { icon: 'code', label: 'GitHub', url: 'https://github.com/a1fsNightlife' },
    { icon: 'work', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'alternate_email', label: 'Twitter', url: 'https://twitter.com' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  updateField(field: string, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    const data = this.formData();
    if (!data.name || !data.email || !data.message) {
      this.snackBar.open('Please fill in all required fields', 'Close', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      return;
    }

    this.isSubmitting.set(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.snackBar.open('Message sent successfully! I\'ll get back to you soon.', 'Close', {
      duration: 5000,
      panelClass: 'success-snackbar'
    });

    this.formData.set({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    this.isSubmitting.set(false);
  }
}
