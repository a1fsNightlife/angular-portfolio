import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the about component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Stats', () => {
    it('should have stats array defined', () => {
      expect((component as any).stats).toBeDefined();
    });

    it('should have exactly 4 stats', () => {
      expect((component as any).stats.length).toBe(4);
    });

    it('should have Years Experience stat', () => {
      const stat = (component as any).stats.find((s: any) => s.label === 'Years Experience');
      expect(stat).toBeTruthy();
      expect(stat?.value).toBe('5+');
    });

    it('should have all stats with value and label', () => {
      (component as any).stats.forEach((stat: any) => {
        expect(stat.value).toBeDefined();
        expect(stat.label).toBeDefined();
      });
    });
  });

  describe('Timeline', () => {
    it('should have timeline array defined', () => {
      expect((component as any).timeline).toBeDefined();
    });

    it('should have exactly 4 timeline items', () => {
      expect((component as any).timeline.length).toBe(4);
    });

    it('should have timeline items in chronological order (newest first)', () => {
      const years = (component as any).timeline.map((item: any) => parseInt(item.year));
      for (let i = 0; i < years.length - 1; i++) {
        expect(years[i]).toBeGreaterThanOrEqual(years[i + 1]);
      }
    });

    it('should have all timeline items with required properties', () => {
      (component as any).timeline.forEach((item: any) => {
        expect(item.year).toBeDefined();
        expect(item.title).toBeDefined();
        expect(item.company).toBeDefined();
        expect(item.description).toBeDefined();
      });
    });
  });

  describe('Interests', () => {
    it('should have interests array defined', () => {
      expect((component as any).interests).toBeDefined();
    });

    it('should have exactly 4 interests', () => {
      expect((component as any).interests.length).toBe(4);
    });

    it('should have all interests with icon and label', () => {
      (component as any).interests.forEach((interest: any) => {
        expect(interest.icon).toBeDefined();
        expect(interest.label).toBeDefined();
      });
    });
  });

  describe('Stats - Negative', () => {
    it('should not have empty stats array', () => {
      expect((component as any).stats.length).not.toBe(0);
    });

    it('should not have duplicate labels', () => {
      const labels = (component as any).stats.map((s: any) => s.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });
  });

  describe('Timeline - Negative', () => {
    it('should not have empty timeline', () => {
      expect((component as any).timeline.length).not.toBe(0);
    });

    it('should not have timeline items without year', () => {
      (component as any).timeline.forEach((item: any) => {
        expect(item.year).not.toBeUndefined();
        expect(item.year).not.toBe('');
      });
    });
  });

  describe('DOM Rendering', () => {
    it('should render about section', () => {
      const section = fixture.nativeElement.querySelector('.about-section');
      expect(section).toBeTruthy();
    });

    it('should render material icons', () => {
      const icons = fixture.nativeElement.querySelectorAll('mat-icon');
      expect(icons.length).toBeGreaterThan(0);
    });
  });
});
