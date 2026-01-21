import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects, NoopAnimationsModule],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the projects component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Categories', () => {
    it('should have categories array defined', () => {
      expect((component as any).categories).toBeDefined();
    });

    it('should have exactly 3 categories', () => {
      expect((component as any).categories.length).toBe(3);
    });

    it('should have All category', () => {
      expect((component as any).categories).toContain('All');
    });

    it('should have Web App category', () => {
      expect((component as any).categories).toContain('Web App');
    });

    it('should have API category', () => {
      expect((component as any).categories).toContain('API');
    });
  });

  describe('Selected Category Signal', () => {
    it('should have selectedCategory signal defined', () => {
      expect((component as any).selectedCategory).toBeDefined();
    });

    it('should have All as default selected category', () => {
      expect((component as any).selectedCategory()).toBe('All');
    });
  });

  describe('Projects Array', () => {
    it('should have projects array defined', () => {
      expect((component as any).projects).toBeDefined();
    });

    it('should have exactly 2 projects', () => {
      expect((component as any).projects.length).toBe(2);
    });

    it('should have URLShortener project', () => {
      const project = (component as any).projects.find((p: any) => p.title === 'URLShortener');
      expect(project).toBeTruthy();
      expect(project?.category).toBe('API');
      expect(project?.featured).toBe(true);
    });

    it('should have Animal Welfare App project', () => {
      const project = (component as any).projects.find((p: any) => p.title === 'Animal Welfare App');
      expect(project).toBeTruthy();
      expect(project?.category).toBe('Web App');
      expect(project?.featured).toBe(true);
    });

    it('should have all projects with required properties', () => {
      (component as any).projects.forEach((project: any) => {
        expect(project.id).toBeDefined();
        expect(project.title).toBeDefined();
        expect(project.description).toBeDefined();
        expect(project.technologies).toBeDefined();
        expect(project.category).toBeDefined();
      });
    });

    it('should have all projects with unique IDs', () => {
      const ids = (component as any).projects.map((p: any) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('selectCategory()', () => {
    it('should update selectedCategory when called', () => {
      component.selectCategory('Web App');
      expect((component as any).selectedCategory()).toBe('Web App');
    });

    it('should update to API category', () => {
      component.selectCategory('API');
      expect((component as any).selectedCategory()).toBe('API');
    });

    it('should update back to All category', () => {
      component.selectCategory('Web App');
      component.selectCategory('All');
      expect((component as any).selectedCategory()).toBe('All');
    });
  });

  describe('filteredProjects getter', () => {
    it('should return all projects when category is All', () => {
      component.selectCategory('All');
      expect((component as any).filteredProjects.length).toBe(2);
    });

    it('should return only Web App projects when Web App is selected', () => {
      component.selectCategory('Web App');
      const filtered = (component as any).filteredProjects;
      expect(filtered.length).toBe(1);
      filtered.forEach((project: any) => {
        expect(project.category).toBe('Web App');
      });
    });

    it('should return only API projects when API is selected', () => {
      component.selectCategory('API');
      const filtered = (component as any).filteredProjects;
      expect(filtered.length).toBe(1);
      filtered.forEach((project: any) => {
        expect(project.category).toBe('API');
      });
    });
  });

  describe('Featured Projects', () => {
    it('should have at least one featured project', () => {
      const featuredProjects = (component as any).projects.filter((p: any) => p.featured);
      expect(featuredProjects.length).toBeGreaterThan(0);
    });

    it('should have exactly 2 featured projects', () => {
      const featuredProjects = (component as any).projects.filter((p: any) => p.featured);
      expect(featuredProjects.length).toBe(2);
    });
  });

  describe('Categories - Negative', () => {
    it('should not have empty categories array', () => {
      expect((component as any).categories.length).not.toBe(0);
    });

    it('should not have duplicate categories', () => {
      const uniqueCategories = new Set((component as any).categories);
      expect(uniqueCategories.size).toBe((component as any).categories.length);
    });
  });

  describe('Projects Array - Negative', () => {
    it('should not have empty projects array', () => {
      expect((component as any).projects.length).not.toBe(0);
    });

    it('should not have projects without title', () => {
      (component as any).projects.forEach((project: any) => {
        expect(project.title).not.toBeUndefined();
        expect(project.title).not.toBe('');
      });
    });

    it('should not have duplicate project IDs', () => {
      const ids = (component as any).projects.map((p: any) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('selectCategory() - Negative', () => {
    it('should handle selecting non-existent category gracefully', () => {
      component.selectCategory('NonExistent');
      expect((component as any).selectedCategory()).toBe('NonExistent');
      expect((component as any).filteredProjects.length).toBe(0);
    });
  });

  describe('DOM Rendering', () => {
    it('should render projects section', () => {
      const section = fixture.nativeElement.querySelector('.projects-section');
      expect(section).toBeTruthy();
    });

    it('should render material icons', () => {
      const icons = fixture.nativeElement.querySelectorAll('mat-icon');
      expect(icons.length).toBeGreaterThan(0);
    });
  });
});
