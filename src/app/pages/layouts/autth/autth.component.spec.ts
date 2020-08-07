import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutthComponent } from './autth.component';

describe('AutthComponent', () => {
  let component: AutthComponent;
  let fixture: ComponentFixture<AutthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
