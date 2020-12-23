import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterfcComponent } from './createrfc.component';

describe('CreaterfcComponent', () => {
  let component: CreaterfcComponent;
  let fixture: ComponentFixture<CreaterfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
