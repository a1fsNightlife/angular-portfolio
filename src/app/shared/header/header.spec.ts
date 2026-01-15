import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header, NoopAnimationsModule],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ==================== POSITIVE TESTS ====================

  describe('Component Creation', () => {
    it('should create the header component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Navigation Links', () => {
    it('should have exactly 5 navigation links', () => {
      expect((component as any).navLinks.length).toBe(5);
    });

    it('should contain Home link with correct path', () => {
      const homeLink = (component as any).navLinks.find((link: any) => link.label === 'Home');
      expect(homeLink).toBeTruthy();
      expect(homeLink?.path).toBe('/');
    });

    it('should contain About link with correct path', () => {
      const aboutLink = (component as any).navLinks.find((link: any) => link.label === 'About');
      expect(aboutLink).toBeTruthy();
      expect(aboutLink?.path).toBe('/about');
    });

    it('should contain Skills link with correct path', () => {
      const skillsLink = (component as any).navLinks.find((link: any) => link.label === 'Skills');
      expect(skillsLink).toBeTruthy();
      expect(skillsLink?.path).toBe('/skills');
    });

    it('should contain Projects link with correct path', () => {
      const projectsLink = (component as any).navLinks.find((link: any) => link.label === 'Projects');
      expect(projectsLink).toBeTruthy();
      expect(projectsLink?.path).toBe('/projects');
    });

    it('should contain Contact link with correct path', () => {
      const contactLink = (component as any).navLinks.find((link: any) => link.label === 'Contact');
      expect(contactLink).toBeTruthy();
      expect(contactLink?.path).toBe('/contact');
    });

    it('should have all navigation links with non-empty labels', () => {
      (component as any).navLinks.forEach((link: any) => {
        expect(link.label).toBeTruthy();
        expect(link.label.length).toBeGreaterThan(0);
      });
    });

    it('should have all navigation links with valid paths', () => {
      (component as any).navLinks.forEach((link: any) => {
        expect(link.path).toBeDefined();
        expect(link.path.startsWith('/')).toBe(true);
      });
    });
  });

  describe('Menu State - Initial', () => {
    it('should have menu closed by default', () => {
      expect((component as any).isMenuOpen()).toBe(false);
    });
  });

  describe('toggleMenu()', () => {
    it('should open menu when called on closed menu', () => {
      expect((component as any).isMenuOpen()).toBe(false);
      component.toggleMenu();
      expect((component as any).isMenuOpen()).toBe(true);
    });

    it('should close menu when called on open menu', () => {
      component.toggleMenu(); // open
      expect((component as any).isMenuOpen()).toBe(true);
      component.toggleMenu(); // close
      expect((component as any).isMenuOpen()).toBe(false);
    });

    it('should toggle menu state multiple times correctly', () => {
      expect((component as any).isMenuOpen()).toBe(false);

      component.toggleMenu();
      expect((component as any).isMenuOpen()).toBe(true);

      component.toggleMenu();
      expect((component as any).isMenuOpen()).toBe(false);

      component.toggleMenu();
      expect((component as any).isMenuOpen()).toBe(true);

      component.toggleMenu();
      expect((component as any).isMenuOpen()).toBe(false);
    });
  });

  describe('closeMenu()', () => {
    it('should close an open menu', () => {
      component.toggleMenu(); // open
      expect((component as any).isMenuOpen()).toBe(true);
      component.closeMenu();
      expect((component as any).isMenuOpen()).toBe(false);
    });

    it('should keep menu closed if already closed', () => {
      expect((component as any).isMenuOpen()).toBe(false);
      component.closeMenu();
      expect((component as any).isMenuOpen()).toBe(false);
    });

    it('should close menu regardless of how many times toggle was called', () => {
      component.toggleMenu();
      component.toggleMenu();
      component.toggleMenu(); // now open
      expect((component as any).isMenuOpen()).toBe(true);
      component.closeMenu();
      expect((component as any).isMenuOpen()).toBe(false);
    });
  });

  // ==================== NEGATIVE TESTS ====================

  describe('Navigation Links - Negative', () => {
    it('should not have duplicate paths', () => {
      const paths = (component as any).navLinks.map((link: any) => link.path);
      const uniquePaths = new Set(paths);
      expect(uniquePaths.size).toBe(paths.length);
    });

    it('should not have duplicate labels', () => {
      const labels = (component as any).navLinks.map((link: any) => link.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    it('should not contain any link with empty path', () => {
      (component as any).navLinks.forEach((link: any) => {
        expect(link.path).not.toBe('');
      });
    });

    it('should not contain any link with empty label', () => {
      (component as any).navLinks.forEach((link: any) => {
        expect(link.label).not.toBe('');
      });
    });

    it('should not have more than 10 navigation links', () => {
      expect((component as any).navLinks.length).toBeLessThanOrEqual(10);
    });
  });

  describe('Menu State - Edge Cases', () => {
    it('should handle rapid toggle calls without breaking state', () => {
      for (let i = 0; i < 100; i++) {
        component.toggleMenu();
      }
      // After 100 toggles (even number), should be back to false
      expect((component as any).isMenuOpen()).toBe(false);
    });

    it('should handle closeMenu being called multiple times', () => {
      component.closeMenu();
      component.closeMenu();
      component.closeMenu();
      expect((component as any).isMenuOpen()).toBe(false);
    });
  });

  // ==================== DOM TESTS ====================

  describe('DOM Rendering', () => {
    it('should render the component element', () => {
      expect(fixture.nativeElement).toBeTruthy();
      expect(fixture.nativeElement.innerHTML).toBeTruthy();
    });
  });
});
