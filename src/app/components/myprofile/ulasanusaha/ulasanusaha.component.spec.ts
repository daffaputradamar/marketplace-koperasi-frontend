import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlasanusahaComponent } from './ulasanusaha.component';

describe('UlasanusahaComponent', () => {
  let component: UlasanusahaComponent;
  let fixture: ComponentFixture<UlasanusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlasanusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlasanusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
