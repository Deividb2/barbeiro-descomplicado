import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWhatsappComponent } from './call-whatsapp.component';

describe('CallWhatsappComponent', () => {
  let component: CallWhatsappComponent;
  let fixture: ComponentFixture<CallWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallWhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
