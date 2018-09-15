import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringServicesComponent } from './tutoring-services.component';

describe('TutoringServicesComponent', () => {
  let component: TutoringServicesComponent;
  let fixture: ComponentFixture<TutoringServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
