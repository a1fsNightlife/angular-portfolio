import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the skills component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Skill Categories', () => {
    it('should have skillCategories array defined', () => {
      expect((component as any).skillCategories).toBeDefined();
    });

    it('should have exactly 4 skill categories', () => {
      expect((component as any).skillCategories.length).toBe(4);
    });

    it('should have Frontend category', () => {
      const frontend = (component as any).skillCategories.find((c: any) => c.title === 'Frontend');
      expect(frontend).toBeTruthy();
      expect(frontend?.icon).toBe('web');
    });

    it('should have Backend category', () => {
      const backend = (component as any).skillCategories.find((c: any) => c.title === 'Backend');
      expect(backend).toBeTruthy();
      expect(backend?.icon).toBe('dns');
    });

    it('should have all categories with title, icon, and skills array', () => {
      (component as any).skillCategories.forEach((category: any) => {
        expect(category.title).toBeDefined();
        expect(category.icon).toBeDefined();
        expect(category.skills).toBeDefined();
        expect(Array.isArray(category.skills)).toBe(true);
      });
    });
  });

  describe('Skill Levels', () => {
    it('should have all skill levels between 0 and 100', () => {
      (component as any).skillCategories.forEach((category: any) => {
        category.skills.forEach((skill: any) => {
          expect(skill.level).toBeGreaterThanOrEqual(0);
          expect(skill.level).toBeLessThanOrEqual(100);
        });
      });
    });

    it('should have all skills with numeric level values', () => {
      (component as any).skillCategories.forEach((category: any) => {
        category.skills.forEach((skill: any) => {
          expect(typeof skill.level).toBe('number');
        });
      });
    });
  });

  describe('Soft Skills', () => {
    it('should have softSkills array defined', () => {
      expect((component as any).softSkills).toBeDefined();
    });

    it('should have exactly 6 soft skills', () => {
      expect((component as any).softSkills.length).toBe(6);
    });

    it('should have all soft skills with icon and label', () => {
      (component as any).softSkills.forEach((skill: any) => {
        expect(skill.icon).toBeDefined();
        expect(skill.label).toBeDefined();
      });
    });
  });

  describe('Tools', () => {
    it('should have tools array defined', () => {
      expect((component as any).tools).toBeDefined();
    });

    it('should have exactly 12 tools', () => {
      expect((component as any).tools.length).toBe(12);
    });

    it('should contain VS Code', () => {
      expect((component as any).tools).toContain('VS Code');
    });

    it('should have all tools as non-empty strings', () => {
      (component as any).tools.forEach((tool: string) => {
        expect(typeof tool).toBe('string');
        expect(tool.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Skill Categories - Negative', () => {
    it('should not have empty skill categories array', () => {
      expect((component as any).skillCategories.length).not.toBe(0);
    });

    it('should not have duplicate category titles', () => {
      const titles = (component as any).skillCategories.map((c: any) => c.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });

    it('should not have categories without skills', () => {
      (component as any).skillCategories.forEach((category: any) => {
        expect(category.skills.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Skill Levels - Negative', () => {
    it('should not have skill levels above 100', () => {
      (component as any).skillCategories.forEach((category: any) => {
        category.skills.forEach((skill: any) => {
          expect(skill.level).not.toBeGreaterThan(100);
        });
      });
    });

    it('should not have skill levels below 0', () => {
      (component as any).skillCategories.forEach((category: any) => {
        category.skills.forEach((skill: any) => {
          expect(skill.level).not.toBeLessThan(0);
        });
      });
    });
  });

  describe('Tools - Negative', () => {
    it('should not have empty tools array', () => {
      expect((component as any).tools.length).not.toBe(0);
    });

    it('should not have duplicate tools', () => {
      const uniqueTools = new Set((component as any).tools);
      expect(uniqueTools.size).toBe((component as any).tools.length);
    });
  });

  describe('DOM Rendering', () => {
    it('should render the component element', () => {
      expect(fixture.nativeElement).toBeTruthy();
      expect(fixture.nativeElement.innerHTML).toBeTruthy();
    });
  });
});
