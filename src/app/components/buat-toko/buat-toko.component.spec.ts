import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatTokoComponent } from './buat-toko.component';

describe('BuatTokoComponent', () => {
  let component: BuatTokoComponent;
  let fixture: ComponentFixture<BuatTokoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatTokoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatTokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
