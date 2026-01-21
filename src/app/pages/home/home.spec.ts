import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, NoopAnimationsModule],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ==================== POSITIVE TESTS ====================

  describe('Component Creation', () => {
    it('should create the home component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Roles', () => {
    it('should have roles array defined', () => {
      expect((component as any).roles).toBeDefined();
    });

    it('should have exactly 2 roles', () => {
      expect((component as any).roles.length).toBe(2);
    });

    it('should contain Full-Stack Developer role', () => {
      expect((component as any).roles).toContain('Full-Stack Developer');
    });

    it('should contain Angular & Spring Boot role', () => {
      expect((component as any).roles).toContain('Angular & Spring Boot');
    });

    it('should have all roles as non-empty strings', () => {
      (component as any).roles.forEach((role: string) => {
        expect(typeof role).toBe('string');
        expect(role.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Highlights', () => {
    it('should have highlights array defined', () => {
      expect((component as any).highlights).toBeDefined();
    });

    it('should have exactly 4 highlights', () => {
      expect((component as any).highlights.length).toBe(4);
    });

    it('should have Clean Code highlight', () => {
      const cleanCode = (component as any).highlights.find((h: any) => h.label === 'Clean Code');
      expect(cleanCode).toBeTruthy();
      expect(cleanCode?.icon).toBe('code');
    });

    it('should have Performance highlight', () => {
      const performance = (component as any).highlights.find((h: any) => h.label === 'Performance');
      expect(performance).toBeTruthy();
      expect(performance?.icon).toBe('speed');
    });

    it('should have Responsive highlight', () => {
      const responsive = (component as any).highlights.find((h: any) => h.label === 'Responsive');
      expect(responsive).toBeTruthy();
      expect(responsive?.icon).toBe('devices');
    });

    it('should have Secure highlight', () => {
      const secure = (component as any).highlights.find((h: any) => h.label === 'Secure');
      expect(secure).toBeTruthy();
      expect(secure?.icon).toBe('security');
    });

    it('should have all highlights with icon and label properties', () => {
      (component as any).highlights.forEach((highlight: any) => {
        expect(highlight.icon).toBeDefined();
        expect(highlight.label).toBeDefined();
        expect(highlight.icon.length).toBeGreaterThan(0);
        expect(highlight.label.length).toBeGreaterThan(0);
      });
    });
  });

  // ==================== NEGATIVE TESTS ====================

  describe('Roles - Negative', () => {
    it('should not have empty roles array', () => {
      expect((component as any).roles.length).not.toBe(0);
    });

    it('should not have duplicate roles', () => {
      const uniqueRoles = new Set((component as any).roles);
      expect(uniqueRoles.size).toBe((component as any).roles.length);
    });

    it('should not contain empty string roles', () => {
      (component as any).roles.forEach((role: string) => {
        expect(role.trim()).not.toBe('');
      });
    });

    it('should not have more than 10 roles', () => {
      expect((component as any).roles.length).toBeLessThanOrEqual(10);
    });
  });

  describe('Highlights - Negative', () => {
    it('should not have empty highlights array', () => {
      expect((component as any).highlights.length).not.toBe(0);
    });

    it('should not have duplicate labels', () => {
      const labels = (component as any).highlights.map((h: any) => h.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    it('should not have highlights with empty icons', () => {
      (component as any).highlights.forEach((highlight: any) => {
        expect(highlight.icon.trim()).not.toBe('');
      });
    });

    it('should not have highlights with empty labels', () => {
      (component as any).highlights.forEach((highlight: any) => {
        expect(highlight.label.trim()).not.toBe('');
      });
    });

    it('should not have highlights without icon property', () => {
      (component as any).highlights.forEach((highlight: any) => {
        expect(highlight.icon).not.toBeUndefined();
        expect(highlight.icon).not.toBeNull();
      });
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
