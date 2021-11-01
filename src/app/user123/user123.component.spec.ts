import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User123Component } from './user123.component';

describe('User123Component', () => {
  let component: User123Component;
  let fixture: ComponentFixture<User123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
