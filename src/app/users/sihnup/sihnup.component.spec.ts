import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SihnupComponent } from './sihnup.component';

describe('SihnupComponent', () => {
  let component: SihnupComponent;
  let fixture: ComponentFixture<SihnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SihnupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SihnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
