import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarFormComponent } from './komentar-form.component';

describe('KomentarFormComponent', () => {
  let component: KomentarFormComponent;
  let fixture: ComponentFixture<KomentarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
