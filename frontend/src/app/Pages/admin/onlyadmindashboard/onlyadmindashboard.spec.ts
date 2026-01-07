import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onlyadmindashboard } from './onlyadmindashboard';

describe('Onlyadmindashboard', () => {
  let component: Onlyadmindashboard;
  let fixture: ComponentFixture<Onlyadmindashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onlyadmindashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onlyadmindashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
