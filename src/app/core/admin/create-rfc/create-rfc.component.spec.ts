import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRFCComponent } from './create-rfc.component';

describe('CreateRFCComponent', () => {
  let component: CreateRFCComponent;
  let fixture: ComponentFixture<CreateRFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRFCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
