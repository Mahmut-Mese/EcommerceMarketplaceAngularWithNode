import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreStoreComponent } from './store-store.component';

describe('StoreStoreComponent', () => {
  let component: StoreStoreComponent;
  let fixture: ComponentFixture<StoreStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
