import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComProvTableComponent } from './com-prov-table.component';

describe('ComProvTableComponent', () => {
  let component: ComProvTableComponent;
  let fixture: ComponentFixture<ComProvTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComProvTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComProvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
