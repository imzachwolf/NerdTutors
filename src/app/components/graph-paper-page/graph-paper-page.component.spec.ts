import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPaperPageComponent } from './graph-paper-page.component';

describe('GraphPaperPageComponent', () => {
  let component: GraphPaperPageComponent;
  let fixture: ComponentFixture<GraphPaperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPaperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPaperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
