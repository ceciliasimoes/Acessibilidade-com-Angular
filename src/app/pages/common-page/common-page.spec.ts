import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPage } from './common-page';

describe('CommonPage', () => {
  let component: CommonPage;
  let fixture: ComponentFixture<CommonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
