import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the contact component', () => {
      expect(component).toBeTruthy();
    });

    it('should render the component without errors', () => {
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Form Data Signal', () => {
    it('should have formData signal defined', () => {
      expect((component as any).formData).toBeDefined();
    });

    it('should have empty initial form data', () => {
      const formData = (component as any).formData();
      expect(formData.name).toBe('');
      expect(formData.email).toBe('');
      expect(formData.subject).toBe('');
      expect(formData.message).toBe('');
    });

    it('should have all required form fields', () => {
      const formData = (component as any).formData();
      expect('name' in formData).toBe(true);
      expect('email' in formData).toBe(true);
      expect('subject' in formData).toBe(true);
      expect('message' in formData).toBe(true);
    });
  });

  describe('isSubmitting Signal', () => {
    it('should have isSubmitting signal defined', () => {
      expect((component as any).isSubmitting).toBeDefined();
    });

    it('should have isSubmitting as false initially', () => {
      expect((component as any).isSubmitting()).toBe(false);
    });
  });

  describe('Contact Info', () => {
    it('should have contactInfo array defined', () => {
      expect((component as any).contactInfo).toBeDefined();
    });

    it('should have exactly 3 contact info items', () => {
      expect((component as any).contactInfo.length).toBe(3);
    });

    it('should have Email contact info', () => {
      const email = (component as any).contactInfo.find((c: any) => c.label === 'Email');
      expect(email).toBeTruthy();
      expect(email?.icon).toBe('email');
      expect(email?.value).toContain('@');
    });

    it('should have all contact info with icon, label, and value', () => {
      (component as any).contactInfo.forEach((info: any) => {
        expect(info.icon).toBeDefined();
        expect(info.label).toBeDefined();
        expect(info.value).toBeDefined();
      });
    });
  });

  describe('Social Links', () => {
    it('should have socialLinks array defined', () => {
      expect((component as any).socialLinks).toBeDefined();
    });

    it('should have exactly 3 social links', () => {
      expect((component as any).socialLinks.length).toBe(3);
    });

    it('should have GitHub social link', () => {
      const github = (component as any).socialLinks.find((s: any) => s.label === 'GitHub');
      expect(github).toBeTruthy();
      expect(github?.url).toContain('github.com');
    });

    it('should have all social links with icon, label, and url', () => {
      (component as any).socialLinks.forEach((link: any) => {
        expect(link.icon).toBeDefined();
        expect(link.label).toBeDefined();
        expect(link.url).toBeDefined();
      });
    });
  });

  describe('updateField()', () => {
    it('should update name field', () => {
      const event = { target: { value: 'John Doe' } } as unknown as Event;
      component.updateField('name', event);
      expect((component as any).formData().name).toBe('John Doe');
    });

    it('should update email field', () => {
      const event = { target: { value: 'john@example.com' } } as unknown as Event;
      component.updateField('email', event);
      expect((component as any).formData().email).toBe('john@example.com');
    });

    it('should update subject field', () => {
      const event = { target: { value: 'Test Subject' } } as unknown as Event;
      component.updateField('subject', event);
      expect((component as any).formData().subject).toBe('Test Subject');
    });

    it('should update message field', () => {
      const event = { target: { value: 'Test Message' } } as unknown as Event;
      component.updateField('message', event);
      expect((component as any).formData().message).toBe('Test Message');
    });

    it('should preserve other fields when updating one field', () => {
      const nameEvent = { target: { value: 'John' } } as unknown as Event;
      const emailEvent = { target: { value: 'john@test.com' } } as unknown as Event;

      component.updateField('name', nameEvent);
      component.updateField('email', emailEvent);

      expect((component as any).formData().name).toBe('John');
      expect((component as any).formData().email).toBe('john@test.com');
    });
  });

  describe('onSubmit()', () => {
    it('should call preventDefault on form event', () => {
      const preventDefaultSpy = jest.fn();
      const event = { preventDefault: preventDefaultSpy } as unknown as Event;

      component.onSubmit(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  describe('Contact Info - Negative', () => {
    it('should not have empty contact info array', () => {
      expect((component as any).contactInfo.length).not.toBe(0);
    });

    it('should not have duplicate labels', () => {
      const labels = (component as any).contactInfo.map((c: any) => c.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });
  });

  describe('Social Links - Negative', () => {
    it('should not have empty social links array', () => {
      expect((component as any).socialLinks.length).not.toBe(0);
    });

    it('should not have duplicate social link labels', () => {
      const labels = (component as any).socialLinks.map((s: any) => s.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    it('should have valid URLs for all social links', () => {
      (component as any).socialLinks.forEach((link: any) => {
        expect(link.url.startsWith('http')).toBe(true);
      });
    });
  });

  describe('updateField() - Edge Cases', () => {
    it('should handle empty string update', () => {
      component.updateField('name', { target: { value: 'John' } } as unknown as Event);
      component.updateField('name', { target: { value: '' } } as unknown as Event);
      expect((component as any).formData().name).toBe('');
    });

    it('should handle whitespace-only value', () => {
      component.updateField('name', { target: { value: '   ' } } as unknown as Event);
      expect((component as any).formData().name).toBe('   ');
    });
  });

  describe('DOM Rendering', () => {
    it('should render the component element', () => {
      expect(fixture.nativeElement).toBeTruthy();
      expect(fixture.nativeElement.innerHTML).toBeTruthy();
    });
  });
});
