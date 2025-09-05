import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCompletionComponent } from './certificate-completion.component';

describe('CertificateCompletionComponent', () => {
  let component: CertificateCompletionComponent;
  let fixture: ComponentFixture<CertificateCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateCompletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
