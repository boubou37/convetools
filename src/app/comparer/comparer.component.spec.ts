import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparerComponent } from './comparer.component';

describe('ComparerComponent', () => {
  let component: ComparerComponent;
  let fixture: ComponentFixture<ComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
