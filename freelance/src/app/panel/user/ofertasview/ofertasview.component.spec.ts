import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasviewComponent } from './ofertasview.component';

describe('OfertasviewComponent', () => {
  let component: OfertasviewComponent;
  let fixture: ComponentFixture<OfertasviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
