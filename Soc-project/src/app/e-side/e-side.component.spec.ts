import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESideComponent } from './e-side.component';

describe('ESideComponent', () => {
  let component: ESideComponent;
  let fixture: ComponentFixture<ESideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
