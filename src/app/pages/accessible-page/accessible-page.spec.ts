import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessiblePage } from './accessible-page';

describe('AccessiblePage', () => {
  let component: AccessiblePage;
  let fixture: ComponentFixture<AccessiblePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessiblePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
