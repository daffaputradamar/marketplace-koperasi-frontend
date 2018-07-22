import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsahaDetailComponent } from './usaha-detail.component';

describe('UsahaDetailComponent', () => {
  let component: UsahaDetailComponent;
  let fixture: ComponentFixture<UsahaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsahaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsahaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
