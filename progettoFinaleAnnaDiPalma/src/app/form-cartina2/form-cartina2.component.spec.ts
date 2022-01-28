import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCartina2Component } from './form-cartina2.component';

describe('FormCartina2Component', () => {
  let component: FormCartina2Component;
  let fixture: ComponentFixture<FormCartina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCartina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCartina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
