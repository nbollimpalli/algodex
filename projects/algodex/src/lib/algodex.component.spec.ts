import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodexComponent } from './algodex.component';

describe('AlgodexComponent', () => {
  let component: AlgodexComponent;
  let fixture: ComponentFixture<AlgodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
