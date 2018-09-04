import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusahaComponent } from './myusaha.component';

describe('MyusahaComponent', () => {
  let component: MyusahaComponent;
  let fixture: ComponentFixture<MyusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
