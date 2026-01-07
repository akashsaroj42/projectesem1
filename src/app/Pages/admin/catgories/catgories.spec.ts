import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catgories } from './catgories';

describe('Catgories', () => {
  let component: Catgories;
  let fixture: ComponentFixture<Catgories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catgories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catgories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
