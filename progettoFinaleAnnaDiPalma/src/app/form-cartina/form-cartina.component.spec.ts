import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCartinaComponent } from './form-cartina.component';

describe('FormCartinaComponent', () => {
  let component: FormCartinaComponent;
  let fixture: ComponentFixture<FormCartinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCartinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCartinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
