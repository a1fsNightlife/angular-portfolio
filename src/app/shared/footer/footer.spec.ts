import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ==================== POSITIVE TESTS ====================

  describe('Component Creation', () => {
    it('should create the footer component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Current Year', () => {
    it('should have currentYear property defined', () => {
      expect((component as any).currentYear).toBeDefined();
    });

    it('should have currentYear as a number', () => {
      expect(typeof (component as any).currentYear).toBe('number');
    });

    it('should return the current year', () => {
      const expectedYear = new Date().getFullYear();
      expect((component as any).currentYear).toBe(expectedYear);
    });

    it('should return a valid 4-digit year', () => {
      expect((component as any).currentYear).toBeGreaterThanOrEqual(2020);
      expect((component as any).currentYear).toBeLessThanOrEqual(2100);
    });

    it('should return a positive number', () => {
      expect((component as any).currentYear).toBeGreaterThan(0);
    });
  });

  // ==================== NEGATIVE TESTS ====================

  describe('Current Year - Negative', () => {
    it('should not return a year in the past (before 2020)', () => {
      expect((component as any).currentYear).not.toBeLessThan(2020);
    });

    it('should not return a future year beyond reasonable range', () => {
      expect((component as any).currentYear).not.toBeGreaterThan(2100);
    });

    it('should not be NaN', () => {
      expect(Number.isNaN((component as any).currentYear)).toBe(false);
    });

    it('should not be undefined or null', () => {
      expect((component as any).currentYear).not.toBeUndefined();
      expect((component as any).currentYear).not.toBeNull();
    });

    it('should not be a floating point number', () => {
      expect(Number.isInteger((component as any).currentYear)).toBe(true);
    });
  });

  // ==================== DOM TESTS ====================

  describe('DOM Rendering', () => {
    it('should render footer element', () => {
      const footerElement = fixture.nativeElement.querySelector('footer');
      expect(footerElement).toBeTruthy();
    });

    it('should contain copyright text', () => {
      const footerText = fixture.nativeElement.textContent;
      expect(footerText).toContain((component as any).currentYear.toString());
    });
  });
});
