import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegiComponent } from './vegi.component';

describe('VegiComponent', () => {
  let component: VegiComponent;
  let fixture: ComponentFixture<VegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
