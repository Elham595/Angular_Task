import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexToolsComponent } from './complex-tools.component';

describe('ComplexToolsComponent', () => {
  let component: ComplexToolsComponent;
  let fixture: ComponentFixture<ComplexToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
