import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsahaBuatComponent } from './usaha-buat.component';

describe('UsahaBuatComponent', () => {
  let component: UsahaBuatComponent;
  let fixture: ComponentFixture<UsahaBuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsahaBuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsahaBuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
