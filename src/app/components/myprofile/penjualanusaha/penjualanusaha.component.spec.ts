import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjualanusahaComponent } from './penjualanusaha.component';

describe('PenjualanusahaComponent', () => {
  let component: PenjualanusahaComponent;
  let fixture: ComponentFixture<PenjualanusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjualanusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjualanusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
