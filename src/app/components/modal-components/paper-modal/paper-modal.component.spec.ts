import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperModalComponent } from './paper-modal.component';

describe('PaperModalComponent', () => {
  let component: PaperModalComponent;
  let fixture: ComponentFixture<PaperModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
