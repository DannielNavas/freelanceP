import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractusComponent } from './contractus.component';

describe('ContractusComponent', () => {
  let component: ContractusComponent;
  let fixture: ComponentFixture<ContractusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
