import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NoopAnimationsModule],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('DOM Structure', () => {
    it('should render header component', () => {
      const header = fixture.nativeElement.querySelector('app-header');
      expect(header).toBeTruthy();
    });

    it('should render footer component', () => {
      const footer = fixture.nativeElement.querySelector('app-footer');
      expect(footer).toBeTruthy();
    });

    it('should render router outlet', () => {
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });
});

describe('App Routes', () => {
  describe('Routes Configuration', () => {
    it('should have routes array defined', () => {
      expect(routes).toBeDefined();
    });

    it('should have exactly 6 routes', () => {
      expect(routes.length).toBe(6);
    });

    it('should have home route at root path', () => {
      const homeRoute = routes.find(r => r.path === '');
      expect(homeRoute).toBeTruthy();
      expect(homeRoute?.title).toBe('Home | Portfolio');
    });

    it('should have about route', () => {
      const aboutRoute = routes.find(r => r.path === 'about');
      expect(aboutRoute).toBeTruthy();
      expect(aboutRoute?.title).toBe('About Me | Portfolio');
    });

    it('should have skills route', () => {
      const skillsRoute = routes.find(r => r.path === 'skills');
      expect(skillsRoute).toBeTruthy();
      expect(skillsRoute?.title).toBe('Skills | Portfolio');
    });

    it('should have projects route', () => {
      const projectsRoute = routes.find(r => r.path === 'projects');
      expect(projectsRoute).toBeTruthy();
      expect(projectsRoute?.title).toBe('Projects | Portfolio');
    });

    it('should have contact route', () => {
      const contactRoute = routes.find(r => r.path === 'contact');
      expect(contactRoute).toBeTruthy();
      expect(contactRoute?.title).toBe('Contact | Portfolio');
    });

    it('should have wildcard route for 404', () => {
      const wildcardRoute = routes.find(r => r.path === '**');
      expect(wildcardRoute).toBeTruthy();
      expect(wildcardRoute?.redirectTo).toBe('');
    });

    it('should have all main routes with titles', () => {
      const mainRoutes = routes.filter(r => r.path !== '**');
      mainRoutes.forEach(route => {
        expect(route.title).toBeDefined();
        expect(String(route.title)).toContain('Portfolio');
      });
    });

    it('should have all main routes with lazy loading', () => {
      const mainRoutes = routes.filter(r => r.path !== '**');
      mainRoutes.forEach(route => {
        expect(route.loadComponent).toBeDefined();
      });
    });
  });

  describe('Routes - Negative', () => {
    it('should not have empty routes array', () => {
      expect(routes.length).not.toBe(0);
    });

    it('should not have duplicate paths', () => {
      const paths = routes.map(r => r.path);
      const uniquePaths = new Set(paths);
      expect(uniquePaths.size).toBe(paths.length);
    });

    it('should not have routes without path', () => {
      routes.forEach(route => {
        expect(route.path).toBeDefined();
      });
    });

    it('should not have main routes without loadComponent or redirectTo', () => {
      routes.forEach(route => {
        const hasLoadComponent = route.loadComponent !== undefined;
        const hasRedirectTo = route.redirectTo !== undefined;
        expect(hasLoadComponent || hasRedirectTo).toBe(true);
      });
    });

    it('wildcard route should not have loadComponent', () => {
      const wildcardRoute = routes.find(r => r.path === '**');
      expect(wildcardRoute?.loadComponent).toBeUndefined();
    });
  });

  describe('Route Paths', () => {
    const expectedPaths = ['', 'about', 'skills', 'projects', 'contact', '**'];

    expectedPaths.forEach(path => {
      it(`should have route for path: "${path || '(home)'}"`, () => {
        const route = routes.find(r => r.path === path);
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Route Titles', () => {
    const expectedTitles = [
      { path: '', title: 'Home | Portfolio' },
      { path: 'about', title: 'About Me | Portfolio' },
      { path: 'skills', title: 'Skills | Portfolio' },
      { path: 'projects', title: 'Projects | Portfolio' },
      { path: 'contact', title: 'Contact | Portfolio' }
    ];

    expectedTitles.forEach(({ path, title }) => {
      it(`should have correct title for path "${path || '(home)'}"`, () => {
        const route = routes.find(r => r.path === path);
        expect(route?.title).toBe(title);
      });
    });
  });
});
