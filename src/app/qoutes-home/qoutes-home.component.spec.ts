import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesHomeComponent } from './qoutes-home.component';

describe('QoutesHomeComponent', () => {
  let component: QoutesHomeComponent;
  let fixture: ComponentFixture<QoutesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QoutesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
