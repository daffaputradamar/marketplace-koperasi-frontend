import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukCartComponent } from './produk-cart.component';

describe('ProdukCartComponent', () => {
  let component: ProdukCartComponent;
  let fixture: ComponentFixture<ProdukCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
