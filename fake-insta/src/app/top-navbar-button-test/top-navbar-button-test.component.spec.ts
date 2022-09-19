import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarButtonTestComponent } from './top-navbar-button-test.component';

describe('TopNavbarButtonTestComponent', () => {
  let component: TopNavbarButtonTestComponent;
  let fixture: ComponentFixture<TopNavbarButtonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavbarButtonTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavbarButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
