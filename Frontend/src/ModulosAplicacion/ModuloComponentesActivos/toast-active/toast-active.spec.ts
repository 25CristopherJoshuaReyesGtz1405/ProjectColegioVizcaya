import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastActive } from './toast-active';

describe('ToastActive', () => {
  let component: ToastActive;
  let fixture: ComponentFixture<ToastActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastActive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
