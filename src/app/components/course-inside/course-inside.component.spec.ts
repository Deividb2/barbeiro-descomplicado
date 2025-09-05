import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInsideComponent } from './course-inside.component';

describe('CourseInsideComponent', () => {
  let component: CourseInsideComponent;
  let fixture: ComponentFixture<CourseInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
